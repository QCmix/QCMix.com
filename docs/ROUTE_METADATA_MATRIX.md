# Route Metadata Matrix

Authoritative mapping of routes to SEO metadata, Open Graph tags, and canonical URLs.

Last updated: 2026-01-18

## Summary
- Global defaults set in `app/layout.tsx` (Open Graph, Twitter, robots, canonical)
- Route-specific metadata via server `layout.tsx` files for client routes
- Sitemap at `/sitemap.xml` via `app/sitemap.ts`
- robots.txt located in `public/robots.txt`

## Routes

- /
  - Source: `app/layout.tsx`
  - Title: QCMix - Quad Cities Nightlife Platform for Bars, Venues & Musicians
  - Canonical: https://qcmix.com
  - Schema: Organization, LocalBusiness (layout JSON-LD), Homepage FAQ injected client-side

- /bars
  - Source: `app/bars/layout.tsx`
  - Title: Quad Cities Bars & Venues | QCMix
  - Canonical: https://qcmix.com/bars
  - OG: title/desc + `/images/og-image.jpg`

- /musicians
  - Source: `app/musicians/layout.tsx`
  - Title: Musicians in the Quad Cities | QCMix - Book Gigs & Promote Music
  - Canonical: https://qcmix.com/musicians

- /bartenders
  - Source: `app/bartenders/layout.tsx`
  - Title: Bartenders Jobs in Quad Cities | QCMix - Find Work & Grow Your Career
  - Canonical: https://qcmix.com/bartenders

- /industry
  - Source: `app/industry/layout.tsx`
  - Title: Industry Partners & Distributors | QCMix - Quad Cities B2B Nightlife
  - Canonical: https://qcmix.com/industry

- /privacy
  - Source: `app/privacy/page.tsx`
  - Per-page metadata included at file top (server component)

- /terms
  - Source: `app/terms/page.tsx`
  - Per-page metadata included at file top (server component)

- /cookies
  - Source: `app/cookies/page.tsx`
  - Per-page metadata included at file top (server component)

## Notes
- Client pages (`'use client'`) must not export `metadata`; per-route `layout.tsx` hosts metadata.
- Use `generateMetadata` for dynamic routes; static `metadata` for static routes.
- Always include canonical URL in route metadata to reinforce authority.
