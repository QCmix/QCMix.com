import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-slate-900 to-slate-950" />
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold text-purple-400 uppercase tracking-widest">
                The Connected Nightlife Platform
              </p>
              <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight">
                Quad Cities
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  After Dark
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Where bars, bartenders, musicians, and the industry operate with transparency. 
                One city. One platform. Real connections.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/industry-join"
                className="px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-bold text-lg transition-all hover:shadow-lg hover:shadow-purple-900/50"
              >
                Join the Industry
              </Link>
              <a
                href="#explore"
                className="px-8 py-4 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 font-bold text-lg transition-colors"
              >
                Explore the Scene
              </a>
            </div>

            <div className="pt-12 text-slate-400 text-sm">
              <p>Featured In</p>
              <div className="flex justify-center gap-8 mt-4 opacity-60">
                <span>Cedar Rapids Scene</span>
                <span>•</span>
                <span>Iowa Music Network</span>
                <span>•</span>
                <span>Local Industry Leaders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-center text-slate-500">
            <p className="text-xs uppercase tracking-wide mb-2">Scroll to explore</p>
            <div className="text-lg">↓</div>
          </div>
        </div>
      </section>

      {/* Public Value Section */}
      <section id="explore" className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">No Account Needed to Explore</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Whether you're looking for a venue, checking out local talent, or reading industry insights — QCMix is open.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Explore Venues */}
            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3">Verified Venues</h3>
              <p className="text-slate-400 mb-6">
                Discover bars across the Quad Cities. See what's happening, who's working, what's on tap.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                Browse Venues →
              </a>
            </div>

            {/* Discover Musicians */}
            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-3">Local Musicians</h3>
              <p className="text-slate-400 mb-6">
                Find who's playing tonight. Connect with bands. Explore the region's music culture.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                Discover Talent →
              </a>
            </div>

            {/* Read Editorial */}
            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-bold mb-3">Editorial & Insights</h3>
              <p className="text-slate-400 mb-6">
                Understand how the nightlife ecosystem works. Real stories from the industry.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                Read the Pulse →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">One City. Many Roles.</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              QCMix connects every part of the nightlife ecosystem. Stronger together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Bar Owners */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-emerald-600/40 hover:bg-emerald-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-emerald-900/40 flex items-center justify-center mb-4 group-hover:bg-emerald-900/60 transition-colors">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-emerald-300">Bar Owners & Managers</h3>
              <p className="text-slate-400 text-sm mb-4">
                Find reliable bartenders, promote your venue, coordinate staff, and understand your market.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>✓ Staff discovery & scheduling</li>
                <li>✓ Real-time team coordination</li>
                <li>✓ Venue presence & events</li>
              </ul>
            </div>

            {/* Bartenders */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-blue-600/40 hover:bg-blue-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-blue-900/40 flex items-center justify-center mb-4 group-hover:bg-blue-900/60 transition-colors">
                <span className="text-2xl">🍸</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-300">Bartenders</h3>
              <p className="text-slate-400 text-sm mb-4">
                Access shift opportunities, build your network, and represent yourself across the scene.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>✓ Shift marketplace</li>
                <li>✓ Professional visibility</li>
                <li>✓ Community connections</li>
              </ul>
            </div>

            {/* Musicians */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-purple-600/40 hover:bg-purple-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-purple-900/40 flex items-center justify-center mb-4 group-hover:bg-purple-900/60 transition-colors">
                <span className="text-2xl">🎸</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-purple-300">Musicians & Bands</h3>
              <p className="text-slate-400 text-sm mb-4">
                Book shows, connect with venues, build your following, and own your presence.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>✓ Direct venue connections</li>
                <li>✓ Show booking & calendar</li>
                <li>✓ Verified artist profiles</li>
              </ul>
            </div>

            {/* Bar Staff */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-amber-600/40 hover:bg-amber-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-amber-900/40 flex items-center justify-center mb-4 group-hover:bg-amber-900/60 transition-colors">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-amber-300">Bar Staff & Operations</h3>
              <p className="text-slate-400 text-sm mb-4">
                Coordinate seamlessly with your team, access clear shift information, stay informed.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>✓ Real-time operations</li>
                <li>✓ Team clarity & schedules</li>
                <li>✓ Venue coordination</li>
              </ul>
            </div>

            {/* Distributors */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-indigo-600/40 hover:bg-indigo-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-indigo-900/40 flex items-center justify-center mb-4 group-hover:bg-indigo-900/60 transition-colors">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-indigo-300">Distributors & Partners</h3>
              <p className="text-slate-400 text-sm mb-4">
                Manage placements, track venues, build real relationships with accounts that matter.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>✓ Placement management</li>
                <li>✓ Verified venue partnerships</li>
                <li>✓ Performance analytics</li>
              </ul>
            </div>

            {/* Patrons */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-cyan-600/40 hover:bg-cyan-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-cyan-900/40 flex items-center justify-center mb-4 group-hover:bg-cyan-900/60 transition-colors">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-cyan-300">Patrons & Community</h3>
              <p className="text-slate-400 text-sm mb-4">
                Discover what's happening, find great venues, connect with the scene.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li>✓ Real-time event discovery</li>
                <li>✓ Verified venue info</li>
                <li>✓ Community pulse</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-8 text-center">
            <p className="text-slate-300 mb-4">
              Everyone on one platform. No silos. No hidden agendas. Just transparency.
            </p>
            <p className="text-sm text-slate-500">
              Weak operations fade. Strong communities rise.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Values Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Why QCMix</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A platform designed by people who work the night shift. For people who work the night shift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-5xl">👁️</div>
              <h3 className="text-xl font-bold">Visibility</h3>
              <p className="text-slate-400">
                The stronger your reputation, the more you stand out. Verify yourself. Build credibility. Rise naturally.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-5xl">🤝</div>
              <h3 className="text-xl font-bold">Real Connections</h3>
              <p className="text-slate-400">
                Direct access to the people who matter. No middlemen. No algorithms. Just the Quad Cities nightlife.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-5xl">📍</div>
              <h3 className="text-xl font-bold">Local First</h3>
              <p className="text-slate-400">
                Built for this region. Operated by people who know the scene. Not a corporate platform trying to scale.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-5xl">⚖️</div>
              <h3 className="text-xl font-bold">Accountability</h3>
              <p className="text-slate-400">
                Your reputation is permanent. That's the point. We're building a scene where trust matters more than hype.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-5xl">🎯</div>
              <h3 className="text-xl font-bold">Purposeful</h3>
              <p className="text-slate-400">
                Not designed to sell ads or attention. Designed to make operations smoother and connections real.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-5xl">🌆</div>
              <h3 className="text-xl font-bold">The Scene Rises</h3>
              <p className="text-slate-400">
                When bars operate better, talent finds stages, and the community thrives — everyone wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Preview Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">From the Scene</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Stories and insights from the people who know the Quad Cities nightlife inside and out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "The Invisible Economy",
                subtitle: "How bartenders shape the nightlife",
                excerpt: "A look at the skill, timing, and community that makes a great bar.",
                category: "Operations",
              },
              {
                title: "Quad Cities Music Scene",
                subtitle: "Bands, venues, and what's next",
                excerpt: "Where local talent is rising and how venue partnerships make it happen.",
                category: "Music",
              },
              {
                title: "Building Trust in Nightlife",
                subtitle: "Why transparency matters",
                excerpt: "How accountability strengthens the entire ecosystem.",
                category: "Culture",
              },
            ].map((article, i) => (
              <a
                key={i}
                href="#"
                className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-600 hover:bg-slate-800/30 transition-all group"
              >
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-2">
                  {article.category}
                </p>
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{article.subtitle}</p>
                <p className="text-xs text-slate-500">{article.excerpt}</p>
                <div className="mt-6 text-purple-400 font-semibold text-sm">Read →</div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 font-semibold transition-colors"
            >
              View All Stories
            </a>
          </div>
        </div>
      </section>

      {/* Industry Join CTA Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-purple-950/30 via-slate-900/40 to-slate-950/30 backdrop-blur-sm p-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Ready to Be Part of It?</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Join the QCMix community. Whether you own a venue, work behind the bar, play music, or help run the industry — there's a place for you.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-8 text-sm">
                {["Bar Owners", "Bartenders", "Musicians", "Staff & Ops", "Distributors", "Promoters"].map((role) => (
                  <div key={role} className="text-slate-400">
                    ✓ {role}
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/industry-join"
                  className="inline-block px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-bold text-lg transition-all hover:shadow-lg hover:shadow-purple-900/50"
                >
                  Start Here
                </Link>
              </div>

              <p className="text-xs text-slate-500">
                It takes 2 minutes. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">QCMix</h3>
              <p className="text-sm text-slate-500">
                Connected nightlife for the Quad Cities. Operated by people who know the scene.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-slate-200">Venues</a></li>
                <li><a href="#" className="hover:text-slate-200">Musicians</a></li>
                <li><a href="#" className="hover:text-slate-200">Stories</a></li>
                <li><a href="#" className="hover:text-slate-200">Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Industry</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/industry-join" className="hover:text-slate-200">Join</a></li>
                <li><a href="#" className="hover:text-slate-200">For Venues</a></li>
                <li><a href="#" className="hover:text-slate-200">For Artists</a></li>
                <li><a href="#" className="hover:text-slate-200">Dashboard</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">About</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-slate-200">Our Story</a></li>
                <li><a href="/privacy" className="hover:text-slate-200">Privacy</a></li>
                <li><a href="#" className="hover:text-slate-200">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-500 text-center">
              © 2026 QCMix. Quad Cities Nightlife Connected. Built for the industry.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
