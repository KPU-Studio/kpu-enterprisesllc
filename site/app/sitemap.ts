import type { MetadataRoute } from "next";
import { services, site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/approach", "/about", "/faq", "/contact", "/privacy", "/terms", ...services.map((s) => `/services/${s.slug}`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
