'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

/**
 * QCMIX — CANONICAL EDITORIAL HOME
 * Fully synchronized with clean globals.css.
 * 100% Left-aligned. Brutalist. Institutional.
 */

export default function Home() {
  const [showAccessModal, setShowAccessModal] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black antialiased overflow-x-hidden">
      
      {/* 1. ATMOSPHERE LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="/hero-bar-interior-01.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop'; }}
        />
        {/* Deep Black Vignette for Editorial Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* 2. FIXED MASTHEAD */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 lg:px-20 flex justify-between items-start pointer-events-none">
        <div className="flex flex-col gap-1 pointer-events-auto">
          <img 
            src="/WhiteLogoTrans.png" 
            alt="QCMix" 
            className="w-[120px] md:w-[140px] h-auto object-contain"
            onError={(e) => { 
              e.currentTarget.style.display = 'none';
              const span = document.createElement('span');
              span.className = 'text-2xl font-black uppercase tracking-tighter';
              span.innerText = 'QCMIX';
              e.currentTarget.parentNode?.prepend(span);
            }}
          />
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-mono">
            EST. 2026 // QUAD CITIES
          </span>
        </div>
        <div className="hidden md:block pointer-events-auto">
          <button 
            onClick={() => setShowAccessModal(true)}
            className="text-[10px] uppercase tracking-[0.3em] text-gray-700 hover:text-white transition-colors font-mono"
          >
            Operational Registry // Phase 01
          </button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative z-10 min-h-screen flex flex-col px-6 md:px-12 lg:px-20 pt-48 pb-20">
        
        {/* Massive Editorial Headline */}
        <div className="flex-grow flex flex-col justify-center">
          <h1 className="font-black uppercase tracking-tighter text-white leading-[0.82] text-[15vw] md:text-[11vw] lg:text-[10vw]">
            <span className="block">Operating</span>
            <span className="block text-gray-800">System For</span>
            <span className="block">Nightlife</span>
          </h1>
        </div>

        {/* Hero Actions & Metadata */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-12 w-full">
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl text-gray-400 leading-snug font-light uppercase tracking-widest mb-10">
              Infrastructure, not social media. <br/>
              The private network for the industry.
            </p>
            <button 
              onClick={() => setShowAccessModal(true)}
              className="inline-block bg-white text-black px-12 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-gray-200 transition-all active:scale-95"
            >
              Request Access
            </button>
          </div>
          <div className="hidden lg:flex flex-col text-[10px] uppercase tracking-[0.4em] text-gray-600 font-mono text-right space-y-1">
            <p>01 — Verified Venue Registry</p>
            <p>02 — Professional Staffing Nodes</p>
            <p>03 — Settlement Infrastructure</p>
          </div>
        </div>
      </section>

      {/* 4. MANIFESTO SECTION */}
      <section className="relative z-20 bg-black border-t border-white/10 px-6 md:px-12 lg:px-20 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-3">
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
              [ 01 ] The Mission
            </span>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-16">
              Stop hiring <br/> from DMs.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-gray-500 text-lg font-light leading-relaxed">
              <div className="space-y-6">
                <p>
                  Running a venue is hard enough without sifting through unprofessional messages and unreliable staff. 
                  Social media is for promotion. QCMix is the professional infrastructure layer.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-white">
                  We are building a closed loop for the top of the market. The venues that pay on time. 
                  The bartenders who know their craft. This is not for everyone.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INSTITUTIONAL FOOTER */}
      <footer className="relative z-20 bg-black border-t border-white/5 px-6 md:px-12 lg:px-20 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-black uppercase tracking-tighter">QCMix</span>
            <span className="text-[10px] text-gray-700 uppercase tracking-[0.4em] font-mono">
              Operational Gatekeeping Active // Built for the QC
            </span>
          </div>
          <div className="flex gap-12 text-[10px] text-gray-600 uppercase tracking-widest font-mono">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/5 text-[9px] uppercase tracking-[0.5em] text-gray-800 font-mono">
          © 2026 QCMIX INFRASTRUCTURE. DATA ENCRYPTION ENABLED.
        </div>
      </footer>

      {/* ACCESS MODAL */}
      {showAccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setShowAccessModal(false)} />
          <div className="relative bg-black border border-white/10 p-8 md:p-12 max-w-lg w-full">
            <button onClick={() => setShowAccessModal(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Request Access</h3>
            <p className="text-gray-500 text-sm mb-10 font-mono tracking-tight uppercase">Private Beta Registry // Quad Cities</p>
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setShowAccessModal(false); }}>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-mono">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="IDENTIFY..." required />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-mono">Venue / Organization</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="ENTITY..." required />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-mono">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="COMMUNICATION..." required />
              </div>
              <button type="submit" className="w-full bg-white text-black py-5 font-black uppercase tracking-[0.3em] hover:bg-gray-200 transition-all active:scale-95">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}