import { getCurrentUser } from "@/lib/user";

export default async function WorkerHome() {
  const user = await getCurrentUser();
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Operations Board</h1>
              <p className="mt-2 text-sm text-slate-400">Shift assignments. Venue coordination. Team clarity.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Bar Operations</p>
              <p className="text-xs text-slate-500 mt-1">On Duty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Status */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Your Shift</p>
            <p className="mt-2 text-sm font-semibold">9 PM - 2 AM</p>
            <p className="text-xs text-slate-500 mt-1">The Vault · Tonight</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Team</p>
            <p className="mt-2 text-sm font-semibold">8 People</p>
            <p className="text-xs text-slate-500 mt-1">All checked in</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Venue Status</p>
            <p className="mt-2 text-sm font-semibold">Busy</p>
            <p className="text-xs text-slate-500 mt-1">80% capacity</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Updates</p>
            <p className="mt-2 text-sm font-semibold">2 New</p>
            <p className="text-xs text-slate-500 mt-1">From manager</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main: Team & Operations */}
          <div className="lg:col-span-2 space-y-6">
            {/* Your Team */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">Team on Duty</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { name: "Alex Chen", role: "Bartender", time: "9 PM - 2 AM", status: "in" },
                  { name: "Jordan Blake", role: "Server", time: "8 PM - Close", status: "in" },
                  { name: "Casey Moore", role: "Bartender", time: "9 PM - 2 AM", status: "in" },
                  { name: "Morgan Lee", role: "BOH", time: "7 PM - 11 PM", status: "in" },
                  { name: "Pat Sullivan", role: "Door", time: "9 PM - 1 AM", status: "in" },
                ].map((person, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-300">{person.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-50">{person.name}</p>
                        <p className="text-xs text-slate-400">{person.role} · {person.time}</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Venue Notes / Operations Log */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">Operations Log</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { time: "10:45 PM", msg: "Happy hour extended until 11 PM", by: "Manager" },
                  { time: "10:15 PM", msg: "Live band starting. Increase bar traffic expected.", by: "Manager" },
                  { time: "9:30 PM", msg: "All staff checked in. Ready for service.", by: "Door" },
                ].map((log, i) => (
                  <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{log.time}</p>
                        <p className="mt-2 text-slate-50">{log.msg}</p>
                      </div>
                      <p className="text-xs text-slate-500 flex-shrink-0 ml-4">{log.by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Assignments & Quick Access */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
              <h3 className="font-semibold mb-4">My Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-slate-700/30 hover:bg-slate-700/50 text-slate-200 border border-slate-600/40 transition-colors">
                  ✓ Check In
                </button>
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-slate-700/30 hover:bg-slate-700/50 text-slate-200 border border-slate-600/40 transition-colors">
                  💬 Send Message
                </button>
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-slate-700/30 hover:bg-slate-700/50 text-slate-200 border border-slate-600/40 transition-colors">
                  ⚠️ Report Issue
                </button>
              </div>
            </div>

            {/* Manager Notes */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">Manager Notes</h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-300 leading-relaxed">
                  "Great shift so far team. Keep an eye on the patio. Let me know if you need anything. Remember: glass policy strictly enforced outside."
                </p>
                <p className="text-xs text-slate-500 mt-4">Posted 2 hours ago</p>
              </div>
            </div>

            {/* Venue Info Card */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
              <h3 className="font-semibold mb-3">Tonight's Venue</h3>
              <p className="text-sm font-semibold text-slate-50">The Vault</p>
              <p className="text-xs text-slate-400 mt-2">121 Main St, Cedar Rapids</p>
              <a href="#" className="text-xs text-blue-400 hover:text-blue-300 mt-3 inline-block">
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
