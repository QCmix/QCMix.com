"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, Suspense } from "react";

function ProfileContent() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const [displayName, setDisplayName] = useState(""); 
  const [city, setCity] = useState(""); 
  const [identifier, setIdentifier] = useState(""); 
  const [about, setAbout] = useState(""); 

  const identifierLabel = (() => {
    switch (role) {
      case "owner":
        return "Venue name";
      case "bartender":
      case "worker":
        return "Primary venue";
      case "distributor":
        return "Company name";
      case "musician":
        return "Act or artist name";
      case "patron":
        return "Neighborhood or city context";
      default:
        return "Primary association";
    }
  })();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Create your starter profile
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          This establishes identity and representation inside QCMix.
          It does not create promotion or public visibility by default.
        </p>
      </header>

      <section className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Display name
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
            placeholder="Name used inside the community"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Quad Cities location
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          >
            <option value="">Select city</option>
            <option>Davenport, IA</option>
            <option>Bettendorf, IA</option>
            <option>Rock Island, IL</option>
            <option>Moline, IL</option>
            <option>East Moline, IL</option>
            <option>Silvis, IL</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">
            {identifierLabel}
          </label>
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">
            What you do (optional)
          </label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            maxLength={200}
            rows={4}
            className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
            placeholder="Short, factual description (max 200 characters)"
          />
        </div>
      </section>

      <section className="mt-12 flex gap-4">
        <Link
          href="/industry/join/verify"
          className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Continue
        </Link>

        <Link
          href="/industry/join/eligibility"
          className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
        >
          Back
        </Link>
      </section>

      <footer className="mt-16 border-t pt-6 text-sm text-neutral-600">
        Profiles are not ranked, marketed, or promoted by default.
        Visibility and tools unlock later through verification and contribution.
      </footer>
    </main>
  );
}

export default function IndustryJoinProfilePage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-6 py-16">Loading...</div>}>
      <ProfileContent />
    </Suspense>
  );
}
