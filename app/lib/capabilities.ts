export const CAP = {
  VIEW: "view",
  POST: "post",
  ADMIN: "admin",
  VERIFY: "verify",
  GOVERNANCE: "governance",
} as const;

export type Capability = typeof CAP[keyof typeof CAP];
