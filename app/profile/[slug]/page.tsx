export default async function PublicProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Profile: {slug}</h1>
      <p className="mt-2 text-sm opacity-80">
        Placeholder public profile route. Wire to DB later.
      </p>
    </main>
  );
}
