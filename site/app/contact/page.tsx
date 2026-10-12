import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free 30-minute strategy session with Qorvyn Systems.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Contact" }]}
        eyebrow="Start with a focused conversation"
        title="Book a free 30-minute strategy session."
        intro="Tell us what you are working toward, where the friction is, and what a successful outcome would look like. We will review your inquiry and follow up with the right next step."
      />
      <section className="frame pt-12 md:pt-16">
        <Photo src="/contact.webp" alt="Two Black women reviewing work together on a laptop in a modern office" eager />
      </section>
      <section className="frame grid gap-12 py-16 md:py-24 lg:grid-cols-[1.6fr_1fr]">
        <ContactForm />
        <aside className="card-ice self-start p-6">
          <p className="eyebrow mb-3">What happens next</p>
          <ol className="space-y-4">
            {[
              "We reply to every inquiry within one business day.",
              "We schedule a 30-minute session to understand the objective, environment, and constraints.",
              "We follow up with the right next step for your situation.",
            ].map((t, i) => (
              <li key={t} className="grid grid-cols-[24px_1fr] gap-2">
                <span className="font-mono text-[14px] font-medium text-network-green">{i + 1}</span>
                <span className="body-copy">{t}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-edge-gray pt-4 text-[14px]">
            Prefer email? <a href={`mailto:${site.email}`} className="link-underline font-semibold">{site.email}</a>
          </p>
        </aside>
      </section>
    </>
  );
}
