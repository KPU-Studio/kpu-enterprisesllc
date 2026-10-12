import Link from "next/link";
import { site } from "@/lib/content";

export function CtaBand({
  title = "Ready to clarify the right next step?",
  body = "Bring the goal, the friction, and the constraints. We will help frame a practical path forward.",
}: { title?: string; body?: string }) {
  return (
    <section className="frame py-16 md:py-24">
      <div className="card-ice flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-12">
        <div className="max-w-2xl">
          <h2 className="h-section">{title}</h2>
          <p className="body-copy mt-3">{body}</p>
        </div>
        <Link href={site.cta.href} className="btn-dark w-fit shrink-0">{site.cta.label}</Link>
      </div>
    </section>
  );
}
