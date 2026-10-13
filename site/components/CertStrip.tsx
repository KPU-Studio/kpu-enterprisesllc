import { Marquee } from "./Marquee";
import { certifications, type Certification } from "@/lib/content";

function CertBadge({ name, logo, dup = false }: Certification & { dup?: boolean }) {
  return (
    <span
      data-dup={dup ? "" : undefined}
      aria-hidden={dup || undefined}
      className="group inline-flex h-20 w-44 shrink-0 items-center justify-center rounded-card border border-rule-gray bg-paper px-5"
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          decoding="async"
          className="max-h-12 w-auto opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      ) : (
        // Placeholder until real badge files land in public/certs/.
        <span className="text-center font-mono text-[13px] font-medium text-steel transition-colors group-hover:text-network-green">
          {name}
        </span>
      )}
    </span>
  );
}

export function CertStrip() {
  // Repeat the (small) credential set so the marquee row fills and scrolls smoothly.
  const filled = Array.from({ length: Math.max(8, certifications.length) }, (_, i) => certifications[i % certifications.length]);
  return (
    <section className="border-t border-rule-gray">
      <div className="frame py-16 md:py-20">
        <p className="eyebrow mb-3">Certifications</p>
        <h2 className="h-section max-w-[24ch]">Active certifications behind the work.</h2>
        <div className="mt-10">
          <Marquee durationSec={34}>
            {filled.map((c, i) => (
              <CertBadge key={`${c.name}-${i}`} {...c} dup={i >= certifications.length} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
