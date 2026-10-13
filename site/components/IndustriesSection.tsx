import { Marquee } from "./Marquee";
import { ServiceIcon } from "./ServiceIcon";
import { industries } from "@/lib/content";

function Chip({ label, icon }: { label: string; icon: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-card border border-rule-gray bg-paper px-5 py-3 text-[16px] font-medium transition-colors hover:border-ink">
      <ServiceIcon name={icon} className="h-[18px] w-[18px] shrink-0 text-network-green" />
      {label}
    </span>
  );
}

export function IndustriesSection() {
  const half = Math.ceil(industries.length / 2);
  const rows = [industries.slice(0, half), industries.slice(half)];
  return (
    <section className="border-y border-rule-gray bg-ice-panel/50 py-16 md:py-24">
      <div className="frame mb-10">
        <p className="eyebrow mb-3">Industries we serve</p>
        <h2 className="h-major max-w-[22ch]">Experience across the sectors our clients operate in.</h2>
      </div>
      <div className="space-y-4">
        {rows.map((row, i) => (
          <Marquee key={i} reverse={i === 1} durationSec={i === 0 ? 48 : 54}>
            {row.map((it) => (
              <Chip key={it.name} label={it.name} icon={it.icon} />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
