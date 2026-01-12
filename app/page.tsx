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
              <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Stop guessing.
                </span>
                <br />
                Start seeing.
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                QCMix connects bars, bartenders, musicians, and promoters across the Quad Cities — so you know who's real before you work together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="#explore"
                className="px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-bold text-lg transition-all hover:shadow-lg hover:shadow-purple-900/50"
              >
                Explore the Scene
              </a>
              <Link
                href="/industry-join"
                className="px-8 py-4 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 font-bold text-lg transition-colors"
              >
                Join as Industry
              </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold">What You Can Do Here</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              No account required. Start exploring the Quad Cities nightlife immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Explore Venues */}
            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-bold mb-3">Explore Real Venues</h3>
              <p className="text-slate-400 text-sm mb-6">
                Browse verified Quad Cities bars and venues. See who runs them, who works there, and what kind of nights they're known for.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                Browse →
              </a>
            </div>

            {/* Discover Musicians */}
            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-lg font-bold mb-3">Discover Local Music</h3>
              <p className="text-slate-400 text-sm mb-6">
                Find bands playing real rooms — not promo noise. See where they play, how often, and who they work with.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                Discover →
              </a>
            </div>

            {/* Read Editorial */}
            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-lg font-bold mb-3">Read the Industry</h3>
              <p className="text-slate-400 text-sm mb-6">
                Editorial coverage on bartending, bar operations, live music, and nightlife culture — written for people inside the scene.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                Read →
              </a>
            </div>

            {/* Understand Ecosystem */}
            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-lg font-bold mb-3">Understand the Ecosystem</h3>
              <p className="text-slate-400 text-sm mb-6">
                See how the Quad Cities nightlife actually functions — who connects to who, and why it works when it works.
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                Learn →
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
              QCMix isn't built for one side of the bar. It's built for the whole ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Bar Owners */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-emerald-600/40 hover:bg-emerald-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-emerald-900/40 flex items-center justify-center mb-4 group-hover:bg-emerald-900/60 transition-colors">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-emerald-300">Bars & Owners</h3>
              <p className="text-slate-400 text-sm mb-4">
                Access experienced bartenders, musicians, distributors, and promoters in one place. Be known as a bar that's run well, treats people right, and shows up every day.
              </p>
              <p className="text-xs text-slate-500 italic">
                Good bars attract good people. Visibility makes that happen.
              </p>
            </div>

            {/* Bartenders */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-blue-600/40 hover:bg-blue-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-blue-900/40 flex items-center justify-center mb-4 group-hover:bg-blue-900/60 transition-colors">
                <span className="text-2xl">🍸</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-300">Bartenders & Bar Staff</h3>
              <p className="text-slate-400 text-sm mb-4">
                Find bars that are organized, respectful, and consistent. See management styles before walking in blind. Build a professional presence tied to real venues.
              </p>
              <p className="text-xs text-slate-500 italic">
                Where you work matters.
              </p>
            </div>

            {/* Musicians */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-purple-600/40 hover:bg-purple-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-purple-900/40 flex items-center justify-center mb-4 group-hover:bg-purple-900/60 transition-colors">
                <span className="text-2xl">🎸</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-purple-300">Musicians & Bands</h3>
              <p className="text-slate-400 text-sm mb-4">
                Get direct visibility to venues and decision-makers. Be connected to rooms that actually book. Build momentum in the scene you're part of.
              </p>
              <p className="text-xs text-slate-500 italic">
                Play the right rooms. Grow the right way.
              </p>
            </div>

            {/* Distributors */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-indigo-600/40 hover:bg-indigo-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-indigo-900/40 flex items-center justify-center mb-4 group-hover:bg-indigo-900/60 transition-colors">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-indigo-300">Distributors & Industry Partners</h3>
              <p className="text-slate-400 text-sm mb-4">
                Understand the landscape before selling into it. See active venues, real teams, and how the scene moves.
              </p>
              <p className="text-xs text-slate-500 italic">
                Context beats cold calls.
              </p>
            </div>

            {/* Promoters */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-amber-600/40 hover:bg-amber-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-amber-900/40 flex items-center justify-center mb-4 group-hover:bg-amber-900/60 transition-colors">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-amber-300">Promoters</h3>
              <p className="text-slate-400 text-sm mb-4">
                Align venues, bands, and audiences without guessing. Build better shows by knowing the room, the people, and the culture.
              </p>
              <p className="text-xs text-slate-500 italic">
                Better alignment makes better nights.
              </p>
            </div>

            {/* Patrons */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-cyan-600/40 hover:bg-cyan-950/20 transition-all group">
              <div className="w-12 h-12 rounded-full bg-cyan-900/40 flex items-center justify-center mb-4 group-hover:bg-cyan-900/60 transition-colors">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-cyan-300">The Community</h3>
              <p className="text-slate-400 text-sm mb-4">
                Explore what's really happening. Discover venues that matter. Connect with the scene you're part of.
              </p>
              <p className="text-xs text-slate-500 italic">
                Your night starts here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Values Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Transparency Builds Stronger Nights</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              QCMix is built on visibility. When everyone can see how the scene actually works:
            </p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-12 mb-12">
            <ul className="space-y-4 text-lg text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">✓</span>
                <span>Weak operations fade out</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">✓</span>
                <span>Strong teams rise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">✓</span>
                <span>Accountability becomes culture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">✓</span>
                <span>The people who care get recognized</span>
              </li>
            </ul>
            <p className="text-sm text-slate-400 mt-8 italic">
              This platform is for owners who give a damn, bartenders who take pride in their craft, musicians who put in the work, and partners who respect the ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h2 className="text-4xl md:text-5xl font-bold">From the Editorial</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real stories from inside the Quad Cities nightlife.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "The Quad Cities Nightlife Ecosystem",
                category: "Industry",
              },
              {
                title: "What a Night Actually Looks Like — Open to Close",
                category: "Operations",
              },
              {
                title: "Why Regional Music Scenes Still Matter",
                category: "Music",
              },
              {
                title: "Behind the Bar: The Work You Don't See",
                category: "Culture",
              },
            ].map((article, i) => (
              <a
                key={i}
                href="#"
                className="rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-slate-600 hover:bg-slate-800/30 transition-all group"
              >
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-3">
                  {article.category}
                </p>
                <h3 className="text-sm font-bold mb-4 group-hover:text-purple-300 transition-colors leading-tight">
                  {article.title}
                </h3>
                <div className="text-purple-400 font-semibold text-xs">Read →</div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 font-semibold transition-colors"
            >
              Read the Editorial
            </a>
          </div>
        </div>
      </section>

      {/* Industry Join CTA Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-purple-950/30 via-slate-900/40 to-slate-950/30 backdrop-blur-sm p-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Why QCMix Exists</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                QCMix was built by people inside the scene — not outsiders trying to monetize it.
              </p>

              <div className="space-y-3 py-8 text-left max-w-xl mx-auto text-slate-300">
                <p>It exists to:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Connect the right people</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Reduce friction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Reward professionalism</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Strengthen the Quad Cities nightlife long-term</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-slate-400 italic">
                No hype cycles. No influencer nonsense. Just real infrastructure for a real scene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-purple-950/30 via-slate-900/40 to-slate-950/30 backdrop-blur-sm p-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">Industry Join</h2>
              <p className="text-lg text-slate-400">
                If you're part of the scene — this is your platform.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-8 text-sm text-slate-300">
                {["Bar Owner / Management", "Bartender", "Bar Staff", "Musician / Band", "Distributor / Partner", "Promoter"].map((role) => (
                  <div key={role} className="text-slate-400">
                    ✓ {role}
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-sm text-slate-400">
                  Start basic. Verify when ready. Build your presence over time.
                </p>
                <Link
                  href="/industry-join"
                  className="inline-block px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-bold text-lg transition-all hover:shadow-lg hover:shadow-purple-900/50"
                >
                  Join the Industry
                </Link>
              </div>
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
                Independent. Quad Cities focused. Built for bars, bartenders, musicians, and the people who make nightlife work.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-slate-200">Venues</a></li>
                <li><a href="#" className="hover:text-slate-200">Musicians</a></li>
                <li><a href="#" className="hover:text-slate-200">Editorial</a></li>
                <li><a href="#" className="hover:text-slate-200">Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Industry</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/industry-join" className="hover:text-slate-200">Join</a></li>
                <li><a href="#" className="hover:text-slate-200">Dashboard</a></li>
                <li><a href="#" className="hover:text-slate-200">For Venues</a></li>
                <li><a href="#" className="hover:text-slate-200">For Artists</a></li>
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
              © 2026 QCMix. Independent. Quad Cities focused. Built for the industry.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
