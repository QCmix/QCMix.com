"use server";

import { cookies } from "next/headers";

export async function activateIndustryAccount() {
  const store = cookies();

  // v1 default: starter
  store.set("qcmix_session", "starter", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return { ok: true };
}
