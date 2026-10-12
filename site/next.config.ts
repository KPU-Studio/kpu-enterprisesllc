import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML/CSS/JS to ./out,
// which Cloudflare serves as static assets (Workers or Pages).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
};

export default nextConfig;
