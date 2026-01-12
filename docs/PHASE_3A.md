# Phase 3A — Cookie Session Activation

## What changed
- Added server action to write `qcmix_session=starter`
- Activation now persists session state via HTTP-only cookie
- No auth provider
- No redirects beyond welcome

## Guarantees
- Deterministic SSR
- Static-safe (action only on submit)
- Soft guards now read real session state

## Next
- Phase 3B: Profile source of truth
- Phase 3C: Optional soft redirects
