import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { measures, process } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "How Qorvyn Systems plans, delivers, and measures technology consulting work.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Approach" }]}
        eyebrow="How we work"
        title="A practical technology consulting process."
        intro="Good technology should remove friction, improve visibility, and make the business more resilient. Our work stays grounded in those outcomes from start to finish."
      />

      <section className="frame py-16 md:py-24">
        <ol className="relative border-l border-rule-gray pl-8 md:pl-12">
          {process.map((step, i) => (
            <li key={step.title} className="relative pb-14 last:pb-0">
              <span className="absolute top-1 -left-[37px] flex h-[10px] w-[10px] bg-network-green md:-left-[53px]" aria-hidden="true" />
              <p className="font-mono text-[14px] font-medium text-network-green">Step {i + 1}</p>
              <h2 className="h-section mt-2">{step.title}</h2>
              <p className="body-copy mt-3 max-w-[56ch] text-[18px]">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="frame pb-8">
        <div className="card-plum grid gap-10 p-6 md:p-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 font-mono text-[14px] font-medium text-mint-subscription">Measures that matter</p>
            <h2 className="h-section max-w-[18ch]">Technology outcomes tied to business performance.</h2>
            <p className="mt-5 max-w-[48ch] text-white/75">
              Baselines and targets are agreed before work begins, so improvement is measured against the reality of your
              environment, not a vanity number.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-white/15 sm:grid-cols-2">
            {measures.map((m) => (
              <div key={m.title} className="bg-plum-ledger p-6">
                <dt className="text-[16px] font-semibold">{m.title}</dt>
                {m.detail.map((d) => (
                  <dd key={d} className="mt-2 font-mono text-[14px] text-white/70">{d}</dd>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
