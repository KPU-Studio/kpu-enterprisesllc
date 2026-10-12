type Props = { className?: string; inverted?: boolean };

/** Qorvyn mark: an ink node with a ring and a network-green tail (the "Q"). */
export function LogoMark({ className = "h-7 w-7", inverted = false }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="2" fill={inverted ? "#ffffff" : "#151515"} />
      <circle cx="15" cy="15" r="7" fill="none" stroke={inverted ? "#151515" : "#ffffff"} strokeWidth="3" />
      <path d="M19.5 19.5 L25.5 25.5" stroke="#29735c" strokeWidth="3.2" strokeLinecap="square" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark inverted={inverted} />
      <span className={`font-display text-[17px] font-semibold tracking-[-0.01em] ${inverted ? "text-paper" : "text-ink"}`}>
        Qorvyn Systems
      </span>
    </span>
  );
}
