'use client';

import React from 'react';

/**
 * QCMix - ARCHITECTURAL RECONSTRUCTION
 * This version uses "Clamp" logic to ensure that "Massive" typography 
 * never breaks the container or overlaps the branding.
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
      
      {/* SECTION 00: THE MASTHEAD HERO */}
      <section className="relative w-full min-h-screen flex flex-col">
        
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bar-interior-01.jpg"
            alt="Quad Cities bar interior"
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* CONTENT CONTAINER: Uses flex-col and justify-between to prevent overlaps */}
        <div className="relative z-10 flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-20 py-12 md:py-20">
          
          {/* TOP: BRANDING */}
          <div className="w-full">
            <img
              src="/WhiteLogoTrans.png"
              alt="QCMix"
              className="h-12 md:h-16 lg:h-20 object-contain"
            />
            <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 font-mono mt-4">
              Registry // Quad Cities Regional
            </p>
          </div>
          
          {/* MIDDLE: THE HEADLINE
              'text-[clamp(...)]' ensures the text scales between a min and max size
              so it NEVER gets big enough to break the layout. */}
          <div className="w-full my-auto py-12">
            <h1 className="text-[clamp(3rem,12vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] text-white">
              <span className="block">Operating</span>
              <span className="block text-gray-600">System For</span>
              <span className="block">Nightlife</span>
            </h1>
          </div>

          {/* BOTTOM: ACTIONS & INFO */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <div className="max-w-xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 uppercase tracking-wide leading-tight font-light mb-8">
                Infrastructure, not social media. <br className="hidden md:block"/>
                A private network for the industry.
              </p>
              <a
                href="/join-venue"
                className="inline-block px-12 py-5 bg-white text-black uppercase text-sm font-black tracking-widest hover:bg-gray-200 transition-all"
              >
                Request Access
              </a>
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono text-left md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6">
              <p>Status: Founding Phase</p>
              <p>Network: 10 Venues / 100 Members</p>
              <p className="text-gray-700 mt-2">©2026 QCMIX INFRA</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: THE REGISTRY DETAILS */}
      <section className="bg-black border-t border-white/10 px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-20">
            <span className="text-gray-600 text-xl font-mono block mb-4">[01] WHY QCMIX</span>
            The End of <br/> Unprofessionalism.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { id: "01", t: "Vetted Staffing", d: "Hire bartenders from a central, verified registry instead of DMs." },
              { id: "02", t: "Technical Riders", d: "Book acts with verified tech requirements and attendance data." },
              { id: "03", t: "Direct Settlement", d: "Automated payments and contract enforcement for every gig." },
              { id: "04", t: "Private Network", d: "A high-signal environment for regional industry peers." }
            ].map((item) => (
              <div key={item.id} className="border-t border-white/10 pt-8">
                <p className="font-mono text-gray-600 text-xs mb-4">{item.id}</p>
                <h3 className="text-xl font-bold uppercase mb-2">{item.t}</h3>
                <p className="text-gray-500 font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}