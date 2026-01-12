import { cookies } from "next/headers";
import { isRole, Role, VerificationStatus } from "./roles";

export type CurrentUser = {
  id: string; // placeholder
  email: string; // placeholder
  role: Role;
  verificationStatus: VerificationStatus;
  profileSlug: string | null;
};

const ROLE_COOKIE = "qcmix_role";
const VERIF_COOKIE = "qcmix_verification";

export async function getCurrentUser(): Promise<CurrentUser | null> {
  // Placeholder "auth": if role cookie exists, user is "logged in"
  const roleRaw = cookies().get(ROLE_COOKIE)?.value;
  if (!roleRaw || !isRole(roleRaw)) return null;

  const verRaw = cookies().get(VERIF_COOKIE)?.value;
  const verificationStatus: VerificationStatus =
    verRaw === "verified" ? "verified" : "unverified";

  return {
    id: "local-cookie-user",
    email: "local@qcmix.dev",
    role: roleRaw,
    verificationStatus,
    profileSlug: null,
  };
}

export function canRepresentPublicly(user: CurrentUser) {
  return user.role !== "patron" && user.verificationStatus === "verified";
}

export const cookieKeys = { ROLE_COOKIE, VERIF_COOKIE };
