import { getCurrentUser } from "@/lib/user";

export default async function VenueHome() {
  const user = await getCurrentUser();
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Venue Command Center</h1>
              <p className="mt-2 text-sm text-slate-400">Manage staff, events, and venue presence across QCMix.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Owner / Manager</p>
              <p className="text-xs text-slate-500 mt-1">Verified Venue</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Venue Snapshot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Venue Status</p>
            <p className="mt-3 text-3xl font-bold text-emerald-400">Open</p>
            <p className="text-xs text-slate-500 mt-2">Busy night · 85% capacity</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Staff On Duty</p>
            <p className="mt-3 text-3xl font-bold text-blue-400">7 / 10</p>
            <p className="text-xs text-slate-500 mt-2">1 callout · 2 pending</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Events This Week</p>
            <p className="mt-3 text-3xl font-bold text-purple-400">3</p>
            <p className="text-xs text-slate-500 mt-2">2 shows · 1 private event</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">New Followers</p>
            <p className="mt-3 text-3xl font-bold text-amber-400">24</p>
            <p className="text-xs text-slate-500 mt-2">+12 this week</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Staff & Operations */}
          <div className="lg:col-span-2 space-y-6">
            {/* Staff Schedule */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Tonight's Staff</h2>
                <button className="text-xs font-semibold px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors">
                  Manage →
                </button>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { name: "Alex Chen", role: "Bartender", shift: "9 PM - 2 AM", status: "checked-in" },
                  { name: "Jordan Blake", role: "Server", shift: "8 PM - Close", status: "checked-in" },
                  { name: "Sam Rodriguez", role: "Door", shift: "9 PM - 1 AM", status: "pending" },
                  { name: "Morgan Lee", role: "Bartender", shift: "Scheduled Callout", status: "absent" },
                ].map((staff, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-300">{staff.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-50">{staff.name}</p>
                        <p className="text-xs text-slate-400">{staff.role} · {staff.shift}</p>
                      </div>
                    </div>
                    <div className={`text-xs font-bold px-2 py-1 rounded ${
                      staff.status === 'checked-in' ? 'bg-emerald-900/40 text-emerald-300' :
                      staff.status === 'pending' ? 'bg-amber-900/40 text-amber-300' :
                      'bg-red-900/40 text-red-300'
                    }`}>
                      {staff.status === 'checked-in' ? '✓ In' : staff.status === 'pending' ? '⏳ Pending' : '✕ Out'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Events & Listings */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Upcoming Events</h2>
                <button className="text-xs font-semibold px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors">
                  Post Event →
                </button>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { date: "Thursday", title: "Live Jazz Night", time: "10 PM", status: "active" },
                  { date: "Friday", title: "DJ Showcase", time: "11 PM", status: "active" },
                  { date: "Saturday", title: "Private Event - Henderson Party", time: "9 PM", status: "private" },
                ].map((event, i) => (
                  <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-bold text-amber-400 uppercase tracking-wide">{event.date}</p>
                        <p className="mt-2 font-semibold text-slate-50">{event.title}</p>
                        <p className="text-sm text-slate-400 mt-1">{event.time}</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        event.status === 'active' ? 'bg-emerald-900/40 text-emerald-300' : 'bg-purple-900/40 text-purple-300'
                      }`}>
                        {event.status === 'active' ? 'Published' : 'Private'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Announcements & Insights */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 border border-blue-600/40 transition-colors">
                  📢 Post Announcement
                </button>
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-slate-700/30 hover:bg-slate-700/50 text-slate-200 border border-slate-600/40 transition-colors">
                  👥 Request Staff
                </button>
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-slate-700/30 hover:bg-slate-700/50 text-slate-200 border border-slate-600/40 transition-colors">
                  📊 View Analytics
                </button>
              </div>
            </div>

            {/* Announcements */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">Announcements</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { msg: "New bartender training session scheduled", time: "2h ago" },
                  { msg: "Updated happy hour policy live", time: "1d ago" },
                ].map((item, i) => (
                  <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                    <p className="text-sm text-slate-50">{item.msg}</p>
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
