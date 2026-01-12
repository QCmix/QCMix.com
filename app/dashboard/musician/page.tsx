import { getCurrentUser } from "@/lib/user";

export default async function MusicianHome() {
  const user = await getCurrentUser();
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Artist Station</h1>
              <p className="mt-2 text-sm text-slate-400">Build your presence. Book shows. Connect with venues.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Verified Musician</p>
              <p className="text-xs text-slate-500 mt-1">Active Profile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Snapshot */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-purple-900/30 via-slate-900 to-slate-900" />
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-slate-800 border-4 border-slate-950 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold">🎵</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold">The Echo Collective</h2>
                <p className="text-slate-400">Indie rock / Alternative · Cedar Rapids, IA</p>
                <div className="flex gap-4 mt-4">
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-900/40 px-3 py-1 rounded">✓ Verified</span>
                  <span className="text-xs font-bold text-slate-400 bg-slate-800/40 px-3 py-1 rounded">48 Followers</span>
                </div>
              </div>
              <button className="px-6 py-2 rounded bg-purple-600 hover:bg-purple-700 font-semibold transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main: Shows & Venues */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Shows */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Upcoming Gigs</h2>
                <button className="text-xs font-semibold px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors">
                  Find Shows →
                </button>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { date: "Friday, Jan 17", venue: "The Vault", time: "10 PM", status: "confirmed", audience: "~150" },
                  { date: "Saturday, Jan 25", venue: "Murphy's", time: "9 PM", status: "pending", audience: "~80" },
                  { date: "Saturday, Feb 8", venue: "Downtown Stage", time: "11 PM", status: "confirmed", audience: "~300" },
                ].map((show, i) => (
                  <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-bold text-purple-400 uppercase tracking-wide">{show.date}</p>
                        <p className="mt-2 font-semibold text-slate-50">{show.venue}</p>
                        <p className="text-sm text-slate-400 mt-1">{show.time} · ~{show.audience} audience</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        show.status === 'confirmed' ? 'bg-emerald-900/40 text-emerald-300' : 'bg-amber-900/40 text-amber-300'
                      }`}>
                        {show.status === 'confirmed' ? '✓ Booked' : '⏳ Pending'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue Connections */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">Connected Venues</h2>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-800">
                {[
                  { name: "The Vault", relation: "Regular", gigs: "6" },
                  { name: "Murphy's", relation: "Occasional", gigs: "2" },
                  { name: "Cedar Rapids Music Hall", relation: "New", gigs: "1" },
                  { name: "Downtown Stage", relation: "Featured", gigs: "3" },
                ].map((venue, i) => (
                  <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                    <p className="font-semibold text-slate-50 text-sm">{venue.name}</p>
                    <p className="text-xs text-slate-400 mt-1">{venue.relation}</p>
                    <p className="text-xs text-slate-600 mt-2">{venue.gigs} gigs played</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Presence & Discovery */}
          <div className="space-y-6">
            {/* Visibility Stats */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
              <h3 className="font-semibold mb-4">Profile Visibility</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Profile Views</span>
                    <span className="font-bold">128</span>
                  </div>
                  <div className="h-2 rounded bg-slate-800">
                    <div className="h-2 rounded bg-purple-600 w-3/4" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Show Interest</span>
                    <span className="font-bold">34</span>
                  </div>
                  <div className="h-2 rounded bg-slate-800">
                    <div className="h-2 rounded bg-emerald-600 w-1/2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 border border-purple-600/40 transition-colors">
                  🎵 Upload Photos / Video
                </button>
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-slate-700/30 hover:bg-slate-700/50 text-slate-200 border border-slate-600/40 transition-colors">
                  🔗 Update Links
                </button>
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-slate-700/30 hover:bg-slate-700/50 text-slate-200 border border-slate-600/40 transition-colors">
                  📧 Share Profile
                </button>
              </div>
            </div>

            {/* Recent Interest */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">Venue Interest</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { venue: "Riverside Hall", msg: "Interested in summer lineup", time: "2d ago" },
                  { venue: "The Vault", msg: "Love your recent show!", time: "5d ago" },
                ].map((item, i) => (
                  <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                    <p className="font-semibold text-slate-50 text-sm">{item.venue}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.msg}</p>
                    <p className="text-xs text-slate-600 mt-2">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
