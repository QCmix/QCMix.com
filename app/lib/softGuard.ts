/**
 * Capability-based access control
 * Supports both UI gating (boolean) and redirects (throw)
 */

import { redirect } from "next/navigation";
import type { AccountState, IndustryRole } from './profile';

export type Capability = 'verify' | 'post' | 'moderate' | 'admin';

interface AccessRequest {
  role: IndustryRole;
  state: AccountState;
  capability: Capability;
  redirectTo?: string;
}

/**
 * Capability matrix (v1)
 * Defines who can do what based on role + account state
 */
const capabilityMatrix: Record<IndustryRole, Record<AccountState, Capability[]>> = {
  patron: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post'],
    restricted: [],
  },
  bartender: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post', 'moderate'],
    restricted: [],
  },
  musician: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post'],
    restricted: [],
  },
  distributor: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post'],
    restricted: [],
  },
  owner: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post', 'moderate', 'admin'],
    restricted: [],
  },
  worker: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post', 'moderate'],
    restricted: [],
  },
};

/**
 * Check if user has capability
 * If redirectTo provided and not allowed, redirect
 * Otherwise return boolean
 */
export function softGuard({
  role,
  state,
  capability,
  redirectTo,
}: AccessRequest): boolean {
  const capabilities = capabilityMatrix[role]?.[state] || [];
  const allowed = capabilities.includes(capability);

  if (!allowed && redirectTo) {
    redirect(redirectTo);
  }

  return allowed;
}
