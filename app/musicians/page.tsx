export default function MusiciansPage() {
  return (
    <main className="bg-[#08080f] text-white min-h-screen">
      <section className="max-w-7xl mx-auto py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Play the rooms that matter.</h1>
        <p className="text-xl mb-10">Venue visibility and credibility for local musicians.</p>
        <a href="#" className="px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition mb-16 inline-block">Create Musician Profile</a>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Reality</h2>
          <ul className="space-y-2 text-left max-w-xl mx-auto">
            <li>Booking is opaque</li>
            <li>Promotion favors noise</li>
            <li>Local scenes lack infrastructure</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Discoverable musician profile</h3>
            <p>Get found by venues and fans.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Venue visibility</h3>
            <p>Showcase your gigs and bookings.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Editorial coverage</h3>
            <p>Get featured in scene stories.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Scene credibility</h3>
            <p>Build trust with venues and fans.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Local-first focus</h3>
            <p>Support for Quad Cities musicians.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
