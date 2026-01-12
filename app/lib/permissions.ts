import type { IndustryRole, AccountState } from "./profile";
import { CAP, type Capability } from "./capabilities";

export function can(
  role: IndustryRole,
  state: AccountState,
  capability: Capability
): boolean {
  if (state === "restricted") return capability === CAP.VIEW;

  switch (capability) {
    case CAP.VIEW:
      return true;

    case CAP.POST:
      return state === "verified" || state === "trusted";

    case CAP.GOVERNANCE:
      return state === "trusted";

    case CAP.ADMIN:
      return role === "owner" && state === "trusted";

    case CAP.VERIFY:
      return state === "verified" || state === "trusted";

    default:
      return false;
  }
}
