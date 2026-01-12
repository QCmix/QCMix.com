export default function ProfileSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Profile: {params.slug}</h1>
      <p className="mt-2 text-sm opacity-80">
        Public profile page for {params.slug}.
      </p>
      <div className="mt-6 border rounded p-4">
        This is a profile page. Build screens later.
      </div>
    </main>
  );
}
