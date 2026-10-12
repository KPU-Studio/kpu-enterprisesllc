import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Straight answers on fit, process, and how Qorvyn approaches complex technology work.",
  alternates: { canonical: "/faq" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        crumbs={[{ label: "FAQ" }]}
        eyebrow="Frequently asked questions"
        title="Answers about our technology consulting services."
        intro="Straight answers on fit, process, and how Qorvyn approaches complex technology work."
      />
      <section className="frame py-16 md:py-24">
        <div className="mx-auto max-w-[820px] border-t border-ink">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-rule-gray">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h2 className="h-feature">{f.q}</h2>
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="body-copy max-w-[66ch] pb-7">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
