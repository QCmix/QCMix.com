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
  return (
    <main className="bg-bg text-ink-primary min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative py-24 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2" />

        <div className="
          mx-auto
          max-w-[1600px]
          px-6
          lg:px-12
        ">
          <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm text-white/60 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-violet-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span>Quad Cities Nightlife</span>
          </div>

          <h1 className="
            text-4xl
            md:text-6xl
            font-semibold
            tracking-tight
            leading-[1.05]
            mb-6
          ">
            <span className="text-ink-primary">Find your night in the</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Quad Cities
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12">
            Bars, music, and the people who make it happen—documented in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="/musicians" className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:from-violet-700 hover:to-purple-700 transition-all">
              Explore the Scene
            </a>
            <a href="/industry/join" className="px-8 py-4 rounded-lg border border-white/[0.06] text-white font-semibold hover:bg-white/[0.04] transition-all">
              Industry Join
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FEATURE GRID ==================== */}
      <section className="py-24">
        <div className="
          mx-auto
          max-w-[1600px]
          px-6
          lg:px-12
        ">
          <div className="text-center mb-16">
            <h2 className="
              text-2xl
              md:text-3xl
              font-medium
              mb-4
              text-ink-primary
            ">
              Everything you need to know about the scene
            </h2>
            <p className="text-lg text-ink-secondary">
              From venues to musicians, we document the Quad Cities nightlife ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                className="
                  group
                  relative
                  rounded-2xl
                  bg-bg-panel/90
                  backdrop-blur-xl
                  border border-line
                  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                  p-8
                  hover:border-violet-500/30
                  transition-all duration-300
                  hover:-translate-y-2
                "
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-ink-primary mb-3 group-hover:text-violet-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-ink-secondary leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-violet-600/10 to-transparent pointer-events-none rounded-2xl" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ROLE CARDS SECTION ==================== */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#08080f] to-[#0a0a12]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Built for everyone in the scene
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Whether you're behind the bar, on stage, or making the business work—QCmix connects the right people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roleCards.map((role, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#0d0d16] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
              >
                <img
                  src={role.image}
                  alt={role.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-[#08080f]/60 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">
                    {role.description}
                  </p>
                  <p className="text-amber-400 text-sm font-medium italic">
                    {role.tagline}
                  </p>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-violet-600/20 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to be part of the scene?
          </h2>
          <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto">
            Join the Quad Cities nightlife community. Connect with venues, musicians, and industry professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/join" 
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold hover:from-violet-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Join the Community
            </a>
            <a 
              href="/editorial" 
              className="px-8 py-4 rounded-lg border border-white/[0.06] text-white font-semibold hover:bg-white/[0.04] transition-all"
            >
              Read the Editorial
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
