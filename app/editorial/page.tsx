export default function EditorialPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">
      <section className="max-w-7xl mx-auto py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">The stories behind the night.</h1>
        <p className="text-xl mb-10">Bars, bartenders, musicians, and culture—documented for the scene.</p>
        <a href="#" className="px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition mb-16 inline-block">Read the Stories</a>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Venue profiles</h3>
            <p>Explore the places that shape the night.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Bartender spotlights</h3>
            <p>Meet the people behind the bar.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Music features</h3>
            <p>Discover the sounds of the Quad Cities.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Scene history</h3>
            <p>Learn about the evolution of nightlife.</p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-2xl font-bold mb-4">Editorial Principles</h2>
          <ul className="space-y-2">
            <li>Not pay-to-play</li>
            <li>Not promotional fluff</li>
            <li>Documentary focus</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
