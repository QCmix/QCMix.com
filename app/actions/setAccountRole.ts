"use server";

import { cookies } from "next/headers";
import type { IndustryRole } from "@/app/lib/profile";

export async function setAccountRole(role: IndustryRole) {
  const store = cookies();
  store.set("qcmix_role", role, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}
