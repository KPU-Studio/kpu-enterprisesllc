"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { focuses, services } from "@/lib/content";

type FocusId = (typeof focuses)[number]["id"];

// Diagram layout (viewBox 1200 x 440). Left column = secure + build-left,
// right column = modernize + build-right. Each rail: outer artifact -> service -> Qorvyn node.
const rails: { slug: string; side: "l" | "r"; y: number; artifact: string }[] = [
  { slug: "cybersecurity", side: "l", y: 92, artifact: "Identity & access" },
  { slug: "devsecops", side: "l", y: 220, artifact: "Release pipeline" },
  { slug: "it-strategy", side: "l", y: 348, artifact: "Roadmap" },
  { slug: "cloud-infrastructure", side: "r", y: 92, artifact: "AWS + IaC" },
  { slug: "api-automation", side: "r", y: 220, artifact: "CRM + ERP" },
  { slug: "ai-machine-learning", side: "r", y: 348, artifact: "Document intake" },
];

const CX = 600;
const CY = 220;
const NODE = 76;
const charW = 8.45; // IBM Plex Mono 14px advance
const chipW = (t: string) => Math.round(t.length * charW + 26);
const CHIP_H = 32;

function Chip({ x, y, text, active, align }: { x: number; y: number; text: string; active: boolean; align: "start" | "middle" | "end" }) {
  const w = chipW(text);
  const left = align === "start" ? x : align === "end" ? x - w : x - w / 2;
  return (
    <g>
      <rect
        x={left}
        y={y - CHIP_H / 2}
        width={w}
        height={CHIP_H}
        rx={2}
        fill={active ? "#f0f8f9" : "#ffffff"}
        stroke={active ? "#29735c" : "#dcdcdc"}
        className="transition-[fill,stroke] duration-300"
      />
      <text
        x={left + w / 2}
        y={y + 5}
        textAnchor="middle"
        fontFamily="IBM Plex Mono, ui-monospace, monospace"
        fontSize={14}
        fontWeight={500}
        fill={active ? "#151515" : "#706f6f"}
        className="transition-[fill] duration-300"
      >
        {text}
      </text>
    </g>
  );
}

export function RailDiagram() {
  const [focus, setFocus] = useState<FocusId>("secure");
  const tabsId = useId();
  const current = focuses.find((f) => f.id === focus)!;
  const activeSlugs = new Set<string>(current.services);

  return (
    <div>
      {/* Focus switch */}
      <div className="flex flex-col items-center gap-4">
        <p className="eyebrow" id={`${tabsId}-label`}>What are you working on?</p>
        <div role="tablist" aria-labelledby={`${tabsId}-label`} className="inline-flex rounded-nav bg-paper p-1" style={{ boxShadow: "inset 0 0 0 1px #151515" }}>
          {focuses.map((f) => {
            const selected = f.id === focus;
            return (
              <button
                key={f.id}
                role="tab"
                type="button"
                id={`${tabsId}-${f.id}`}
                aria-selected={selected}
                aria-controls={`${tabsId}-panel`}
                onClick={() => setFocus(f.id)}
                className={`rounded-sm px-4 py-1.5 text-[14px] font-semibold capitalize transition-colors ${
                  selected ? "bg-ink text-paper" : "text-graphite hover:text-ink"
                }`}
              >
                {f.word}
              </button>
            );
          })}
        </div>
        <p id={`${tabsId}-panel`} role="tabpanel" aria-labelledby={`${tabsId}-${focus}`} aria-live="polite" className="body-copy max-w-[52ch] text-center">
          {current.line}
        </p>
      </div>

      {/* Desktop diagram */}
      <svg
        viewBox="0 0 1200 440"
        className="mt-6 hidden w-full md:block"
        role="img"
        aria-label={`Diagram: Qorvyn connects six service areas. Highlighted for ${current.word}: ${current.services
          .map((s) => services.find((x) => x.slug === s)?.title)
          .join(" and ")}.`}
      >
        <defs>
          <style>{`
            @keyframes rail-flow { to { stroke-dashoffset: -24; } }
            .rail-live { stroke-dasharray: 6 6; animation: rail-flow 1.2s linear infinite; }
            @media (prefers-reduced-motion: reduce) { .rail-live { animation: none; stroke-dasharray: none; } }
          `}</style>
        </defs>

        {/* rails (inactive first so active ones draw on top) */}
        {[false, true].map((drawActive) =>
          rails
            .filter((r) => activeSlugs.has(r.slug) === drawActive)
            .map((r) => {
              const svc = services.find((s) => s.slug === r.slug)!;
              const dir = r.side === "l" ? -1 : 1;
              const outerX = CX + dir * 540;
              const svcX = CX + dir * 280;
              const trunkX = CX + dir * 150;
              const nodeEdge = CX + dir * (NODE / 2);
              const d = `M ${outerX} ${r.y} H ${svcX} H ${trunkX} V ${CY + (r.y - CY) * 0.12} H ${nodeEdge}`;
              const active = drawActive;
              return (
                <g key={r.slug}>
                  <path d={d} fill="none" stroke={active ? "#29735c" : "#dcdcdc"} strokeWidth={active ? 1.6 : 1} />
                  {active && <path d={d} fill="none" stroke="#ffffff" strokeWidth={1.6} className="rail-live" opacity={0.75} />}
                  <circle cx={trunkX} cy={r.y} r={3} fill={active ? "#29735c" : "#cbcac8"} />
                  <Chip x={outerX} y={r.y} text={r.artifact} active={active} align={r.side === "l" ? "start" : "end"} />
                  <Chip x={svcX} y={r.y} text={svc.label} active={active} align="middle" />
                </g>
              );
            })
        )}

        {/* center node — Qorvyn brand badge */}
        <image href="/logo.png" x={CX - NODE / 2} y={CY - NODE / 2} width={NODE} height={NODE} />
        <text x={CX} y={CY + NODE / 2 + 26} textAnchor="middle" fontFamily="IBM Plex Mono, ui-monospace, monospace" fontSize={14} fontWeight={500} fill="#7b5953">
          Qorvyn
        </text>
      </svg>

      {/* Mobile: the same information as a list */}
      <ul className="mt-8 divide-y divide-rule-gray border-y border-rule-gray text-left md:hidden">
        {current.services.map((slug) => {
          const s = services.find((x) => x.slug === slug)!;
          return (
            <li key={slug}>
              <Link href={`/services/${slug}`} className="flex items-center justify-between gap-4 py-4">
                <span className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-network-green" aria-hidden="true" />
                  <span className="text-[16px] font-medium">{s.title}</span>
                </span>
                <span className="font-mono text-[14px] text-steel">{rails.find((r) => r.slug === slug)?.artifact}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
