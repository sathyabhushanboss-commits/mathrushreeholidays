# Mathrushree Holidays — Tour & Travels Website

A 5-page Next.js (App Router) site for Mathrushree Holidays, a Bengaluru-based
tours & travels agency.

## Pages
- `/` — Home (animated route-line hero, top routes, testimonials)
- `/about` — About us
- `/packages` — All 6 tour packages with itinerary highlights
- `/gallery` — Photo gallery with lightbox
- `/contact` — Contact form (opens WhatsApp), map embed, address/hours

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion for animation (page-load reveals, animated route-line SVG, gallery lightbox)
- lucide-react icons

## SEO included
- Per-page `metadata` (title, description, canonical) via Next's Metadata API
- Open Graph + Twitter card metadata
- `TravelAgency` JSON-LD structured data (name, address, phone, hours) in the root layout
- `app/sitemap.ts` and `app/robots.ts` (auto-generate `/sitemap.xml` and `/robots.txt`)
- Semantic HTML (`<h1>`–`<h2>`, `<article>`, `<blockquote>`), descriptive alt/aria labels
- Fast static generation — every page is prerendered

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before going live
1. **Real photos**: `app/gallery/page.tsx` uses CSS-gradient placeholder tiles
   (clearly labeled in the file) — swap `gradient` for real trip photos using
   `next/image`.
2. **Business details**: everything (address, phone, WhatsApp number, email,
   hours, package prices/highlights, testimonials) lives in one file:
   `lib/site.ts`. Edit there and it updates across every page.
3. **Domain**: update `site.url` in `lib/site.ts` to your real domain — it
   feeds the sitemap, canonical URLs, and Open Graph tags.
4. **Google Business Profile**: the contact page embeds a Google Maps iframe
   built from the address in `lib/site.ts` — no API key needed.
5. Run `npm run build` to generate the production build, then deploy (Vercel,
   or any Node host).

## Notes
- Google Fonts (Fraunces, Manrope, JetBrains Mono) are fetched at build time
  via `next/font/google`, so `npm run build` needs internet access once.
- Animations respect `prefers-reduced-motion` (see `app/globals.css`).
