import type { ReactNode } from "react";

// CSS-only infinite marquee: the row is duplicated so translateX(-50%) loops
// seamlessly. Pauses on hover/focus; collapses to a static wrapped grid under
// prefers-reduced-motion (see .marquee rules in globals.css). No JS shipped.
export function Marquee({
  children,
  reverse = false,
  durationSec = 40,
  fade = true,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  durationSec?: number;
  fade?: boolean;
  className?: string;
}) {
  return (
    <div className={`marquee ${fade ? "marquee-fade" : ""} ${className}`}>
      <div
        className={`marquee-track ${reverse ? "is-reverse" : ""}`}
        style={{ "--marquee-duration": `${durationSec}s` } as React.CSSProperties}
      >
        <div className="marquee-set">{children}</div>
        <div className="marquee-set" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
