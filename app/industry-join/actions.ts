"use server";

import { cookies } from "next/headers";
import { isRole } from "@/lib/roles";
import { cookieKeys } from "@/lib/user";
import { redirect } from "next/navigation";

export async function setRoleAction(formData: FormData) {
  const role = String(formData.get("role") || "");
  const verification = String(formData.get("verification") || "unverified");

  if (!isRole(role)) {
    // Fail closed. Just send back to join.
    redirect("/industry-join");
  }

  cookies().set(cookieKeys.ROLE_COOKIE, role, { path: "/" });
  cookies().set(cookieKeys.VERIF_COOKIE, verification === "verified" ? "verified" : "unverified", { path: "/" });

  redirect("/dashboard");
}
