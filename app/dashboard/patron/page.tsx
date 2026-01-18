import { getCurrentUser } from "@/lib/user";

export default async function PatronHome() {
  const user = await getCurrentUser();
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">What's Happening Tonight</h1>
              <p className="mt-2 text-sm text-white/60">Discover shows, venues, and the scene in the Quad Cities.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/60">Patron</p>
              <p className="text-xs text-white/40 mt-1">Explore & Enjoy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filter / Search Bar */}
        <div className="mb-8 flex gap-4">
          <input
            type="text"
            placeholder="Search venues, artists, events..."
            className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-qc-primary/50"
          />
          <button className="px-6 py-3 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 transition-colors font-semibold">
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main: Featured & Events */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Tonight */}
            <div className="rounded-lg border border-white/10 overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
              <div className="h-48 bg-gradient-to-r from-qc-primary/30 via-black to-black flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl">🎵</p>
                  <p className="text-sm text-white/60 mt-2">Live Music Tonight</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-qc-primary uppercase tracking-wide">Featured</p>
                <h2 className="mt-2 text-2xl font-bold">Echo Collective Live</h2>
                <p className="text-white/60 mt-2">The Vault · 10 PM · Indie Rock</p>
                <button className="mt-4 px-6 py-2 rounded bg-gradient-to-r from-qc-primary to-qc-orange hover:shadow-lg hover:shadow-qc-primary/40 font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-white/10 px-6 py-4">
                <h2 className="text-lg font-semibold">Tonight & This Week</h2>
              </div>
              <div className="divide-y divide-white/10">
                {[
                  { day: "Tonight", venue: "The Vault", artist: "Echo Collective (Live)", time: "10 PM", type: "live" },
                  { day: "Tonight", venue: "Murphy's", artist: "DJ Martinez", time: "11 PM", type: "dj" },
                  { day: "Friday", venue: "Downtown Stage", artist: "Jazz Night Showcase", time: "9 PM", type: "live" },
                  { day: "Saturday", venue: "The Vault", artist: "DJ Night + Dance Floor", time: "11 PM", type: "dj" },
                ].map((event, i) => (
                  <div key={i} className="p-4 hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-bold text-white/60 uppercase tracking-wide">{event.day} · {event.time}</p>
                        <p className="mt-2 font-semibold text-white">{event.artist}</p>
                        <p className="text-sm text-white/60">{event.venue}</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        event.type === 'live' ? 'bg-qc-primary/20 text-qc-primary' : 'bg-qc-orange/20 text-qc-orange'
                      }`}>
                        {event.type === 'live' ? '🎵 Live' : '🎧 DJ'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Venues & Highlights */}
          <div className="space-y-6">
            {/* Favorite Venues */}
            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-white/10 px-6 py-4">
                <h2 className="text-lg font-semibold">Popular Venues</h2>
              </div>
              <div className="divide-y divide-white/10">
                {[
                  { name: "The Vault", type: "Live Venue", crowd: "Popular" },
                  { name: "Murphy's Pub", type: "Casual Bar", crowd: "Moderate" },
                  { name: "Downtown Stage", type: "Concert Hall", crowd: "Very Popular" },
                  { name: "Riverside Bar & Grill", type: "Restaurant Bar", crowd: "Quiet" },
                ].map((venue, i) => (
                  <a key={i} href="#" className="p-4 hover:bg-white/5 transition-colors block">
                    <p className="font-semibold text-white text-sm">{venue.name}</p>
                    <p className="text-xs text-white/60 mt-1">{venue.type}</p>
                    <p className="text-xs text-white/40 mt-2">📊 {venue.crowd}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Editorial Highlights */}
            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-white/10 px-6 py-4">
                <h2 className="text-lg font-semibold">Scene News</h2>
              </div>
              <div className="divide-y divide-white/10">
                {[
                  { title: "New Venue Opens Downtown", time: "2d ago" },
                  { title: "Best Bartender in QC", time: "5d ago" },
                  { title: "Winter Music Guide", time: "1w ago" },
                ].map((article, i) => (
                  <a key={i} href="#" className="p-4 hover:bg-white/5 transition-colors block">
                    <p className="text-sm font-semibold text-white">{article.title}</p>
                    <p className="text-xs text-white/40 mt-2">{article.time}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
