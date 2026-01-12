"use client";

import { useState } from "react";
import { upgradeAccountState } from "@/app/actions/upgradeAccountState";
import { setAccountRole } from "@/app/actions/setAccountRole";

export function AdminControls() {
  const [loading, setLoading] = useState(false);

  async function setState(state: "verified" | "trusted") {
    setLoading(true);
    await upgradeAccountState(state);
    setLoading(false);
  }

  async function setRole(role: string) {
    setLoading(true);
    await setAccountRole(role as any);
    setLoading(false);
  }

  return (
    <section className="mt-10 space-y-6">
      <div>
        <h2 className="text-sm font-semibold">Account State</h2>
        <div className="mt-2 flex gap-3">
          <button
            onClick={() => setState("verified")}
            disabled={loading}
            className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            Mark Verified
          </button>
          <button
            onClick={() => setState("trusted")}
            disabled={loading}
            className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
          >
            Mark Trusted
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold">Account Role</h2>
        <div className="mt-2 flex gap-3 flex-wrap">
          {["owner", "bartender", "worker", "distributor", "musician", "patron"].map(
            (r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                disabled={loading}
                className="rounded border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 disabled:opacity-50"
              >
                {r}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
