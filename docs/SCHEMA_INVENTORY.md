# Schema Inventory (JSON-LD)

Comprehensive list of structured data embedded across the site.

Last updated: 2026-01-18

## Global Schemas (all pages)
- Organization (layout `<head>`)
  - name: QCMix
  - url: https://qcmix.com
  - logo: https://qcmix.com/logo.png
  - sameAs: Twitter, Instagram, Facebook
  - areaServed: Davenport, Bettendorf, Cedar Rapids, Dubuque
- LocalBusiness (layout `<head>`)
  - areaServed: Quad Cities geo midpoint (41.5868, -90.6646); radius 25km
  - potentialAction: EntryPoint to /join

## Homepage
- FAQPage injected client-side (app/page.tsx)
  - Questions: What is QCMix? How to join? Free? Coverage areas?

## Future Schemas (planned)
- JobPosting (bartenders positions)
- Event (live shows & venue events)
- LocalBusiness (individual venue profiles)
- BreadcrumbList (site-wide navigation)

## Validation
- Validate via Google Rich Results Test
- Ensure MIME type is `application/ld+json`
- One schema block per type, avoid duplication
