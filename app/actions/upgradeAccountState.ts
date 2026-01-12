"use server";

import { cookies } from "next/headers";
import type { AccountState } from "@/app/lib/profile";

export async function upgradeAccountState(state: AccountState) {
  const store = cookies();
  store.set("qcmix_session", state, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}
