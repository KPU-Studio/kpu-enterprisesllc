import { engagement } from "@/lib/content";

const states = ["Complete", "Complete", "In progress", "Planned"] as const;

/** Contained "product status" screen: the example engagement shown as a tracked workstream. */
export function EngagementStatus() {
  return (
    <figure className="self-start overflow-hidden rounded-card bg-ink text-paper">
      <div className="flex items-center justify-between border-b border-white/15 px-5 py-3">
        <span className="font-mono text-[14px] font-medium text-white/70">engagement / ops-modernization</span>
        <span className="font-mono text-[14px] font-medium text-mint-subscription">Week 6</span>
      </div>
      <ol>
        {engagement.steps.map((s, i) => {
          const state = states[i];
          const done = state === "Complete";
          const live = state === "In progress";
          return (
            <li key={s.phase} className="grid grid-cols-[16px_1fr_auto] items-start gap-4 border-b border-white/10 px-5 py-4 last:border-b-0">
              <span
                aria-hidden="true"
                className={`mt-1.5 h-2.5 w-2.5 ${done ? "bg-network-green" : live ? "bg-mint-subscription" : "border border-white/40"}`}
              />
              <div>
                <p className="font-mono text-[14px] font-medium text-white/60">{s.phase}</p>
                <p className="mt-1 text-[16px] font-medium">{s.title}</p>
              </div>
              <span className={`mt-0.5 font-mono text-[14px] ${done ? "text-mint-subscription" : "text-white/60"}`}>{state}</span>
            </li>
          );
        })}
      </ol>
      <figcaption className="border-t border-white/15 px-5 py-3 text-[14px] text-white/50">
        Illustrative example based on typical engagements.
      </figcaption>
    </figure>
  );
}
