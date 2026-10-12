import Link from "next/link";
import { Logo } from "./Logo";
import { nav, services, site } from "@/lib/content";

const linkCls = "text-[14px] text-white/60 transition-colors hover:text-paper";
const titleCls = "mb-3 text-[14px] font-semibold text-paper";

export function SiteFooter() {
  return (
    <footer className="bg-forest-ledger text-paper">
      <div className="frame pt-16 pb-10">
        <div className="flex flex-col gap-6 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-[16px] font-semibold">Bring the goal, the friction, and the constraints.</p>
            <p className="mt-1 text-[16px] text-white/60" style={{ fontWeight: 330 }}>
              A free 30-minute strategy session. We reply to every inquiry within one business day.
            </p>
          </div>
          <Link
            href={site.cta.href}
            className="inline-flex w-fit items-center rounded-sm border border-mint-subscription bg-mint-subscription px-3 py-1.5 text-[14px] font-semibold text-ink hover:bg-paper"
          >
            {site.cta.short}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/20 pt-12 md:grid-cols-6">
          <div className="col-span-2">
            <Logo inverted />
            <p className="mt-4 max-w-xs text-[14px] text-white/60" style={{ fontWeight: 330 }}>
              IT consulting, cybersecurity, and cloud services for small and mid-sized businesses.
            </p>
          </div>
          <div className="col-span-2">
            <p className={titleCls}>Services</p>
            <ul className="space-y-2" style={{ fontWeight: 330 }}>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className={linkCls}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className={titleCls}>Company</p>
            <ul className="space-y-2" style={{ fontWeight: 330 }}>
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href} className={linkCls}>{n.label}</Link></li>
              ))}
              <li><Link href="/contact" className={linkCls}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className={titleCls}>Legal</p>
            <ul className="space-y-2" style={{ fontWeight: 330 }}>
              <li><Link href="/privacy" className={linkCls}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={linkCls}>Terms of Use</Link></li>
              <li><a href={`mailto:${site.email}`} className={linkCls}>{site.email}</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-14 text-[14px] text-white/40" style={{ fontWeight: 330 }}>
          © {new Date().getFullYear()} Qorvyn Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
