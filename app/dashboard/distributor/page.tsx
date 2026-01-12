import { getCurrentUser } from "@/lib/user";

export default async function DistributorHome() {
  const user = await getCurrentUser();
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Partner Hub</h1>
              <p className="mt-2 text-sm text-slate-400">Manage accounts, track placements, build venue relationships.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Distributor / Partner</p>
              <p className="text-xs text-slate-500 mt-1">Verified Account</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Active Accounts</p>
            <p className="mt-3 text-3xl font-bold text-emerald-400">12</p>
            <p className="text-xs text-slate-500 mt-2">3 new this month</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Active Placements</p>
            <p className="mt-3 text-3xl font-bold text-blue-400">28</p>
            <p className="text-xs text-slate-500 mt-2">Across venues</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Venue Partners</p>
            <p className="mt-3 text-3xl font-bold text-purple-400">18</p>
            <p className="text-xs text-slate-500 mt-2">In Quad Cities</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">This Month</p>
            <p className="mt-3 text-3xl font-bold text-amber-400">$42K</p>
            <p className="text-xs text-slate-500 mt-2">Pending payouts</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main: Placements & Partners */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Placements */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Top Placements</h2>
                <button className="text-xs font-semibold px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors">
                  View All →
                </button>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { name: "Premium Spirits Bundle", venues: 8, value: "$8,400", status: "active" },
                  { name: "Craft Beer Selection", venues: 6, value: "$4,200", status: "active" },
                  { name: "Seasonal Promotions", venues: 4, value: "$2,100", status: "active" },
                  { name: "Limited Edition Spirits", venues: 3, value: "$1,800", status: "pending" },
                ].map((placement, i) => (
                  <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-slate-50">{placement.name}</p>
                        <p className="text-sm text-slate-400 mt-1">{placement.venues} venues · {placement.value} value</p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        placement.status === 'active' ? 'bg-emerald-900/40 text-emerald-300' : 'bg-amber-900/40 text-amber-300'
                      }`}>
                        {placement.status === 'active' ? '✓ Active' : '⏳ Pending'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue Partners */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Partner Venues</h2>
                <button className="text-xs font-semibold px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors">
                  Add Partner →
                </button>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-800">
                {[
                  { name: "The Vault", placements: 3, contact: "Alex Chen" },
                  { name: "Murphy's Pub", placements: 2, contact: "Jordan Blake" },
                  { name: "Riverside Stage", placements: 4, contact: "Sam Rodriguez" },
                  { name: "Downtown Music Hall", placements: 2, contact: "Morgan Lee" },
                ].map((venue, i) => (
                  <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                    <p className="font-semibold text-slate-50 text-sm">{venue.name}</p>
                    <p className="text-xs text-slate-400 mt-1">{venue.placements} active placements</p>
                    <p className="text-xs text-slate-600 mt-2">Contact: {venue.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quick Actions & Alerts */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 border border-blue-600/40 transition-colors">
                  ➕ Create Placement
                </button>
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-slate-700/30 hover:bg-slate-700/50 text-slate-200 border border-slate-600/40 transition-colors">
                  📧 Invite Venue
                </button>
                <button className="w-full text-left text-sm px-4 py-2 rounded bg-slate-700/30 hover:bg-slate-700/50 text-slate-200 border border-slate-600/40 transition-colors">
                  📊 Reports
                </button>
              </div>
            </div>

            {/* Alerts */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-slate-800 px-6 py-4">
                <h2 className="text-lg font-semibold">Alerts</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { msg: "Payment due on 3 accounts", type: "info" },
                  { msg: "New venue partnership request", type: "alert" },
                  { msg: "Expiring promotion: Craft Beer", type: "warning" },
                ].map((alert, i) => (
                  <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors">
                    <p className="text-sm text-slate-50">{alert.msg}</p>
                    <p className={`text-xs font-bold mt-2 ${
                      alert.type === 'info' ? 'text-blue-400' :
                      alert.type === 'alert' ? 'text-purple-400' :
                      'text-amber-400'
                    }`}>
                      {alert.type === 'info' ? '📋' : alert.type === 'alert' ? '🔔' : '⚠️'} {alert.type.toUpperCase()}
                    </p>
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
