type Props = { className?: string };

/** Qorvyn brand badge: teal hexagon, copper field, dark "Q". */
export function LogoMark({ className = "h-7 w-7" }: Props) {
  // Self-contained colored badge (dark ground), so it reads on light and dark backgrounds alike.
  return <img src="/logo.png" alt="" width={28} height={28} className={`${className} rounded-sm`} />;
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className={`font-display text-[17px] font-semibold tracking-[-0.01em] ${inverted ? "text-paper" : "text-ink"}`}>
        Qorvyn Systems
      </span>
    </span>
  );
}
