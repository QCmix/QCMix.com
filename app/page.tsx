export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Hub for Quad Cities Bartending & Music
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            QCMix documents what is actually happening in the Quad Cities bar,
            nightlife, and live-music ecosystem — venues, bartenders, artists,
            and the people who keep the scene moving.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/about"
              className="inline-flex items-center rounded-md bg-black px-6 py-3 text-white text-sm font-medium hover:bg-gray-800"
            >
              Learn What QCMix Is
            </a>

            <a
              href="#coverage"
              className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50"
            >
              See Coverage Area
            </a>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section id="coverage">
        <div className="max-w-6xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Bars & Venues</h2>
            <p className="mt-3 text-gray-600 text-sm">
              Verified operating bars, clubs, and music venues across Davenport,
              Bettendorf, Rock Island, Moline, East Moline, and Silvis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Bartenders</h2>
            <p className="mt-3 text-gray-600 text-sm">
              Tools, visibility, and documentation for service-industry
              professionals working in the Quad Cities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Live Music</h2>
            <p className="mt-3 text-gray-600 text-sm">
              Where music is actually being booked, who is playing, and how the
              local circuit functions in reality — not promotion.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold">Editorial Standards</h2>

          <ul className="mt-6 max-w-3xl space-y-3 text-gray-700 text-sm list-disc list-inside">
            <li>Listings must be currently operating or confirmed to open</li>
            <li>Information is verified using public and direct sources</li>
            <li>No pay-to-play for basic editorial inclusion</li>
            <li>Sponsored placements are clearly labeled</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-gray-500">
          <span>© {new Date().getFullYear()} QCMix</span>
          <div className="flex gap-4">
            <a href="/about" className="hover:text-gray-900">About</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
