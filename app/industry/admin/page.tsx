'use client';

import { softGuard } from "@/app/lib/softGuard";
import { getSessionState } from "@/app/lib/session";

export default function IndustryAdminPage() {
  // TEMP v1: role/state are placeholders until persistence is wired
  const role = "owner";      // later: from profile/session
  const state = getSessionState() ?? "starter";

  const allowed = softGuard({
    role,
    state,
    capability: "admin",
  });

  if (!allowed) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-xl font-semibold">Restricted</h1>
        <p className="mt-4 text-sm text-neutral-600">
          Admin access is limited to trusted reviewers.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Admin Dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Internal tools for trusted reviewers and moderators.
        </p>
      </header>

      <section className="space-y-6">
        <div className="rounded-lg border border-neutral-200 p-6">
          <h2 className="text-lg font-medium text-neutral-900">
            Pending Verifications
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Review and approve user verification requests.
          </p>
        </div>

        <div className="rounded-lg border border-neutral-200 p-6">
          <h2 className="text-lg font-medium text-neutral-900">
            Account Management
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            View and manage user accounts, states, and restrictions.
          </p>
        </div>

        <div className="rounded-lg border border-neutral-200 p-6">
          <h2 className="text-lg font-medium text-neutral-900">
            Audit Log
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Historical record of verification decisions and account changes.
          </p>
        </div>
      </section>
    </main>
  );
}
