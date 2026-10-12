import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "IT Services & Solutions",
  description:
    "Cybersecurity consulting, cloud infrastructure, DevSecOps, API integration and automation, and AI/ML solutions for growing businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Services" }]}
        eyebrow="What we do"
        title="IT consulting across cloud, security, software, and AI."
        intro="From the first assessment to implementation and ongoing improvement, every engagement starts with the business outcome, not the tool."
      />
      <section className="frame pt-12 md:pt-16">
        <Photo src="/services.webp" alt="A diverse team of professionals collaborating around laptops in a modern office" eager />
      </section>
      <section className="frame py-16 md:py-24">
        <ol className="divide-y divide-rule-gray border-y border-rule-gray">
          {services.map((s, i) => (
            <li key={s.slug} className="grid gap-6 py-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
              <div>
                <p className="eyebrow mb-3">Service {String(i + 1).padStart(2, "0")}</p>
                <h2 className="h-section">{s.title}</h2>
              </div>
              <div>
                <p className="body-copy">{s.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.scope.map((item) => (
                    <li key={item} className="rounded-sm border border-rule-gray bg-paper px-2.5 py-1 font-mono text-[14px] text-graphite">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="btn-outline mt-6">
                  {s.title}: details
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand title="Not sure which service fits?" body="Start with the business problem. We will help identify the right path forward." />
    </>
  );
}
