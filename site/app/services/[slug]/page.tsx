import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { getService, services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.summary, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const index = services.indexOf(s);
  const related = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]}
        eyebrow={`Service ${String(index + 1).padStart(2, "0")}`}
        title={s.title}
        intro={s.summary}
      />

      <section className="frame grid gap-12 py-16 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-24">
        <div>
          <p className="eyebrow mb-3">Service overview</p>
          <h2 className="h-section">Technology shaped around the outcome.</h2>
          <p className="body-copy mt-5 text-[18px]">{s.overview}</p>

          <div className="card-ice mt-10 p-6">
            <p className="eyebrow mb-2">Who it is for</p>
            <p className="body-copy">{s.audience}</p>
          </div>
        </div>

        <aside>
          <p className="eyebrow mb-4">What’s included</p>
          <ul className="border-t border-ink">
            {s.scope.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-rule-gray py-3.5 text-[16px] font-medium">
                <span className="h-2 w-2 shrink-0 bg-network-green" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="border-t border-rule-gray">
        <div className="frame py-16">
          <p className="eyebrow mb-6">Related services</p>
          <ul className="grid gap-px overflow-hidden rounded-card border border-rule-gray bg-rule-gray sm:grid-cols-2 lg:grid-cols-5">
            {related.map((r) => (
              <li key={r.slug} className="bg-paper">
                <Link href={`/services/${r.slug}`} className="block h-full p-5 transition-colors hover:bg-ice-panel">
                  <p className="font-mono text-[14px] font-medium text-steel">{r.label}</p>
                  <p className="mt-2 text-[16px] font-medium">{r.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
