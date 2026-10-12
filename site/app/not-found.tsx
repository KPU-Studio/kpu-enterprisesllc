import Link from "next/link";

export default function NotFound() {
  return (
    <section className="graph-paper border-b border-rule-gray">
      <div className="frame py-28 text-center md:py-40">
        <p className="eyebrow mb-4">404</p>
        <h1 className="h-major">This page isn’t here.</h1>
        <p className="body-copy mx-auto mt-4 max-w-[48ch]">The link may be out of date. Start from the homepage or browse services.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-dark">Go to the homepage</Link>
          <Link href="/services" className="btn-outline px-4 py-2 text-[16px]">Browse services</Link>
        </div>
      </div>
    </section>
  );
}
