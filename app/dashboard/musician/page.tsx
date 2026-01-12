import { getCurrentUser } from "@/lib/user";

export default async function MusicianHome() {
  const user = await getCurrentUser();
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Musician Home</h1>
      <p className="mt-2 text-sm opacity-80">
        Role: {user?.role} · Verification: {user?.verificationStatus}
      </p>
      <div className="mt-6 border rounded p-4">
        This is the musician section. Build screens later.
      </div>
    </main>
  );
}
