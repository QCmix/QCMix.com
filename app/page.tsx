import Image from 'next/image';

export const dynamic = 'force-dynamic'; // Ensures random hero on each visit

// ============================================
// IMAGE CONFIGURATION
// ============================================

const heroImages = [
  '/images/hero/herohome.jpg',
  '/images/hero/herohome2.jpg',
  '/images/hero/herohome3.jpg',
];

const roleCards = [
  {
    title: 'Bars & Owners',
    image: '/images/roles/Bars & Owners.jpg',
    alt: 'Bar owner managing nightlife venue operations',
    body: 'Access experienced bartenders, musicians, distributors, and promoters in one place. Be known as a bar that\'s run well, treats people right, and shows up every day.',
    tagline: 'Good bars attract good people.',
  },
  {
    title: 'Bartenders & Bar Staff',
    image: '/images/roles/Bartenders & Bar Staff.jpg',
    alt: 'Bartender expertly crafting drinks behind the bar',
    body: 'Find bars that are organized, respectful, and consistent. See management styles before walking in blind. Build a professional presence tied to real venues.',
    tagline: 'Where you work matters.',
  },
  {
    title: 'Musicians & Bands',
    image: '/images/roles/Musicians & Bands.jpg',
    alt: 'Live band performing on stage at a venue',
    body: 'Get direct visibility to venues and decision-makers. Be connected to rooms that actually book. Build momentum in the scene you\'re part of.',
    tagline: 'Play the right rooms. Grow the right way.',
  },
  {
    title: 'Distributors & Industry Partners',
    image: '/images/roles/Distributors & Industry Partners.jpg',
    alt: 'Industry professional discussing distribution partnership',
    body: 'Understand the landscape before selling into it. See active venues, real teams, and how the scene moves.',
    tagline: 'Context beats cold calls.',
  },
  {
    title: 'Promoters',
    image: '/images/roles/Promoters.jpg',
    alt: 'Event promoter coordinating live music night',
    body: 'Align venues, bands, and audiences without guessing. Build better shows by knowing the room, the people, and the culture.',
    tagline: 'Better alignment makes better nights.',
  },
  {
    title: 'The Community',
    image: '/images/roles/The Community.jpg',
    alt: 'Diverse community members enjoying nightlife together',
    body: 'Explore what\'s really happening. Discover venues you\'ll love. Connect with the scene you\'re part of.',
    tagline: 'Your night starts here.',
  },
];

const editorialArticles = [
  {
    category: 'ECOSYSTEM',
    title: 'The Quad Cities Nightlife Ecosystem',
    image: '/images/editorial/The Quad Cities Nightlife Ecosystem.jpg',
    alt: 'Map showing the interconnected Quad Cities nightlife ecosystem',
    slug: '/editorial/qc-nightlife-ecosystem',
  },
  {
    category: 'OPERATIONS',
    title: 'What a Night Actually Looks Like — Open to Close',
    image: '/images/sections/Editorial Section.jpg',
    alt: 'Behind-the-scenes view of a night\'s operations at a venue',
    slug: '/editorial/open-to-close',
  },
  {
    category: 'MUSIC',
    title: 'Why Regional Music Scenes Still Matter',
    image: '/images/editorial/Why Regional Music Still Matters.jpg',
    alt: 'Musicians performing in a regional music venue',
    slug: '/editorial/regional-music-scenes',
  },
  {
    category: 'CULTURE',
    title: 'Behind the Bar: The Work You Don\'t See',
    image: '/images/sections/Atmospheric.jpg',
    alt: 'Atmospheric view of venue culture and bar environment',
    slug: '/editorial/behind-the-bar',
  },
];

const sectionImages = {
  transparency: '/images/sections/Transparency Section.jpg',
  whyExists: '/images/sections/Why QCMix Exists.jpg',
  joinCta: '/images/sections/Editorial Section.jpg',
};

// ============================================
// PAGE COMPONENT
// ============================================

export default function HomePage() {
  // Random hero image selection (server-side)
  const randomHero = heroImages[Math.floor(Math.random() * heroImages.length)];
  return (
    <main className="bg-slate-950 text-slate-50">
      {/* ==================== HERO ==================== */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src={randomHero}
            alt="QCMix platform connecting bars, musicians, and nightlife professionals in the Quad Cities"
            fill
            priority
            quality={85}
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content relative min-h-screen flex items-center justify-center z-10">
          <div className="max-w-6xl mx-auto px-6 py-20 text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Stop guessing.
                </span>
                <br />
                Start seeing.
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                QCMix connects bars, bartenders, musicians, and promoters across the
                Quad Cities — so you know who's real before you work together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="/explore" className="px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-bold text-lg transition-all hover:shadow-lg hover:shadow-purple-900/50">
                Explore the Scene
              </a>
              <a href="/join" className="px-8 py-4 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 font-bold text-lg transition-colors">
                Join as Industry
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

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <div className="text-center text-slate-500">
              <p className="text-xs uppercase tracking-wide mb-2">Scroll to explore</p>
              <div className="text-lg">↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT YOU CAN DO ==================== */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What You Can Do Here</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              No account required. Start exploring the Quad Cities nightlife immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-bold mb-3">Explore Real Venues</h3>
              <p className="text-slate-400 text-sm">
                Browse verified Quad Cities bars and venues. See who runs them, who works there, and what kind of nights they're known for.
              </p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-lg font-bold mb-3">Discover Local Music</h3>
              <p className="text-slate-400 text-sm">
                Find bands playing real rooms — not promo noise. See where they play, how often, and who they work with.
              </p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-lg font-bold mb-3">Read the Editorial</h3>
              <p className="text-slate-400 text-sm">
                Coverage on bartending, bar operations, live music, and nightlife culture — written for people inside the scene.
              </p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-lg font-bold mb-3">Understand the Ecosystem</h3>
              <p className="text-slate-400 text-sm">
                See how the Quad Cities nightlife actually functions across Iowa and Illinois — who connects to who, and why it works when it works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATEMENT BANNER ==================== */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Five cities. Many roles. Shared visibility.
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            QCMix isn't built for one side of the bar. It's built for the whole ecosystem.
          </p>
        </div>
      </section>

      {/* ==================== ROLE CARDS ==================== */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {roleCards.map((role) => (
              <div
                key={role.title}
                className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40 flex flex-col"
              >
                <h3 className="text-lg font-bold mb-4">{role.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{role.body}</p>
                <p className="text-purple-400 font-semibold text-sm italic">
                  "{role.tagline}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRANSPARENCY ==================== */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Transparency builds stronger nights.
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              QCMix is built on visibility. When everyone can see how the scene actually works:
            </p>
          </div>

          <div className="space-y-3">
            {[
              'Weak operations fade out',
              'Strong teams rise',
              'Accountability becomes culture',
              'The people who care get recognized',
            ].map((point) => (
              <div key={point} className="flex gap-4">
                <div className="text-purple-400 font-bold text-lg flex-shrink-0">✓</div>
                <p className="text-lg text-slate-200">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-slate-300 italic pt-4 border-t border-slate-800">
            This platform is for owners who give a damn, bartenders who take pride in their craft, musicians who put in the work, and partners who respect the ecosystem.
          </p>
        </div>
      </section>

      {/* ==================== EDITORIAL ==================== */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">From the Editorial</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real stories from inside the Quad Cities nightlife.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {editorialArticles.map((article) => (
              <a
                key={article.slug}
                href={article.slug}
                className="group rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40"
              >
                <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-4 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                  Read →
                </p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/editorial"
              className="inline-block px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-bold text-lg transition-all hover:shadow-lg hover:shadow-purple-900/50"
            >
              Read the Editorial
            </a>
          </div>
        </div>
      </section>

      {/* ==================== WHY QCMIX EXISTS ==================== */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Why QCMix Exists
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              QCMix was built by people inside the scene — not outsiders trying to monetize it.
            </p>
          </div>

          <div className="space-y-3">
            {[
              'Connect the right people',
              'Reduce friction',
              'Reward professionalism',
              'Strengthen the Quad Cities nightlife long-term',
            ].map((point) => (
              <div key={point} className="flex gap-4">
                <div className="text-purple-400 font-bold text-lg flex-shrink-0">✓</div>
                <p className="text-lg text-slate-200">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-slate-300 italic pt-4 border-t border-slate-800">
            No hype cycles. No influencer nonsense. Just real infrastructure for a real scene.
          </p>
        </div>
      </section>

      {/* ==================== INDUSTRY JOIN CTA ==================== */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Industry Join
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              If you're part of the scene — this is your platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-200">For:</h3>
              <ul className="space-y-3">
                {[
                  'Bar Owner / Management',
                  'Bartender',
                  'Bar Staff (Security, Door, BOH)',
                  'Musician / Band',
                  'Distributor / Partner',
                ].map((role) => (
                  <li key={role} className="flex gap-3">
                    <span className="text-purple-400 font-bold">•</span>
                    <span className="text-slate-300">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-200">How it works:</h3>
              <ol className="space-y-3">
                {[
                  'Start basic.',
                  'Verify when ready.',
                  'Build your presence over time.',
                ].map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-purple-400 font-bold">{idx + 1}.</span>
                    <span className="text-slate-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/join"
              className="inline-block px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-bold text-lg transition-all hover:shadow-lg hover:shadow-purple-900/50"
            >
              Join the Industry
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-slate-800 py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-2">
              <h3 className="text-4xl font-black tracking-tight">QCMix</h3>
              <div className="space-y-1">
                <p className="text-slate-300 text-sm">Independent.</p>
                <p className="text-slate-300 text-sm">Quad Cities focused.</p>
                <p className="text-slate-300 text-sm">
                  Built for bars, bartenders, musicians, and the people who make nightlife work.
                </p>
              </div>
            </div>

            <div className="flex gap-12">
              <div className="space-y-3">
                <a href="/explore" className="block text-slate-300 hover:text-purple-400 transition-colors text-sm">
                  Explore
                </a>
                <a href="/editorial" className="block text-slate-300 hover:text-purple-400 transition-colors text-sm">
                  Editorial
                </a>
              </div>
              <div className="space-y-3">
                <a href="/join" className="block text-slate-300 hover:text-purple-400 transition-colors text-sm">
                  Join
                </a>
                <a href="/about" className="block text-slate-300 hover:text-purple-400 transition-colors text-sm">
                  About
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} QCMix. Independent. Quad Cities focused.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
