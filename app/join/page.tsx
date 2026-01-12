import Image from 'next/image';
import Link from 'next/link';

// ============================================
// ROLE DATA
// ============================================

const roles = [
  {
    id: 'bar-owner',
    title: 'Bar Owner & Management',
    subtitle: 'Ownership, management, and venue operations.',
    description: 'Manage your venue\'s presence, connect with talent, and build your reputation as a bar that runs right.',
    image: '/images/roles/Bars & Owners.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
    ),
    href: '/join/bar-owner',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'hover:border-amber-500/30',
    iconBg: 'bg-gradient-to-br from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
  },
  {
    id: 'bartender',
    title: 'Bartender',
    subtitle: 'Guest-facing bar service and floor leadership.',
    description: 'Build your professional presence, find quality venues, and connect with the industry on your terms.',
    image: '/images/roles/Bartenders & Bar Staff.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    href: '/join/bartender',
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'hover:border-violet-500/30',
    iconBg: 'bg-gradient-to-br from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-400',
  },
  {
    id: 'bar-worker',
    title: 'Bar Worker',
    subtitle: 'Barback, BOH, security, and door staff.',
    description: 'Essential roles that keep the night running. Get recognized for the work that happens behind the scenes.',
    image: '/images/roles/Bartenders & Bar Staff.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    href: '/join/bar-worker',
    color: 'from-slate-500/20 to-zinc-500/20',
    borderColor: 'hover:border-slate-500/30',
    iconBg: 'bg-gradient-to-br from-slate-500/20 to-zinc-500/20',
    iconColor: 'text-slate-400',
  },
  {
    id: 'distributor',
    title: 'Distributor',
    subtitle: 'Beverage distribution and brand representation.',
    description: 'Understand the landscape, connect with active venues, and build relationships that last.',
    image: '/images/roles/Distributors & Industry Partners.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    href: '/join/distributor',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-500/30',
    iconBg: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    id: 'musician',
    title: 'Musician',
    subtitle: 'Performing artists and working musicians.',
    description: 'Get direct visibility to venues and decision-makers. Play the right rooms. Grow the right way.',
    image: '/images/roles/Musicians & Bands.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
    href: '/join/musician',
    color: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'hover:border-rose-500/30',
    iconBg: 'bg-gradient-to-br from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-400',
  },
  {
    id: 'patron',
    title: 'Patron',
    subtitle: 'Supporters and regular participants in the scene.',
    description: 'Explore what\'s really happening. Discover venues you\'ll love. Be part of the community.',
    image: '/images/roles/The Community.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    href: '/join/patron',
    color: 'from-sky-500/20 to-blue-500/20',
    borderColor: 'hover:border-sky-500/30',
    iconBg: 'bg-gradient-to-br from-sky-500/20 to-blue-500/20',
    iconColor: 'text-sky-400',
  },
];

// ============================================
// PAGE COMPONENT
// ============================================

export default function JoinPage() {
  return (
    <main className="bg-[#08080f] min-h-screen">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-white/60">Join</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Choose your</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              primary role
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Select the role that best matches what you do most. Roles determine permissions and tools. 
            <span className="text-white/80"> They are functional — not status-based.</span>
          </p>
        </div>
      </section>

      {/* ==================== ROLE CARDS GRID ==================== */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <Link
                key={role.id}
                href={role.href}
                className={`group relative rounded-3xl overflow-hidden bg-[#0d0d16] border border-white/[0.06] ${role.borderColor} transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]`}
              >
                {/* Background Image (subtle) */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <Image
                    src={role.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${role.color}`} />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${role.iconBg} ${role.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {role.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                        {role.title}
                      </h2>
                      <p className="text-white/50 text-sm md:text-base mb-4">
                        {role.subtitle}
                      </p>
                      <p className="text-white/40 text-sm leading-relaxed hidden md:block">
                        {role.description}
                      </p>
                    </div>
                  </div>

                  {/* Continue Link */}
                  <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-sm text-white/40">
                      Continue to join
                    </span>
                    <div className="flex items-center gap-2 text-violet-400 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Continue</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INFO FOOTER ==================== */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 to-indigo-950/30" />
            <div className="absolute inset-0 border border-white/[0.06] rounded-2xl" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-violet-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How roles work
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    One primary role is required at join. Additional context can be added later. 
                    Role changes require review to maintain platform integrity.
                  </p>
                </div>

                {/* Additional info */}
                <div className="flex flex-col gap-3 md:text-right">
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Start basic</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Verify when ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Build over time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BACK LINK ==================== */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span>Back to home</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
