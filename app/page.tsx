'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        {/* Full Bleed Hero Image */}
        <img
          src="/hero-bar-interior-01.jpg"
          alt="Quad Cities bar interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Deep Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-32">
          <div className="max-w-5xl">
            {/* Logo */}
            <img
              src="/WhiteLogoTrans.png"
              alt="QCMix logo"
              className="h-20 md:h-24 mb-12"
            />
            
            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight leading-[0.95] mb-16">
              The operating<br />
              system for<br />
              Quad Cities<br />
              nightlife
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light leading-relaxed mb-20 max-w-4xl">
              A hiring and booking network built for bars, venues, bartenders, and musicians.
            </p>

            {/* Single CTA */}
            <div className="mb-24">
              <a
                href="/join-venue"
                className="inline-block px-12 py-4 bg-white text-black text-base font-medium tracking-wide hover:bg-gray-100 transition-colors duration-200"
              >
                Request Founding Access
              </a>
            </div>

            {/* Three Benefits - Clean List */}
            <div className="space-y-5 text-xl text-gray-400 max-w-2xl">
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