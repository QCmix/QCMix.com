/**
 * Session state utility
 * TEMP v1: Placeholders until persistence is wired
 * Later: will read from cookies, auth context, or database
 */

export type AccountState = 'starter' | 'verified' | 'trusted' | 'restricted' | 'suspended';

export function getSessionState(): AccountState | null {
  // PLACEHOLDER: Returns null (user not authenticated)
  // Later: will read from cookies, localStorage, or auth context
  return null;
}

export function getSessionRole(): string | null {
  // PLACEHOLDER: Returns null (role not set)
  // Later: will read from profile/session
  return null;
}
