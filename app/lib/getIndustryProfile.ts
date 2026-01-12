/**
 * Get Industry profile from session
 * Client-safe version for UI gates
 * 
 * TEMP v1: Returns defaults
 * Later: will read from client-side session context or props passed from server
 */

import type { IndustryProfile } from "./profile";

/**
 * Client-safe profile getter
 * For use in client components that need to gate UI
 * 
 * In the future, this will be wired to:
 * - Context API (session context provider)
 * - Props passed from server component parent
 * - Client-side session store
 */
export function getIndustryProfile(): IndustryProfile {
  // PLACEHOLDER: Returns default values for now
  // Later: will read from SessionContext or props
  return {
    role: "patron",
    state: "starter" as const,
  };
}

