import { setRoleAction } from "./actions";

export default function IndustryJoinPage() {
  return (
    <main className="p-8 max-w-xl">
      <h1 className="text-2xl font-semibold">Industry Join</h1>
      <p className="mt-2 text-sm opacity-80">
        Select a role to create your account (temporary cookie-based stub).
      </p>

      <form action={setRoleAction} className="mt-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Role</label>
          <select name="role" className="w-full border rounded p-2">
            <option value="patron">Patron</option>
            <option value="owner_manager">Bar Owner / Management</option>
            <option value="bartender">Bartender</option>
            <option value="bar_worker">Bar Worker (door/security/BOH/barback)</option>
            <option value="musician">Musician</option>
            <option value="distributor">Distributor / Partner</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Verification (stub)</label>
          <select name="verification" className="w-full border rounded p-2">
            <option value="unverified">Unverified</option>
            <option value="verified">Verified</option>
          </select>
        </div>

        <button className="border rounded px-4 py-2" type="submit">
          Continue to Dashboard
        </button>
      </form>
    </main>
  );
}
