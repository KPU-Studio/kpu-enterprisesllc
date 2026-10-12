// Static export (next.config: images.unoptimized) serves these as plain files
// from /public, so a native <img> is the right primitive here.
export function Photo({
  src,
  alt,
  className = "aspect-[16/7]",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <figure className={`overflow-hidden rounded-card border border-rule-gray ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </figure>
  );
}
