"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function IndustryJoinEligibilityPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const [dob, setDob] = useState(""); 
  const [exception, setException] = useState<null | "bartender" | "musician">(null);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Eligibility & Age Requirements
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          QCMix is a 21+ platform by default due to the nature of the work and
          spaces involved. Some working roles are allowed under 21 with
          verification.
        </p>
      </header>

      <section className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Date of birth
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-neutral-900">
            Do any of the following apply?
          </p>

          <label className="flex items-start gap-2 text-sm text-neutral-700">
            <input
              type="radio"
              name="exception"
              value="bartender"
              checked={exception === "bartender"}
              onChange={() => setException("bartender")}
            />
            I am currently working as a bartender under 21 (legal employment).
          </label>

          <label className="flex items-start gap-2 text-sm text-neutral-700">
            <input
              type="radio"
              name="exception"
              value="musician"
              checked={exception === "musician"}
              onChange={() => setException("musician")}
            />
            I am a working musician aged 18–20.
          </label>

          <label className="flex items-start gap-2 text-sm text-neutral-700">
            <input
              type="radio"
              name="exception"
              value="none"
              checked={exception === null}
              onChange={() => setException(null)}
            />
            None of the above.
          </label>
        </div>
      </section>

      <section className="mt-12 flex gap-4">
        <Link
          href="/industry/join/profile"
          className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Continue
        </Link>

        <Link
          href="/industry/join/role"
          className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
        >
          Back
        </Link>
      </section>

      <footer className="mt-16 border-t pt-6 text-sm text-neutral-600">
        Under-21 access requires verification. Under 18 is not permitted under
        any circumstance.
      </footer>
    </main>
  );
}
