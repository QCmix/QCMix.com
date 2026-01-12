/**
 * Capability-based access control
 * Non-blocking: returns boolean, no redirects
 * Used for UI gating and soft restrictions
 */

import type { AccountState } from './session';

export type UserRole = 'patron' | 'bartender' | 'musician' | 'distributor' | 'owner';
export type Capability = 'verify' | 'post' | 'moderate' | 'admin';

interface AccessRequest {
  role: string;
  state: AccountState | null;
  capability: Capability;
}

/**
 * Capability matrix (v1)
 * Defines who can do what based on role + account state
 */
const capabilityMatrix: Record<UserRole, Record<AccountState, Capability[]>> = {
  patron: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post'],
    restricted: [],
    suspended: [],
  },
  bartender: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post', 'moderate'],
    restricted: [],
    suspended: [],
  },
  musician: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post'],
    restricted: [],
    suspended: [],
  },
  distributor: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post'],
    restricted: [],
    suspended: [],
  },
  owner: {
    starter: [],
    verified: ['verify'],
    trusted: ['verify', 'post', 'moderate', 'admin'],
    restricted: [],
    suspended: [],
  },
};

/**
 * softGuard: Check if user has capability
 * Returns boolean (no redirect, no throw)
 * Safe for client-side gating
 */
export function softGuard({ role, state, capability }: AccessRequest): boolean {
  // No session = no capabilities
  if (state === null) {
    return false;
  }

  const userRole = role as UserRole;
  const matrix = capabilityMatrix[userRole];

  if (!matrix) {
    return false;
  }

  const capabilities = matrix[state] || [];
  return capabilities.includes(capability);
}
