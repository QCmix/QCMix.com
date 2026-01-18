# Build Fixes and Technical Notes

Date: 2026-01-18

## Summary
During SEO implementation, metadata was initially added to client components. Next.js requires metadata to be exported only from server components. This caused `npm run dev`/`build` failures.

## Fix
- Removed `export const metadata` from client pages:
  - `app/page.tsx`, `app/bars/page.tsx`, `app/musicians/page.tsx`, `app/bartenders/page.tsx`, `app/industry/page.tsx`
- Added route-level server `layout.tsx` to host metadata:
  - `app/bars/layout.tsx`, `app/musicians/layout.tsx`, `app/bartenders/layout.tsx`, `app/industry/layout.tsx`
- Cleaned `next.config.js` to remove rewrites for `/sitemap.xml` and `/robots.txt` (now handled by `app/sitemap.ts` and `public/robots.txt`)

## Current State
- Global metadata in `app/layout.tsx` with Open Graph, Twitter, robots
- Route-level metadata present for key role pages
- Sitemap and robots configured correctly

## Next Steps
- Run `npm run build` to verify
- If any ESLint/TypeScript errors arise, address per file with minimal changes

## Commands
```bash
npm run build
npm run lint
```
