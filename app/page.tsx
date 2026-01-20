'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-start justify-start pt-12 md:pt-16">
        {/* Full Bleed Hero Image */}
        <img
          src="/hero-bar-interior-01.jpg"
          alt="Quad Cities bar interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Deep Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

        {/* Content */}
        <div className="relative z-10 w-full mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col justify-center flex-1">
          <div className="w-full">
            {/* Logo */}
            <img
              src="/WhiteLogoTrans.png"
              alt="QCMix logo"
              className="h-24 md:h-28 mb-16 md:mb-20"
            />
            
            {/* Main Headline - Brutalist, Full Width */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[150px] font-bold tracking-tighter leading-[0.9] mb-12 md:mb-16 max-w-full">
              The operating<br />
              system for<br />
              Quad Cities<br />
              nightlife
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl lg:text-5xl text-gray-200 font-light leading-relaxed mb-16 md:mb-24 max-w-3xl">
              A hiring and booking network built for bars, venues, bartenders, and musicians.
            </p>

            {/* Single CTA */}
            <div className="mb-20 md:mb-28">
              <a
                href="/join-venue"
                className="inline-block px-14 md:px-16 py-5 md:py-6 bg-white text-black text-base md:text-lg font-bold tracking-wide hover:bg-gray-200 transition-colors duration-200"
              >
                Request Founding Access
              </a>
            </div>

            {/* Three Benefits - Clean List */}
            <div className="space-y-6 md:space-y-8 text-2xl md:text-3xl text-gray-300 max-w-3xl font-light">
              <p>Hire bartenders faster</p>
              <p>Book live acts without chaos</p>
              <p>Find real paid gigs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Partner Section */}
      <section className="bg-black border-t border-white/10 px-8 py-32">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight mb-12">
            Founding<br />Partner Access
          </h2>

          {/* Description */}
          <p className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed mb-20 max-w-3xl">
            Early access for a select group of Quad Cities venues and industry professionals.
          </p>

          {/* Benefits - Two Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mb-20 text-xl text-gray-300">
            <p>Lifetime discounted pricing</p>
            <p>Priority placement at launch</p>
            <p>Direct input on features</p>
            <p>Permanent founding badge</p>
          </div>

          {/* Scarcity */}
          <p className="text-gray-500 text-sm mb-12 tracking-wide">
            Limited to the first 10 venues and 100 industry members
          </p>

          {/* CTA */}
          <a
            href="/join-venue"
            className="inline-block px-12 py-4 bg-white text-black text-base font-medium tracking-wide hover:bg-gray-100 transition-colors duration-200"
          >
            Request Founding Access
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <img
            src="/WhiteLogoTrans.png"
            alt="QCMix logo"
            className="h-10 mx-auto"
          />
          <a
            href="/contact"
            className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm"
          >
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}