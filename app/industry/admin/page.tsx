import { getIndustryProfileServer } from "@/app/lib/getIndustryProfile";
import { softGuard } from "@/app/lib/softGuard";

export default function IndustryAdminPage() {
  const { role, state } = getIndustryProfileServer();

  softGuard({
    role,
    state,
    capability: "admin",
    redirectTo: "/industry/join",
  });

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Industry Admin
        </h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Review and verify industry accounts.
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

