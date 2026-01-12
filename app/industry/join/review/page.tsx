"use client";

import Link from "next/link";
import { useState } from "react";

export default function IndustryJoinReviewPage() {
  const [ackRepresentation, setAckRepresentation] = useState(false);
  const [ackPaid, setAckPaid] = useState(false);
  const [ackEditorial, setAckEditorial] = useState(false);

  const canSubmit = ackRepresentation && ackPaid && ackEditorial;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Review & Confirm
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          Review your information and confirm your understanding before
          activating your Industry account.
        </p>
      </header>

      <section className="space-y-4 text-sm text-neutral-700">
        <p>
          By continuing, you acknowledge the following:
        </p>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={ackRepresentation}
            onChange={() => setAckRepresentation(!ackRepresentation)}
          />
          <span>
            Representation establishes presence, not promotion or visibility.
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={ackPaid}
            onChange={() => setAckPaid(!ackPaid)}
          />
          <span>
            Paid exposure is always labeled and never overrides editorial
            judgment.
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={ackEditorial}
            onChange={() => setAckEditorial(!ackEditorial)}
          />
          <span>
            Editorial decisions are independent from community membership,
            verification, or payment.
          </span>
        </label>
      </section>

      <section className="mt-12 flex gap-4">
        <Link
          href={canSubmit ? "/industry/welcome" : "#"}
          aria-disabled={!canSubmit}
          className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium ${
            canSubmit
              ? "bg-black text-white hover:bg-neutral-800"
              : "cursor-not-allowed bg-neutral-300 text-neutral-600"
          }`}
        >
          Activate my account
        </Link>

        <Link
          href="/industry/join/verify"
          className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
        >
          Back
        </Link>
      </section>

      <footer className="mt-16 border-t pt-6 text-sm text-neutral-600">
        Accounts start in a basic state. Access expands through verification,
        contribution, and trust.
      </footer>
    </main>
  );
}
