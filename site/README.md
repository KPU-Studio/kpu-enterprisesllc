# Qorvyn Systems website

Next.js (App Router) + Tailwind CSS v4, exported as a static site and served by Cloudflare.
Design tokens follow `DESIGN.md` (white graph-paper canvas, Ink controls, Network Green rails, Forest footer).

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Deploy

`next build` writes the finished site to `./out` (`output: "export"` in `next.config.ts`).

**Cloudflare Workers (static assets)** — config in `wrangler.jsonc`:

```bash
npx wrangler login
npm run deploy
```

Then attach `qorvynsystems.com` under Workers & Pages → qorvyn-systems → Settings → Domains & Routes
(or uncomment the `routes` block in `wrangler.jsonc`).

**Cloudflare Pages** (Git integration): build command `npm run build`, output directory `out`,
environment variable `NODE_VERSION=22`. Or from the CLI: `npm run deploy:pages`.

`public/_redirects` keeps the old `service-*.html` URLs working; `public/_headers` sets security and cache headers.

## Where things live

| What | File |
| --- | --- |
| All page copy, services, FAQ, contact-form settings | `lib/content.ts` |
| Privacy Policy and Terms of Use text | `lib/legal.ts` |
| Design tokens (colors, type, radii) | `app/globals.css` |
| Header, footer, hero diagram, shared pieces | `components/` |
| Pages | `app/**/page.tsx` |

The contact form posts directly to Web3Forms from the browser (same access key as the old site), so no server code is needed.

## Need server-side features later?

Static export covers this site. If you add API routes, middleware, or server rendering, switch to
[`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare), which runs full Next.js on Workers.
