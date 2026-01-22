'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen">
        {/* Full Bleed Hero Image */}
        <img
          src="/hero-bar-interior-01.jpg"
          alt="Quad Cities bar interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Deep Black Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>

        {/* Content - LEFT ALIGNED BRUTALIST */}
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-20 pt-12 md:pt-16 pb-20">
          {/* Logo - Top Left */}
          <img
            src="/WhiteLogoTrans.png"
            alt="QCMix"
            className="h-20 md:h-24 mb-20 md:mb-32"
          />
          
          {/* Main Headline - MASSIVE BRUTALIST */}
          <h1 className="text-8xl md:text-9xl lg:text-[140px] xl:text-[180px] font-black uppercase tracking-tighter leading-[0.85] mb-16 md:mb-20 max-w-5xl">
            Operating<br />
            System for<br />
            Nightlife
          </h1>

          {/* Subheadline - Serious Tone */}
          <p className="text-lg md:text-2xl text-gray-300 uppercase tracking-wide leading-relaxed mb-20 md:mb-28 max-w-2xl font-light">
            Infrastructure, not social media. Hiring and booking network for bars, venues, bartenders, musicians.
          </p>

          {/* CTA - Sharp, Uppercase */}
          <a
            href="/join-venue"
            className="inline-block px-12 md:px-16 py-4 md:py-5 bg-white text-black uppercase text-sm md:text-base font-black tracking-widest rounded-none hover:bg-gray-100 transition-colors duration-300"
          >
            Request Access
          </a>

          {/* Meta Info - Left Aligned */}
          <div className="mt-32 md:mt-40 space-y-8 text-sm uppercase tracking-widest text-gray-500">
            <p>Limited Founding Membership</p>
            <p>First 10 Venues · First 100 Members</p>
          </div>
        </div>
      </section>

      {/* Proposition Section - Asymmetric Layout */}
      <section className="bg-black border-t border-white/5 px-6 md:px-16 lg:px-20 py-24 md:py-32">
        <div className="w-full max-w-2xl">
          {/* Section Divider */}
          <div className="border-t border-white/20 mb-12"></div>
          
          {/* Headline */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-16">
            Why You<br />
            Need<br />
            QCMix
          </h2>

          {/* Proposition List - Left Aligned */}
          <div className="space-y-12 text-base md:text-lg text-gray-300 uppercase tracking-wide leading-relaxed">
            <div>
              <p className="font-black text-white mb-2">001</p>
              <p>Hire Bartenders Without Chaos</p>
            </div>
            <div>
              <p className="font-black text-white mb-2">002</p>
              <p>Book Live Acts In Real Time</p>
            </div>
            <div>
              <p className="font-black text-white mb-2">003</p>
              <p>Find Paid Gigs You Can Trust</p>
            </div>
            <div>
              <p className="font-black text-white mb-2">004</p>
              <p>Network With Industry Peers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Access Section */}
      <section className="bg-black border-t border-white/5 px-6 md:px-16 lg:px-20 py-24 md:py-32">
        <div className="w-full max-w-2xl">
          {/* Section Divider */}
          <div className="border-t border-white/20 mb-12"></div>

          {/* Headline */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-16">
            Founding<br />
            Access
          </h2>

          {/* Benefits - No Cards, Just Text */}
          <div className="space-y-6 text-sm md:text-base text-gray-300 uppercase tracking-wide mb-20">
            <p>✓ Lifetime discounted pricing</p>
            <p>✓ Priority placement at launch</p>
            <p>✓ Direct input on features</p>
            <p>✓ Permanent founding badge</p>
          </div>

          {/* CTA */}
          <a
            href="/join-venue"
            className="inline-block px-12 md:px-16 py-4 md:py-5 bg-white text-black uppercase text-sm md:text-base font-black tracking-widest rounded-none hover:bg-gray-100 transition-colors duration-300"
          >
            Claim Spot
          </a>

          {/* Meta */}
          <p className="text-xs uppercase tracking-widest text-gray-600 mt-12">
            Limited to the first 10 venues and 100 industry members
          </p>
        </div>
      </section>

      {/* Footer - Minimal Brutalist */}
      <footer className="bg-black border-t border-white/5 px-6 md:px-16 lg:px-20 py-16 md:py-20">
        <div className="w-full flex flex-col md:flex-row items-start justify-between max-w-5xl">
          {/* Logo Left */}
          <img
            src="/WhiteLogoTrans.png"
            alt="QCMix"
            className="h-12 md:h-14 mb-8 md:mb-0"
          />

          {/* Links Right */}
          <div className="flex gap-12 text-xs uppercase tracking-widest text-gray-500">
            <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
            <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/5 pt-12">
          <p className="text-xs uppercase tracking-widest text-gray-600">
            © QCMix 2026 · Quad Cities, IA
          </p>
        </div>
      </footer>
    </main>
  );
}