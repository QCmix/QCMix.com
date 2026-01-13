import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

// ============================================
// DATA CONFIGURATION
// ============================================

const heroImages = [
  '/images/hero/herohome.jpg',
  '/images/hero/herohome2.jpg',
  '/images/hero/herohome3.jpg',
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: 'Explore Real Venues',
    description: 'Browse verified Quad Cities bars and venues. See who runs them, who works there, and what kind of nights they\'re known for.',
    link: '/explore',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
    title: 'Discover Local Music',
    description: 'Find bands playing real rooms — not promo noise. See where they play, how often, and who they work with.',
    link: '/music',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Read the Editorial',
    description: 'Coverage on bartending, bar operations, live music, and nightlife culture — written for people inside the scene.',
    link: '/editorial',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: 'Understand the Ecosystem',
    description: 'See how the Quad Cities nightlife actually functions across Iowa and Illinois — who connects to who, and why it works.',
    link: '/about',
  },
];

const roleCards = [
  {
    title: 'Bars & Owners',
    image: '/images/roles/Bars-&-Owners.jpg',
    description: 'Access experienced bartenders, musicians, distributors, and promoters in one place. Be known as a bar that\'s run well, treats people right, and shows up every day.',
    tagline: 'Good bars attract good people.',
  },
  {
    title: 'Bartenders & Bar Staff',
    image: '/images/roles/Bartenders-&-Bar-Staff.jpg',
    description: 'Find bars that are organized, respectful, and consistent. See management styles before walking in blind. Build a professional presence tied to real venues.',
    tagline: 'Where you work matters.',
  },
  {
    title: 'Musicians & Bands',
    image: '/images/roles/Musicians-&-Bands.jpg',
    description: 'Get direct visibility to venues and decision-makers. Be connected to rooms that actually book. Build momentum in the scene you\'re part of.',
    tagline: 'Play the right rooms. Grow the right way.',
  },
  {
    title: 'Distributors & Industry Partners',
    image: '/images/roles/Distributors-&-Industry-Partners.jpg',
    description: 'Understand the landscape before selling into it. See active venues, real teams, and how the scene moves.',
    tagline: 'Context beats cold calls.',
  },
  {
    title: 'Promoters',
    image: '/images/roles/Promoters-Role.jpg',
    description: 'Align venues, bands, and audiences without guessing. Build better shows by knowing the room, the people, and the culture.',
    tagline: 'Better alignment makes better nights.',
  },
  {
    title: 'The Community',
    image: '/images/roles/The-Community.jpg',
    description: 'Explore what\'s really happening. Discover venues you\'ll love. Connect with the scene you\'re part of.',
    tagline: 'Your night starts here.',
  },
];

const transparencyPoints = [
  'Weak operations fade out',
  'Strong teams rise',
  'Accountability becomes culture',
  'The people who care get recognized',
];

const editorialArticles = [
  {
    category: 'ECOSYSTEM',
    title: 'The Quad Cities Nightlife Ecosystem',
    image: '/images/editorial/The-Quad-Cities-Nightlife-Ecosystem.jpg',
    slug: '/editorial/qc-nightlife-ecosystem',
  },
  {
    category: 'OPERATIONS',
    title: 'What a Night Actually Looks Like — Open to Close',
    image: '/images/sections/Editorial-Section.jpg',
    slug: '/editorial/open-to-close',
  },
  {
    category: 'MUSIC',
    title: 'Why Regional Music Scenes Still Matter',
    image: '/images/editorial/Why-Regional-Music-Still-Matters.jpg',
    slug: '/editorial/regional-music-scenes',
  },
  {
    category: 'CULTURE',
    title: 'Behind the Bar: The Work You Don\'t See',
    image: '/images/roles/Bartenders-&-Bar-Staff.jpg',
    slug: '/editorial/behind-the-bar',
  },
];

const missionPoints = [
  'Connect the right people',
  'Reduce friction',
  'Reward professionalism',
  'Strengthen the Quad Cities nightlife long-term',
];

const industryRoles = [
  'Bar Owner / Management',
  'Bartender',
  'Bar Staff',
  'Musician / Band',
  'Distributor / Partner',
  'Promoter',
];

// ============================================
// PAGE COMPONENT
// ============================================

export default function HomePage() {
  const randomHero = heroImages[Math.floor(Math.random() * heroImages.length)];

  return (
    <main className="bg-[#08080f] text-white overflow-hidden">
      
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[100vh] flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={randomHero}
            alt="QCMix platform connecting bars, musicians, and nightlife professionals in the Quad Cities"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Enhanced multi-layer overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080f]/85 via-[#08080f]/50 to-[#08080f]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080f]/70 via-transparent to-[#08080f]/70" />
          {/* Subtle brass glow at bottom */}
          <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-amber-900/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-32">
          <p className="text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in-up">
            Quad Cities Nightlife Platform
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.2] tracking-tight mb-8 pb-2">
            <span className="block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent pb-1">
              Stop guessing.
            </span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent mt-3 pb-1">
              Start seeing.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            QCMix connects bars, bartenders, musicians, and promoters across the Quad Cities — so you know who's real before you work together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link 
              href="/explore" 
              className="group relative px-10 py-5 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full font-semibold text-lg overflow-hidden transition-smooth hover:shadow-[0_0_50px_rgba(218,165,32,0.5)] hover:scale-105"
            >
              <span className="relative z-10 text-black">Explore the Scene</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link 
              href="/join" 
              className="px-10 py-5 bg-white/5 backdrop-blur-sm border border-amber-900/30 rounded-full font-semibold text-lg hover:bg-amber-950/20 hover:border-amber-600/40 transition-smooth"
            >
              Join as Industry
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-3 text-amber-600/60">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-amber-600/60 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="py-40 px-6 bg-gradient-to-b from-transparent via-zinc-950/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              What You Can Do Here
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed text-center">
              No account required. Start exploring the Quad Cities nightlife immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.link}
                className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-amber-600/30 transition-smooth hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-600/20 to-amber-800/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-amber-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ROLE CARDS ==================== */}
      <section className="py-40 px-6 relative">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <p className="text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Built for the whole ecosystem
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              One City. Many Roles.
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed text-center">
              QCMix isn't built for one side of the bar. It's built for everyone who makes the night work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roleCards.map((role, index) => (
              <div
                key={role.title}
                className="group relative rounded-2xl overflow-hidden bg-zinc-950/50 border border-white/[0.08] hover:border-amber-600/30 transition-smooth hover-lift"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-zinc-900">
                  <Image
                    src={role.image}
                    alt={role.title}
                    fill
                    quality={85}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-8 -mt-14">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6 text-sm">
                    {role.description}
                  </p>
                  <p className="text-amber-500 font-medium text-sm italic">
                    "{role.tagline}"
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-amber-600/5 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRANSPARENCY ==================== */}
      <section className="relative py-40 px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sections/Transparency-Section.jpg"
            alt="Transparency Section"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#08080f]/92" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/20 to-amber-900/10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
            Transparency builds
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              stronger nights.
            </span>
          </h2>
          
          <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed text-center">
            QCMix is built on visibility. When everyone can see how the scene actually works:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-16">
            {transparencyPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-600/30 transition-smooth"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-amber-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-white/90 font-medium">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed italic text-lg">
            This platform is for owners who give a damn, bartenders who take pride in their craft, musicians who put in the work, and partners who respect the ecosystem.
          </p>
        </div>
      </section>

      {/* ==================== EDITORIAL ==================== */}
      <section className="py-40 px-6 bg-gradient-to-b from-transparent via-zinc-950/40 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Stories from the scene
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              From the Editorial
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed text-center">
              Real stories. From inside the Quad Cities nightlife.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {editorialArticles.map((article) => (
              <Link
                key={article.slug}
                href={article.slug}
                className="group relative rounded-xl overflow-hidden bg-zinc-950/50 border border-white/[0.08] hover:border-amber-600/30 transition-smooth hover-lift"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    quality={85}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <span className="text-xs font-semibold tracking-[0.15em] text-amber-500 uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-4 leading-snug group-hover:text-amber-400 transition-colors">
                    {article.title}
                  </h3>
                  <span className="text-sm text-white/50 group-hover:text-amber-500 transition-colors flex items-center gap-2">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/editorial"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full border border-amber-900/30 text-white/80 hover:bg-amber-950/20 hover:border-amber-600/40 transition-smooth font-medium"
            >
              Read the Editorial
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== WHY QCMIX EXISTS ==================== */}
      <section className="relative py-40 px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sections/Why-QCMix-Exists.jpg"
            alt="Why QCMix Exists"
            fill
            quality={85}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#08080f]/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Why QCMix Exists
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed text-center">
              QCMix was built by people inside the scene — not outsiders trying to monetize it.
            </p>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-3xl p-10 md:p-14">
            <p className="text-white/50 uppercase tracking-wider text-sm font-medium mb-8">
              It exists to:
            </p>

            <div className="space-y-5 mb-12">
              {missionPoints.map((point) => (
                <div key={point} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-amber-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-lg text-white/80">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/[0.06]">
              <p className="text-white/30 text-center leading-relaxed">
                No hype cycles. No influencer nonsense.
                <br />
                <span className="text-white/50 font-medium">Just real infrastructure for a real scene.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRY JOIN CTA ==================== */}
      <section className="relative py-48 px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sections/Atmospheric.jpg"
            alt="Industry Join Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-[#08080f]/92 to-[#08080f]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 to-amber-900/5" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Industry Join
          </h2>
          <p className="text-xl text-white/60 mb-14 max-w-2xl mx-auto leading-relaxed text-center">
            If you're part of the scene — this is your platform.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {industryRoles.map((role) => (
              <span
                key={role}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70 hover:border-amber-600/30 transition-smooth"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-amber-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {role}
              </span>
            ))}
          </div>

          <p className="text-white/50 mb-12 text-lg">
            Start basic. Verify when ready. Build your presence over time.
          </p>

          <Link
            href="/join"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full font-semibold text-lg hover:shadow-[0_0_60px_rgba(218,165,32,0.5)] hover:scale-105 transition-smooth text-black"
          >
            Join the Industry
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-24 px-6 border-t border-white/[0.08] bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                QCMix
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Independent. Quad Cities focused. Built for bars, bartenders, musicians, and the people who make nightlife work.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-6 text-white/90 tracking-wide">Explore</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li><Link href="/venues" className="hover:text-amber-400 transition-all duration-300">Venues</Link></li>
                <li><Link href="/bartenders" className="hover:text-amber-400 transition-all duration-300">Bartenders</Link></li>
                <li><Link href="/music" className="hover:text-amber-400 transition-all duration-300">Musicians</Link></li>
                <li><Link href="/events" className="hover:text-amber-400 transition-all duration-300">Events</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white/90 tracking-wide">Industry</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li><Link href="/join" className="hover:text-amber-400 transition-all duration-300">Join</Link></li>
                <li><Link href="/dashboard" className="hover:text-amber-400 transition-all duration-300">Dashboard</Link></li>
                <li><Link href="/for-venues" className="hover:text-amber-400 transition-all duration-300">For Venues</Link></li>
                <li><Link href="/for-artists" className="hover:text-amber-400 transition-all duration-300">For Artists</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white/90 tracking-wide">About</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li><Link href="/about" className="hover:text-amber-400 transition-all duration-300">Our Story</Link></li>
                <li><Link href="/editorial" className="hover:text-amber-400 transition-all duration-300">Editorial</Link></li>
                <li><Link href="/privacy" className="hover:text-amber-400 transition-all duration-300">Privacy</Link></li>
                <li><Link href="/contact" className="hover:text-amber-400 transition-all duration-300">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 mt-12 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© 2025 QCMix. Independent. Quad Cities focused. Built for the industry.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
