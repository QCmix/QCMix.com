'use client';

import React from 'react';

/**
 * QCMix - SYSTEM REBOOT
 * Resolved: Overlap, Responsive Overflow, and Branding Collision.
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
      
      {/* FIXED BRANDING: Stays at top, never gets pushed by text */}
      <nav className="fixed top-0 left-0 w-full z-50 p-8 md:p-12 lg:p-20 pointer-events-none">
        <div className="pointer-events-auto">
          <img
            src="/WhiteLogoTrans.png"
            alt="QCMix"
            className="h-10 md:h-14 lg:h-16 object-contain"
          />
          <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 font-mono mt-4">
            Regional Registry // QC.IA
          </p>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col justify-center px-8 md:px-12 lg:px-20 pt-40">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bar-interior-01.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-[1440px]">
          
          {/* THE HEADLINE: Scaled to fit screen width exactly */}
          <h1 className="text-[14vw] md:text-[11vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
            Operating<br />
            <span className="text-gray-700">System For</span><br />
            Nightlife
          </h1>

          {/* SUBTEXT AND CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-12 md:gap-24">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 uppercase tracking-widest leading-tight max-w-xl font-light">
              Infrastructure, not social media. <br/>
              A private network for the industry.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="/join-venue"
                className="inline-block px-12 py-5 bg-white text-black uppercase text-sm font-black tracking-widest hover:bg-gray-200 transition-all"
              >
                Request Access
              </a>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 font-mono">
                Registry: Phase I [ 10 Venues ]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="relative z-10 bg-black border-t border-white/10 px-8 md:px-12 lg:px-20 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-20">
              <span className="text-gray-600 text-xl font-mono block mb-6">[01] WHY QCMIX</span>
              The end of <br/> unprofessional <br/> operations.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { t: "Vetted Staffing", d: "Hire bartenders from a central registry instead of DMs." },
                { t: "Technical Riders", d: "Verified tech requirements and attendance data." },
                { t: "Direct Settlement", d: "Automated payments and contract enforcement." },
                { t: "Private Network", d: "High-signal environment for regional industry peers." }
              ].map((item, i) => (
                <div key={i} className="border-t border-white/10 pt-8">
                  <h3 className="text-xl font-bold uppercase mb-2">{item.t}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="px-8 md:px-12 lg:px-20 py-12 border-t border-white/5 text-[9px] uppercase tracking-[0.4em] text-gray-700 font-mono">
        © QCMix 2026 // Built for the Quad Cities
      </footer>
    </main>
  );
}