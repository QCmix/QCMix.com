/**
 * Get Industry profile from session
 * Two versions:
 * - Client: Returns defaults (UI gating only)
 * - Server: Returns authoritative profile (redirects/governance)
 */

import type { IndustryProfile } from "./profile";

/**
 * Client-safe profile getter
 * For use in client components that need to gate UI
 * 
 * In the future, this will be wired to:
 * - Context API (session context provider)
 * - Props passed from server component parent
 */
export function getIndustryProfile(): IndustryProfile {
  // PLACEHOLDER: Returns default values
  // Later: will read from SessionContext or props
  return {
    role: "patron",
    state: "starter",
  };
}

/**
 * Server-side profile getter (authoritative)
 * For use in Server Components or page-level redirects
 * 
 * Later: will read from:
 * - Authenticated session
 * - Database
 * - Cookies with verification
 */
export function getIndustryProfileServer(): IndustryProfile {
  // PLACEHOLDER: Returns default values
  // Later: will read from cookies() or authenticated session
  return {
    role: "patron",
    state: "starter",
  };
}
