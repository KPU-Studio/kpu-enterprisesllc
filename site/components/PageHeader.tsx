import Link from "next/link";

type Crumb = { label: string; href?: string };

export function PageHeader({ crumbs, eyebrow, title, intro }: { crumbs: Crumb[]; eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="graph-paper border-b border-rule-gray">
      <div className="frame pt-10 pb-16 md:pt-12 md:pb-24">
        <nav aria-label="Breadcrumb" className="mb-14 text-[14px] text-steel">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {c.href ? <Link href={c.href} className="hover:text-ink">{c.label}</Link> : <span aria-current="page" className="text-ink">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="h-major max-w-[20ch]">{title}</h1>
        {intro && <p className="body-copy mt-5 max-w-[60ch] text-[18px]">{intro}</p>}
      </div>
    </section>
  );
}
