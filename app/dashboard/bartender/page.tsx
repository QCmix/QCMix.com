import { getCurrentUser } from "@/lib/user";

export default async function BartenderHome() {
  const user = await getCurrentUser();
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Shift Board</h1>
              <p className="mt-2 text-sm text-slate-400">Your daily work hub. See shifts, venues, and who's working.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Verified Bartender</p>
              <p className="text-xs text-slate-500 mt-1">Ready to work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Action Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 p-4 text-left transition-all hover:shadow-lg hover:shadow-amber-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-400/10 group-hover:to-amber-400/20 transition-all" />
            <p className="relative text-xs font-semibold text-amber-100">Request Shift</p>
            <p className="relative mt-1 text-xl font-bold">Open</p>
          </button>

          <button className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 p-4 text-left transition-all hover:shadow-lg hover:shadow-emerald-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/10 group-hover:to-emerald-400/20 transition-all" />
            <p className="relative text-xs font-semibold text-emerald-100">Available</p>
            <p className="relative mt-1 text-xl font-bold">2 Shifts</p>
          </button>

          <button className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-4 text-left transition-all hover:shadow-lg hover:shadow-blue-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/10 group-hover:to-blue-400/20 transition-all" />
            <p className="relative text-xs font-semibold text-blue-100">Update Profile</p>
            <p className="relative mt-1 text-xl font-bold">Edit</p>
          </button>

          <button className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 p-4 text-left transition-all hover:shadow-lg hover:shadow-slate-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/0 to-slate-500/10 group-hover:to-slate-500/20 transition-all" />
            <p className="relative text-xs font-semibold text-slate-300">Messages</p>
            <p className="relative mt-1 text-xl font-bold">3 New</p>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Shifts & Availability */}
          <div className="lg:col-span-2 space-y-6">
            {/* Assigned Shifts */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">This Week's Shifts</h2>
              </div>
              <div className="space-y-2 p-6">
                {[
                  { day: "Thursday", venue: "The Vault", time: "9 PM - 2 AM", status: "confirmed" },
                  { day: "Friday", venue: "Murphy's", time: "8 PM - Close", status: "pending" },
                  { day: "Saturday", venue: "The Vault", time: "9 PM - 3 AM", status: "confirmed" },
                ].map((shift, i) => (
                  <div key={i} className="group flex items-center justify-between rounded-lg border border-slate-800/50 bg-slate-800/20 p-4 hover:bg-slate-800/40 transition-colors">
                    <div>
                      <p className="font-semibold text-slate-50">{shift.day} at {shift.venue}</p>
                      <p className="text-sm text-slate-400 mt-1">{shift.time}</p>
                    </div>
                    <div className={`text-xs font-bold px-2 py-1 rounded ${shift.status === 'confirmed' ? 'bg-emerald-900/40 text-emerald-300' : 'bg-amber-900/40 text-amber-300'}`}>
                      {shift.status === 'confirmed' ? '✓ Confirmed' : '⏳ Pending'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue Updates */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">Venue Announcements</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { venue: "The Vault", msg: "Live band tonight 10 PM - Jazz trio", time: "2h ago" },
                  { venue: "Murphy's", msg: "New happy hour menu. 5-7 PM daily", time: "5h ago" },
                ].map((item, i) => (
                  <div key={i} className="p-6 hover:bg-slate-800/30 transition-colors">
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-wide">{item.venue}</p>
                    <p className="mt-2 text-slate-50">{item.msg}</p>
                    <p className="text-xs text-slate-500 mt-2">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Community & Presence */}
          <div className="space-y-6">
            {/* Who's Working Tonight */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">Working Tonight</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { name: "Alex Chen", venue: "The Vault", status: "active" },
                  { name: "Jordan Blake", venue: "Murphy's", status: "active" },
                  { name: "Casey Moore", venue: "The Vault", status: "away" },
                ].map((person, i) => (
                  <div key={i} className="p-4 flex items-center gap-3 hover:bg-slate-800/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-slate-300">{person.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-50 truncate">{person.name}</p>
                      <p className="text-xs text-slate-400 truncate">{person.venue}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${person.status === 'active' ? 'bg-emerald-500' : 'bg-slate-600'}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Feed Snippet */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">Local Buzz</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { title: "New Venue Opening", subtitle: "Downtown Cedar Rapids", time: "1d ago" },
                  { title: "Band Seeking Bartenders", subtitle: "Gig Thursday night", time: "3d ago" },
                ].map((item, i) => (
                  <a key={i} href="#" className="block p-4 hover:bg-slate-800/30 transition-colors">
                    <p className="text-sm font-semibold text-slate-50">{item.title}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.subtitle}</p>
                    <p className="text-xs text-slate-600 mt-2">{item.time}</p>
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
