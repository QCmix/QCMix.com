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
        
        {/* Heavy Black Gradient on LEFT (to-transparent on right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        {/* Content - LEFT ALIGNED BRUTALIST */}
        <div className="relative z-10 w-full px-8 md:px-20 lg:px-24 pt-16 md:pt-24 pb-24 md:pb-32 flex flex-col justify-start">
          {/* Logo - Top Left */}
          <img
            src="/WhiteLogoTrans.png"
            alt="QCMix"
            className="h-20 md:h-28 mb-32 md:mb-40"
          />
          
          {/* Main Headline - MASSIVE BOLD BRUTALIST */}
          <h1 className="text-[12rem] font-black uppercase tracking-tighter leading-[0.8] mb-24 md:mb-32 max-w-2xl">
            Operating<br />
            System for<br />
            Nightlife
          </h1>

          {/* Subheadline - Serious Tone */}
          <p className="text-lg md:text-2xl text-white uppercase tracking-wider leading-relaxed mb-24 md:mb-32 max-w-2xl font-light">
            Infrastructure, not social media. Hiring and booking network for bars, venues, bartenders, musicians.
          </p>

          {/* CTA - Sharp White Button */}
          <a
            href="/join-venue"
            className="inline-block px-16 md:px-20 py-5 md:py-6 bg-white text-black uppercase text-sm md:text-base font-black tracking-widest rounded-none hover:bg-gray-100 transition-colors duration-300 w-fit"
          >
            Request Access
          </a>

          {/* Meta Info - Left Aligned */}
          <div className="mt-auto pt-32 md:pt-40 space-y-6 text-xs uppercase tracking-widest text-gray-400">
            <p>Limited Founding Membership</p>
            <p>First 10 Venues · First 100 Members</p>
          </div>
        </div>
      </section>

      {/* Proposition Section - Asymmetric Layout */}
      <section className="bg-black border-t border-white/10 px-8 md:px-20 lg:px-24 py-32 md:py-48">
        <div className="w-full max-w-2xl">
          {/* Headline */}
          <h2 className="text-7xl md:text-[110px] font-black uppercase tracking-tighter leading-[0.8] mb-20 md:mb-28">
            [01] Why You<br />
            Need<br />
            QCMix
          </h2>

          {/* Proposition List - Left Aligned */}
          <div className="space-y-14 md:space-y-16 text-base md:text-lg text-white uppercase tracking-wide leading-relaxed">
            <div>
              <p className="font-black text-gray-400 text-sm mb-3">001</p>
              <p className="font-light">Hire Bartenders Without Chaos</p>
            </div>
            <div>
              <p className="font-black text-gray-400 text-sm mb-3">002</p>
              <p className="font-light">Book Live Acts In Real Time</p>
            </div>
            <div>
              <p className="font-black text-gray-400 text-sm mb-3">003</p>
              <p className="font-light">Find Paid Gigs You Can Trust</p>
            </div>
            <div>
              <p className="font-black text-gray-400 text-sm mb-3">004</p>
              <p className="font-light">Network With Industry Peers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Access Section */}
      <section className="bg-black border-t border-white/10 px-8 md:px-20 lg:px-24 py-32 md:py-48">
        <div className="w-full max-w-2xl">
          {/* Headline */}
          <h2 className="text-7xl md:text-[110px] font-black uppercase tracking-tighter leading-[0.8] mb-20 md:mb-28">
            [02] Founding<br />
            Access
          </h2>

          {/* Benefits - No Cards, Just Text */}
          <div className="space-y-8 text-base md:text-lg text-white uppercase tracking-wider mb-24 md:mb-32 font-light">
            <p>✓ Lifetime discounted pricing</p>
            <p>✓ Priority placement at launch</p>
            <p>✓ Direct input on features</p>
            <p>✓ Permanent founding badge</p>
          </div>

          {/* CTA */}
          <a
            href="/join-venue"
            className="inline-block px-16 md:px-20 py-5 md:py-6 bg-white text-black uppercase text-sm md:text-base font-black tracking-widest rounded-none hover:bg-gray-100 transition-colors duration-300 w-fit"
          >
            Claim Spot
          </a>

          {/* Meta */}
          <p className="text-xs uppercase tracking-widest text-gray-600 mt-16 md:mt-20">
            Limited to the first 10 venues and 100 industry members
          </p>
        </div>
      </section>

      {/* Footer - Minimal Brutalist */}
      <footer className="bg-black border-t border-white/10 px-8 md:px-20 lg:px-24 py-20 md:py-28">
        <div className="w-full flex flex-col md:flex-row items-start justify-between max-w-5xl mb-20 md:mb-28">
          {/* Logo Left */}
          <img
            src="/WhiteLogoTrans.png"
            alt="QCMix"
            className="h-14 md:h-16 mb-12 md:mb-0"
          />

          {/* Links Right */}
          <div className="flex gap-16 text-xs uppercase tracking-widest text-gray-500">
            <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
            <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-20 md:pt-28">
          <p className="text-xs uppercase tracking-widest text-gray-600">
            © QCMix 2026 · Quad Cities, IA
          </p>
        </div>
      </footer>
    </main>
  );
}