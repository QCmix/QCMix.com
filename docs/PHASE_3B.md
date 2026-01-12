# Phase 3B — Profile Source of Truth

## What changed
- Defined minimal IndustryProfile schema (role + state)
- Cookies are the v1 source of truth
- Server-only read via getIndustryProfile()

## Cookies used
- qcmix_role
- qcmix_session

## Why this works
- Deterministic SSR
- No DB yet
- Easy migration to database later

## Next
- Phase 3C: soft redirects
- Admin verification flow writes upgrades
