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
    <main className="bg-[#08080f] text-white min-h-screen">
      <section className="max-w-7xl mx-auto py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Find your night in the Quad Cities.</h1>
        <p className="text-xl mb-10">Bars, music, and the people who make it happen—documented in one place.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="/musicians" className="px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">Explore the Scene</a>
          <a href="/industry/join" className="px-8 py-4 rounded-lg border border-neutral-800 text-neutral-100 font-semibold hover:bg-neutral-900 transition">Industry Join</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <a href="/bars" className="border border-neutral-800 rounded-xl p-8 hover:border-indigo-600 transition">
            <h2 className="text-2xl font-bold mb-2">Bars</h2>
            <p className="text-base">Discover venues, owners, and what makes each bar unique.</p>
          </a>
          <a href="/musicians" className="border border-neutral-800 rounded-xl p-8 hover:border-indigo-600 transition">
            <h2 className="text-2xl font-bold mb-2">Music</h2>
            <p className="text-base">Explore local bands, solo acts, and the music scene.</p>
          </a>
          <a href="/bartenders" className="border border-neutral-800 rounded-xl p-8 hover:border-indigo-600 transition">
            <h2 className="text-2xl font-bold mb-2">People</h2>
            <p className="text-base">Meet bartenders and staff who make the night work.</p>
          </a>
          <a href="/editorial" className="border border-neutral-800 rounded-xl p-8 hover:border-indigo-600 transition">
            <h2 className="text-2xl font-bold mb-2">Stories</h2>
            <p className="text-base">Read features and stories from inside the scene.</p>
          </a>
        </div>
      </section>
    </main>
  );
}
