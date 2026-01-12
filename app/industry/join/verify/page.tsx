"use client";

import Link from "next/link";

export default function IndustryJoinVerifyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Verification
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          Verification increases trust and unlocks access. It is not required to
          exist here, but some roles and age exceptions require it.
        </p>
      </header>

      <section className="space-y-6">
        <div className="rounded-lg border border-neutral-200 p-6">
          <h2 className="text-lg font-medium text-neutral-900">
            Work or role verification
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Confirm your role through documentation, a work email, or venue
            association. Reviews are manual.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
          >
            Submit verification
          </button>
        </div>

        <div className="rounded-lg border border-neutral-200 p-6">
          <h2 className="text-lg font-medium text-neutral-900">
            Musician proof (if applicable)
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Provide evidence of active performance, such as a public listing,
            venue confirmation, or professional profile.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
          >
            Add musician proof
          </button>
        </div>

        <div className="rounded-lg border border-neutral-200 p-6">
          <h2 className="text-lg font-medium text-neutral-900">
            Under-21 eligibility verification
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Required for under-21 bartenders and musicians aged 18–20. Accounts
            remain restricted until verified.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
          >
            Verify eligibility
          </button>
        </div>
      </section>

      <section className="mt-12 flex gap-4">
        <Link
          href="/industry/join/review"
          className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Continue
        </Link>

        <Link
          href="/industry/join/profile"
          className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
        >
          Back
        </Link>
      </section>

      <footer className="mt-16 border-t pt-6 text-sm text-neutral-600">
        Verification does not guarantee promotion, visibility, or editorial
        coverage. It unlocks participation based on trust.
      </footer>
    </main>
  );
}
