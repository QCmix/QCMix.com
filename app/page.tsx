'use client';

import React from 'react';

/**
 * QCMix - TAILWIND 4.0 COMPATIBLE PRODUCTION BUILD
 * * FIXES: 
 * 1. Line-height compression (forces the 0.8 leading).
 * 2. Logo collision (Fixes logo to top-left, adds safety padding to hero).
 * 3. Responsive scaling (Uses 'vw' to ensure text is huge but fits all screens).
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
      
      {/* 00. INSTITUTIONAL BRANDING (FIXED TOP) */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 lg:p-16 pointer-events-none">
        <div className="pointer-events-auto">
          {/* LOGO ASSET */}
          <img
            src="/WhiteLogoTrans.png"
            alt="QCMix"
            className="h-10 md:h-14 lg:h-16 object-contain"
          />
          {/* SUB-BRANDING */}
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-mono mt-4 leading-none">
            Registry // Quad Cities Regional
          </p>
        </div>
      </nav>

      {/* 01. HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-40 md:pt-32">
        
        {/* ATMOSPHERE LAYER (BACKGROUND) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bar-interior-01.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-30 grayscale contrast-125"
          />
          {/* VIGNETTE: Strong left-side darkness for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* CONTENT AREA */}
        <div className="relative z-10 w-full max-w-[1600px]">
          
          {/* THE HEADLINE: 
              Using 'vw' for size so it scales perfectly with the screen.
              Using inline style for line-height because Tailwind 4 handles 'leading' differently.
          */}
          <h1 
            className="text-[15vw] md:text-[11vw] lg:text-[10vw] font-black uppercase tracking-tighter mb-12 text-white"
            style={{ 
              lineHeight: '0.8', 
              letterSpacing: '-0.05em' 
            }}
          >
            Operating<br />
            <span className="text-gray-700">System For</span><br />
            Nightlife
          </h1>

          {/* SUBTEXT & PRIMARY CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-12 md:gap-24">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 uppercase tracking-widest leading-tight max-w-xl font-light">
              Infrastructure, not social media. <br className="hidden md:block"/>
              A private network for the industry.
            </p>

            <div className="flex flex-col gap-8">
              <a
                href="/join-venue"
                className="inline-block px-14 py-6 bg-white text-black uppercase text-sm font-black tracking-[0.2em] rounded-none hover:bg-gray-200 transition-all duration-300 w-fit"
              >
                Request Access
              </a>
              
              <div className="flex flex-col text-[10px] uppercase tracking-[0.3em] text-gray-600 font-mono space-y-1">
                <span>Phase I // Founding Tiers</span>
                <span>Active Nodes: 10 Venues / 100 Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. PROPOSITION SECTION */}
      <section className="relative z-10 bg-black border-t border-white/10 px-6 md:px-12 lg:px-20 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-9">
            {/* SECTION HEADLINE */}
            <h2 
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-20"
              style={{ lineHeight: '0.85' }}
            >
              <span className="text-gray-600 text-xl font-mono block mb-8 tracking-[0.5em]">[ 01 ] Why QCMix</span>
              The End of <br/> Unprofessional <br/> Nightlife Ops.
            </h2>

            {/* BENEFITS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              {[
                { t: "Vetted Staffing", d: "Hire bartenders from a central registry instead of chaotic Instagram DMs." },
                { t: "Verified Riders", d: "Talent profiles with technical riders and real attendance data." },
                { t: "Direct Settlement", d: "Automated payments and contract enforcement for every booking." },
                { t: "Regional Network", d: "A high-signal, private infrastructure layer for the Quad Cities." }
              ].map((item, i) => (
                <div key={i} className="border-t border-white/10 pt-10">
                  <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">{item.t}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-lg">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03. FOOTER */}
      <footer className="relative z-10 bg-black border-t border-white/5 px-6 md:px-12 lg:px-20 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex flex-col gap-4">
          <img src="/WhiteLogoTrans.png" alt="QCMix" className="h-10 opacity-40 grayscale" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-800 font-mono">
            Institutional Registry Layer // Built for the QC
          </p>
        </div>
        
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-mono">
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
        </div>
      </footer>

      {/* COPYRIGHT OVERLAY */}
      <div className="px-6 md:px-12 lg:px-20 pb-12 bg-black text-center md:text-left">
         <p className="text-[9px] uppercase tracking-[0.5em] text-gray-900 font-mono">
           © QCMix 2026 // Operational Gatekeeping Enabled
         </p>
      </div>
    </main>
  );
}