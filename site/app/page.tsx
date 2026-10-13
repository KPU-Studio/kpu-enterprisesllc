import Link from "next/link";
import { RailDiagram } from "@/components/RailDiagram";
import { CtaBand } from "@/components/CtaBand";
import { EngagementStatus } from "@/components/EngagementStatus";
import { audiences, engagement, measures, process, services, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="graph-paper border-b border-rule-gray">
        <div className="frame pt-16 pb-14 text-center md:pt-24 md:pb-20">
          <p className="eyebrow mb-4">IT, cybersecurity and cloud consulting</p>
          <h1 className="h-hero mx-auto max-w-[19ch]">Enterprise-grade IT, built for growing businesses.</h1>
          <p className="mx-auto mt-6 max-w-[58ch] text-[16px] text-ink/80 md:text-[18px]">
            Qorvyn delivers practical IT consulting, cybersecurity, and cloud services for small and mid-sized businesses,
            with the depth to support larger teams and complex environments.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href={site.cta.href} className="btn-dark">{site.cta.label}</Link>
            <Link href="/services" className="btn-outline px-4 py-2 text-[16px]">Explore our services</Link>
          </div>
          <div className="mt-16 md:mt-20">
            <RailDiagram />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="frame py-20 md:py-28">
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-3">What we do</p>
            <h2 className="h-major max-w-[18ch]">IT consulting across cloud, security, software, and AI.</h2>
          </div>
          <p className="body-copy max-w-[52ch] md:justify-self-end">
            From the first assessment to implementation and ongoing improvement, every engagement starts with the business
            outcome, not the tool.
          </p>
        </div>

        <ul className="grid border-t border-l border-rule-gray sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="border-r border-b border-rule-gray">
              <Link href={`/services/${s.slug}`} className="group flex h-full flex-col p-6 transition-colors hover:bg-ice-panel md:p-8">
                <p className="eyebrow mb-3">{s.label}</p>
                <h3 className="h-feature">{s.title}</h3>
                <p className="body-copy mt-3 flex-1">{s.summary}</p>
                <span className="mt-6 text-[14px] font-semibold underline decoration-edge-gray underline-offset-4 group-hover:decoration-ink">
                  Learn more
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Engagement story */}
      <section className="frame pb-20 md:pb-28">
        <div className="card-ice grid gap-10 p-6 md:p-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow mb-3">A typical engagement</p>
            <h2 className="h-section max-w-[20ch]">From disconnected tools to a dependable operating system.</h2>
            <p className="body-copy mt-5">{engagement.scenario}</p>
            <p className="mt-5 border-l-2 border-network-green pl-4 text-[16px]">
              <span className="font-semibold">The outcome: </span>
              <span className="body-copy">{engagement.outcome}</span>
            </p>
            <Link href="/about" className="link-underline mt-6 inline-block text-[14px] font-semibold">
              Read the full engagement
            </Link>
          </div>
          <EngagementStatus />
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-rule-gray">
        <div className="frame py-20 md:py-28">
          <p className="eyebrow mb-3">How we work</p>
          <h2 className="h-major max-w-[20ch]">A practical technology consulting process.</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-8">
            {process.map((step, i) => (
              <li key={step.title} className="border-t border-ink pt-5">
                <p className="font-mono text-[14px] font-medium text-network-green">Step {i + 1}</p>
                <h3 className="h-feature mt-3">{step.title}</h3>
                <p className="body-copy mt-3">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Measures */}
      <section className="frame py-20 md:py-28">
        <div className="card-plum grid gap-10 overflow-hidden p-6 md:p-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
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

      {/* Audiences */}
      <section className="frame pb-4">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">Who we work with</p>
            <h2 className="h-section max-w-[16ch]">Built for the people doing the work.</h2>
          </div>
          <ul className="grid gap-8 sm:grid-cols-3">
            {audiences.map((a) => (
              <li key={a.title} className="border-t border-rule-gray pt-5">
                <h3 className="text-[16px] font-semibold font-sans">{a.title}</h3>
                <p className="body-copy mt-2">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Not sure which service fits?" body="Start with the business problem. We will help identify the right path forward." />
    </>
  );
}
