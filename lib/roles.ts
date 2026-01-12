export const ROLES = [
  "patron",
  "owner_manager",
  "bartender",
  "bar_worker",
  "musician",
  "distributor",
] as const;

export type Role = (typeof ROLES)[number];

export const DASHBOARD_ROUTE_BY_ROLE: Record<Role, string> = {
  patron: "/dashboard/patron",
  owner_manager: "/dashboard/venue",
  bartender: "/dashboard/bartender",
  bar_worker: "/dashboard/worker",
  musician: "/dashboard/musician",
  distributor: "/dashboard/distributor",
};

export type VerificationStatus = "unverified" | "verified";

export function isRole(value: string): value is Role {
  return (ROLES as readonly string[]).includes(value);
}
