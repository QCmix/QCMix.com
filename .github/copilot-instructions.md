Purpose
-------
Short reference to get an AI coding agent productive in this repository.

Key facts
---------
- Framework: Next.js 14 (app directory) with TypeScript and Tailwind CSS.
- Scripts: `npm run dev`, `npm run build`, `npm start`, `npm run lint` (see `package.json`).
- Styling: Tailwind v4 with custom theme tokens (`bg.*`, `ink.*`, `brand.*`) — see `tailwind.config.js`.
- Path alias: `@/*` maps to repo root (see `tsconfig.json`).
- Dependencies: Firebase, Supabase, Framer Motion, Lucide React, Vercel Analytics.
- No testing framework configured - add testing setup if needed.

Architecture & patterns
-----------------------
- App dir routing: pages are in `app/` using `page.tsx` and `layout.tsx` files. Add nested routes under `app/`.
- Client vs Server: files with `"use client"` are client components (e.g., `context/AuthContext.tsx`); most layout and route files run on the server by default.
- Auth: Firebase handles client auth. `firebase/config.ts` exports `auth` and `db`. `context/AuthContext.tsx` uses `onAuthStateChanged` and reads Firestore `users/{uid}` for profiles.
- Server DB: Supabase server client is created in `lib/supabase/server.ts` using `SUPABASE_SERVICE_ROLE_KEY` — treat that key as secret and only use server-side.
- Role-based protection: `middleware.ts` redirects unauthenticated/role-less requests from `/dashboard` to `/industry-join` — it checks the `qcmix_role` cookie.
- Role config: role and permission mappings live under `config/roleConfigs.ts` and `lib/roles.ts`.
- Server Actions: located in `app/actions/` — handle server-side logic like setting cookies and account activation.

Env & secrets
-------------
- Public client envs: `NEXT_PUBLIC_FIREBASE_*`, `NEXT_PUBLIC_SUPABASE_URL`.
- Server-only secrets: `SUPABASE_SERVICE_ROLE_KEY` (must never be committed).
- Example usage: `firebase/config.ts` reads `NEXT_PUBLIC_FIREBASE_*`; `lib/supabase/server.ts` reads `SUPABASE_SERVICE_ROLE_KEY`.

Common tasks & where to change them
---------------------------------
- Add server-side DB work: update or call `createServerSupabaseClient()` from `lib/supabase/server.ts` in server routes or server components.
- Update auth behavior: modify `context/AuthContext.tsx` (client) and `firebase/config.ts` (credentials). For server-side auth flows, prefer Supabase server client.
- Protect routes: `middleware.ts` centrally enforces `/dashboard` access via cookie `qcmix_role`. If changing role logic, update `middleware.ts` and any code that sets that cookie.
- UI components: reusable components live in `components/` and `app/*/components/`. Use existing `Header`, `PageTransition`, and layout patterns in `app/layout.tsx`.
- Add server actions: create in `app/actions/` directory for server-side operations like cookie management and account state changes.

Conventions & idioms
--------------------
- Firestore user profile: stored in collection `users` keyed by Firebase `uid` (see `context/AuthContext.tsx`).
- Server-side Supabase: `persistSession` is set to `false` in `lib/supabase/server.ts` — expect stateless server calls.
- Styling: prefer Tailwind utility classes and the project's extended theme tokens (colors under `brand`, `ink`, etc.).
- Animations/UX: `PageTransition` wrapper is used around route children for consistent transitions.
- Global layout: `app/layout.tsx` includes noise texture overlay and radial gradient background pattern — maintain this aesthetic when adding pages.
- Color system: Use `bg.*` tokens for backgrounds, `ink.*` for text hierarchy, `brand.*` for accent colors (defined in `tailwind.config.js`).
- Client components: mark with `"use client"` at top of file (see `context/AuthContext.tsx`, form pages in `app/join/*`, interactive pages).

Editing guidelines for agents
----------------------------
- Do not commit secret keys. Ensure `SUPABASE_SERVICE_ROLE_KEY` stays server-only.
- Preserve cookie name `qcmix_role` when touching auth/middleware unless intentionally refactoring both setter and middleware.
- When adding new routes use `app/<route>/page.tsx` and, if needed, `layout.tsx` for nested layouts.
- Use the `@/*` import alias for repo-root imports to match existing code.

## Reference Page

Use `app/about/page.tsx` as the canonical example for:
- Public, no-login informational pages
- Layout, spacing, tone
- Tailwind usage (clean `max-w-3xl mx-auto px-6 py-12 space-y-10` pattern)

## Component Organization

- Root-level reusable components: `components/` (Header, PageTransition, Footer, etc.)
- Route-specific components: `app/[route]/components/` 
- Global providers and context: `context/` directory
- UI follows consistent patterns: ambient lighting effects, noise texture overlay, brand color palette

## Routing Intent

- `/explore/*` → public, educational content about venues/music
- `/discover/*` → public, discovery experiences  
- `/read/*` → public, editorial content
- `/understand/*` → public, system explanations
- `/bars`, `/musicians`, `/bartenders` → public gateways
- `/dashboard/*` → authenticated user dashboards
- `/industry/*` → authenticated industry features

Files to inspect for context
---------------------------
- `package.json` — scripts & deps
- `middleware.ts` — role-based redirects
- `firebase/config.ts` and `context/AuthContext.tsx` — client auth and profile shape
- `lib/supabase/server.ts` — server DB access
- `config/roleConfigs.ts`, `lib/roles.ts` — role/permission logic
- `app/layout.tsx`, `components/Header.tsx`, `components/PageTransition.tsx` — global layout patterns

If unsure, ask specifically
-------------------------
- If you need to change auth flow, say whether the change is client-only, server-only, or both.
- If altering role names or cookie behavior, ask where the cookie is set so middleware and UI can be updated together.

Feedback
--------
Tell me if you'd like more examples (code snippets) for any of the above patterns or want tests/CI steps added.
