"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 border-b border-rule-gray bg-paper shadow-nav">
      <div className="frame flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Qorvyn Systems home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-nav px-3 py-1.5 text-[14px] font-medium transition-colors hover:bg-ice-panel ${
                isActive(item.href) ? "text-ink" : "text-graphite"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={`mailto:${site.email}`} className="btn-outline">Email us</a>
          <Link href={site.cta.href} className="btn-dark-sm border-ink">{site.cta.short}</Link>
        </div>

        <button
          type="button"
          className="btn-outline md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-rule-gray bg-paper md:hidden">
          <ul className="frame flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block border-b border-rule-gray py-3 text-[16px] font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link href={site.cta.href} className="btn-dark w-full justify-center">{site.cta.label}</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
