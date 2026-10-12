import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/CtaBand";
import { EngagementStatus } from "@/components/EngagementStatus";
import { audiences, engagement, impact, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Qorvyn Systems delivers enterprise-grade IT consulting, cybersecurity, and cloud services built for small and mid-sized businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "About" }]}
        eyebrow="About Qorvyn"
        title="Enterprise-grade technology, right-sized for your business."
        intro="Qorvyn Systems helps small and mid-sized businesses plan, secure, integrate, and improve the systems their work depends on. We bring disciplined technical execution and clear business thinking to organizations that need serious capability without the overhead of a large consulting firm."
      />

      <section className="frame pt-12 md:pt-16">
        <Photo src="/about.webp" alt="Women focused on digital work at a shared office table" eager />
      </section>

      <section className="frame grid gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24">
        <div>
          <p className="body-copy text-[18px]">
            Our consulting spans IT strategy, cloud infrastructure (with deep expertise in AWS and working knowledge across
            major cloud platforms), DevSecOps, cybersecurity, API integration, automation, AI and machine learning, software
            delivery, and operational support. Every engagement is shaped to the need, from a focused initiative for a
            growing business to complex delivery alongside larger internal teams.
          </p>
          <p className="h-feature mt-10 max-w-[30ch]">
            The goal is never more technology. It is better business through the right technology.
          </p>
        </div>
        <div className="card-ice self-start p-6">
          <p className="font-display text-[71px] leading-none" style={{ fontWeight: 450 }}>8+</p>
          <p className="mt-3 text-[16px] font-semibold">Years of principal experience</p>
          <p className="body-copy mt-1">Led by a consultant with 8+ years of professional IT experience.</p>
        </div>
      </section>

      <section className="border-y border-rule-gray">
        <div className="frame py-16 md:py-24">
          <p className="eyebrow mb-3">What guides us</p>
          <h2 className="h-major max-w-[20ch]">Core values that keep the work grounded.</h2>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {values.map((v) => (
              <li key={v.title} className="border-t border-ink pt-5">
                <h3 className="h-feature">{v.title}</h3>
                <p className="body-copy mt-3">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="frame py-16 md:py-24">
        <p className="eyebrow mb-3">Practical business impact</p>
        <h2 className="h-major max-w-[22ch]">How we help firms stay productive and profitable.</h2>
        <ul className="mt-12 grid border-t border-l border-rule-gray sm:grid-cols-2">
          {impact.map((x) => (
            <li key={x.title} className="border-r border-b border-rule-gray p-6 md:p-8">
              <p className="eyebrow mb-3">{x.label}</p>
              <h3 className="h-feature">{x.title}</h3>
              <p className="body-copy mt-3">{x.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="frame pb-16 md:pb-24">
        <div className="card-ice p-6 md:p-12">
          <p className="eyebrow mb-3">A typical engagement</p>
          <h2 className="h-section max-w-[24ch]">From disconnected tools to a dependable operating system.</h2>
          <p className="body-copy mt-5 max-w-[68ch]">{engagement.scenario}</p>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <ol className="space-y-8">
              {engagement.steps.map((s, i) => (
                <li key={s.phase}>
                  <p className="font-mono text-[14px] font-medium text-network-green">Step {i + 1}: {s.phase}</p>
                  <h3 className="h-feature mt-2">{s.title}</h3>
                  <p className="body-copy mt-2">{s.body}</p>
                </li>
              ))}
            </ol>
            <div className="space-y-6">
              <EngagementStatus />
              <p className="border-l-2 border-network-green pl-4">
                <span className="font-semibold">The qualitative outcome: </span>
                <span className="body-copy">{engagement.outcome}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-rule-gray">
        <div className="frame grid gap-6 py-16 md:grid-cols-[1fr_2fr] md:py-24">
          <div>
            <p className="eyebrow mb-3">Who we work with</p>
            <h2 className="h-section max-w-[16ch]">Built for the people doing the work.</h2>
          </div>
          <ul className="grid gap-8 sm:grid-cols-3">
            {audiences.map((a) => (
              <li key={a.title} className="border-t border-rule-gray pt-5">
                <h3 className="font-sans text-[16px] font-semibold">{a.title}</h3>
                <p className="body-copy mt-2">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
