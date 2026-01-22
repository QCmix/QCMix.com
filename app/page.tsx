'use client';

import React from 'react';

/**
 * QCMix CANONICAL PAGE
 * Style: Brutalist Editorial
 * Rules: Strict Left-Align, Massive Typography, 0.8 Leading, Institutional Tone.
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* SECTION 00: HERO / MASTHEAD */}
      <section className="relative w-full min-h-screen flex flex-col justify-end">
        
        {/* ATMOSPHERE LAYER */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bar-interior-01.jpg"
            alt="Quad Cities bar interior"
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
          />
          {/* BRUTALIST VIGNETTE: Strong left-side darkness for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 flex flex-col items-start">
          
          {/* INSTITUTIONAL BRANDING */}
          <div className="mb-24 md:mb-32">
            <img
              src="/WhiteLogoTrans.png"
              alt="QCMix"
              className="h-16 md:h-24 object-contain"
            />
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-mono mt-4">
              Quad Cities — Regional Nightlife Registry
            </p>
          </div>
          
          {/* THE MASTHEAD HEADLINE: Dynamic scaling ensures no overflow */}
          <h1 className="text-[16vw] md:text-[12vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12 max-w-6xl">
            Operating<br />
            <span className="text-gray-600">System for</span><br />
            Nightlife
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end gap-12 md:gap-24 w-full">
            <p className="text-lg md:text-2xl text-white uppercase tracking-wider leading-relaxed max-w-xl font-light">
              Infrastructure, not social media. <br/>
              A private network for bars, venues, <br/>
              bartenders, and musicians.
            </p>

            <div className="flex flex-col gap-8">
              <a
                href="/join-venue"
                className="inline-block px-12 py-5 bg-white text-black uppercase text-sm font-black tracking-widest rounded-none hover:bg-gray-200 transition-colors duration-300 w-fit"
              >
                Request Access
              </a>
              
              <div className="space-y-1 text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                <p>Status: Limited Founding Phase</p>
                <p>Registry: 10 Venues / 100 Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: THE PROPOSITION (Asymmetric) */}
      <section className="bg-black border-t border-white/10 px-6 md:px-12 lg:px-20 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8">
            <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-20">
              <span className="text-gray-600 block text-2xl md:text-4xl mb-4 font-mono tracking-widest">[01]</span>
              Why You<br />
              Need<br />
              QCMix
            </h2>

            {/* LIST: No cards, just pure typographic structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
              {[
                { id: "001", title: "Chaotic Hiring", body: "Stop sifting through Instagram DMs. Hire vetted bartenders from a central registry." },
                { id: "002", title: "Real-Time Booking", body: "Book live acts with verified technical riders and attendance records." },
                { id: "003", title: "Trust Infrastructure", body: "Find paid gigs you can trust with automated settlement and contracts." },
                { id: "004", title: "Regional Network", body: "Connect with industry peers without the noise of public social platforms." }
              ].map((item) => (
                <div key={item.id} className="border-l border-white/10 pl-8 pb-4">
                  <p className="font-mono text-gray-600 text-xs mb-4 uppercase tracking-[0.3em]">{item.id}</p>
                  <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 border-l border-white/5">
            {/* Structural Void: Signals restraint/luxury */}
          </div>
        </div>
      </section>

      {/* SECTION 02: FOUNDING ACCESS */}
      <section className="bg-black border-t border-white/10 px-6 md:px-12 lg:px-20 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-20">
              <span className="text-gray-600 block text-2xl md:text-4xl mb-4 font-mono tracking-widest">[02]</span>
              Founding<br />
              Access
            </h2>

            <div className="space-y-12 mb-24 max-w-xl">
              <div className="flex items-start gap-6 group">
                <span className="text-white group-hover:text-gray-500 transition-colors">✓</span>
                <p className="text-xl md:text-2xl uppercase tracking-widest font-light">Lifetime discounted pricing</p>
              </div>
              <div className="flex items-start gap-6 group">
                <span className="text-white group-hover:text-gray-500 transition-colors">✓</span>
                <p className="text-xl md:text-2xl uppercase tracking-widest font-light">Priority placement at launch</p>
              </div>
              <div className="flex items-start gap-6 group">
                <span className="text-white group-hover:text-gray-500 transition-colors">✓</span>
                <p className="text-xl md:text-2xl uppercase tracking-widest font-light">Direct input on technical features</p>
              </div>
            </div>

            <a
              href="/join-venue"
              className="inline-block px-16 py-6 bg-white text-black uppercase text-base font-black tracking-widest rounded-none hover:bg-gray-200 transition-all duration-300"
            >
              Claim Spot
            </a>

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mt-16 font-mono">
              Operational Gatekeeping: Subject to manual board review.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 px-6 md:px-12 lg:px-20 py-24">
        <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12">
          <img
            src="/WhiteLogoTrans.png"
            alt="QCMix"
            className="h-12 opacity-50 hover:opacity-100 transition-opacity"
          />

          <div className="flex gap-16 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-mono">
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors text-gray-800">Operator Terms</a>
          </div>
        </div>

        <div className="flex justify-between items-end border-t border-white/5 pt-12 text-[10px] uppercase tracking-[0.4em] text-gray-700 font-mono">
          <p>© QCMix 2026 · Quad Cities Infrastructure Layer</p>
          <p>Built for the 10%</p>
        </div>
      </footer>
    </main>
  );
}