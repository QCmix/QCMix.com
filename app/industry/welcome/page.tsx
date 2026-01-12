import Link from "next/link";

export default function IndustryWelcomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          You’re in. Starter access is active.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Your Industry account has been created in a starter state.
          This gives you presence and identity inside QCMix.
          Visibility, tools, and participation unlock over time.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-neutral-200 p-6">
          <h2 className="text-lg font-medium text-neutral-900">
            Complete verification
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Verification increases trust and unlocks role-based access.
            Required for under-21 exceptions.
          </p>
          <Link
            href="/industry/join/verify"
            className="mt-4 inline-flex text-sm font-medium text-neutral-900 underline"
          >
            Continue verification
          </Link>
        </div>

        <div className="rounded-lg border border-neutral-200 p-6">
          <h2 className="text-lg font-medium text-neutral-900">
            Earn trust
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Participation unlocks through consistency, contribution,
            and clean conduct — not payment alone.
          </p>
          <span className="mt-4 inline-block text-sm text-neutral-500">
            Available after verification
          </span>
        </div>

        <div className="rounded-lg border border-neutral-200 p-6">
          <h2 className="text-lg font-medium text-neutral-900">
            Unlock tools
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Role-specific tools and access appear as you progress.
            Promotion options are always labeled.
          </p>
          <span className="mt-4 inline-block text-sm text-neutral-500">
            Roadmap view only
          </span>
        </div>
      </section>

      <section className="mt-16 border-t pt-8 text-sm text-neutral-600">
        This is not a social feed. It’s a working dashboard designed to grow
        responsibly with the community.
      </section>
    </main>
  );
}
