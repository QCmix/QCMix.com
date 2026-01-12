"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { activateIndustryAccount } from "@/app/actions/activateIndustryAccount";

export default function IndustryJoinReviewPage() {
  const router = useRouter();
  const [ack1, setAck1] = useState(false);
  const [ack2, setAck2] = useState(false);
  const [ack3, setAck3] = useState(false);
  const [loading, setLoading] = useState(false);

  const canSubmit = ack1 && ack2 && ack3 && !loading;

  async function handleActivate() {
    if (!canSubmit) return;
    setLoading(true);
    await activateIndustryAccount();
    router.push("/industry/welcome");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Review & Confirm</h1>

      <div className="mt-8 space-y-4 text-sm">
        <label className="flex gap-2">
          <input type="checkbox" checked={ack1} onChange={() => setAck1(!ack1)} />
          <span>Representation establishes presence, not promotion.</span>
        </label>

        <label className="flex gap-2">
          <input type="checkbox" checked={ack2} onChange={() => setAck2(!ack2)} />
          <span>Paid exposure is always labeled.</span>
        </label>

        <label className="flex gap-2">
          <input type="checkbox" checked={ack3} onChange={() => setAck3(!ack3)} />
          <span>Editorial decisions remain independent.</span>
        </label>
      </div>

      <button
        onClick={handleActivate}
        disabled={!canSubmit}
        className={"mt-10 rounded-md px-6 py-3 text-sm font-medium " + (
          canSubmit ? "bg-black text-white" : "bg-neutral-300 text-neutral-600"
        )}
      >
        {loading ? "Activating…" : "Activate my account"}
      </button>
    </main>
  );
}
