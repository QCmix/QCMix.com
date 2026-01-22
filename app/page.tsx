"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

/**
 * QCMIX — CANONICAL EDITORIAL HOME (V5.0)
 * Fixed: Collision/Overlapping between fixed masthead and hero headline.
 * Updated: Increased top safety margin and adjusted vertical alignment.
 */

const LandingPage = () => {
  const [showAccessModal, setShowAccessModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden flex flex-col">
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-2 left-2 z-[9999] bg-red-600 text-white text-xs font-mono px-2 py-1 tracking-wider">
          DEV: Home Mounted
        </div>
      )}
      {/* --------------------------------------------------
        NAVIGATION / MASTHEAD (Fixed Layer)
        --------------------------------------------------
      */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 lg:px-20 flex justify-between items-start pointer-events-none">
        <div className="flex flex-col gap-1 pointer-events-auto">
          <div className="w-28 md:w-32 lg:w-40">
            <img
              src="/WhiteLogoTrans.png"
              alt="QCMix"
              className="w-full h-auto object-contain"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.display = 'none';
                const span = document.createElement('span');
                span.className = 'text-xl font-black tracking-tighter uppercase block';
                span.innerText = 'QCMIX';
                img.parentElement?.prepend(span);
              }}
            />
          </div>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gray-500 mt-1 font-mono">
            EST. 2026 // QC
          </span>
        </div>

        <div className="pointer-events-auto">
          <button
            onClick={() => setShowAccessModal(true)}
            className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors pt-2 font-mono"
          >
            <span className="md:hidden">LOGIN</span>
            <span className="hidden md:inline">Operational Registry // Login</span>
          </button>
        </div>
      </nav>

      {/* --------------------------------------------------
        HERO SECTION
        Fixed safety-margin to prevent overlap with logo/nav.
        --------------------------------------------------
      */}
      <header className="relative w-full min-h-screen flex flex-col px-6 md:px-12 lg:px-20">
        {/* Background Atmosphere */}
        <div className="fixed inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-30 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
        </div>

        {/* Hero Content - Added pt-48 to clear navigation safety zone */}
        <div className="relative z-10 w-full mt-auto mb-16 md:mb-24 lg:mb-32 pt-48">
          <h1 className="font-black uppercase tracking-tighter leading-[0.85] text-white text-[15vw] md:text-[11vw] lg:text-[10vw] mb-12">
            <span className="block">QUAD CITIES</span>
            <span className="block text-gray-500">NIGHTLIFE</span>
            <span className="block">OPERATING</span>
            <span className="block">SYSTEM</span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-snug font-light uppercase tracking-widest mb-10">
                Infrastructure, not social media. <br className="hidden md:block" />
                The private network for the industry.
              </p>
              <button
                onClick={() => setShowAccessModal(true)}
                className="w-full md:w-auto bg-white text-black px-12 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-gray-200 transition-all active:scale-95"
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
        </div>
      </header>

      {/* --------------------------------------------------
        EDITORIAL MANIFESTO
        --------------------------------------------------
      */}
      <section className="relative z-20 bg-black border-t border-white/10 px-6 md:px-12 lg:px-20 py-24 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">[ 01 ] The Mission</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
              Stop hiring <br /> from DMs.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-gray-500 text-lg font-light leading-relaxed">
              <p>
                Running a venue is hard enough without sifting through unprofessional messages and unreliable staff. Social media is for promotion.
                QCMix is the professional infrastructure layer.
              </p>
              <p className="text-white">
                We are building a closed loop for the top of the market. The venues that pay on time. The bartenders who know their craft. This is not for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
        FOOTER
        --------------------------------------------------
      */}
      <footer className="relative z-20 bg-black border-t border-white/5 px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-black uppercase tracking-tighter text-white">QCMIX</span>
            <span className="text-[9px] text-gray-700 uppercase tracking-[0.4em] font-mono">Built for the QC // Institutional Infrastructure</span>
          </div>
          <div className="flex flex-wrap gap-8 text-[10px] text-gray-600 uppercase tracking-widest font-mono">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-gray-800 font-mono">
          © 2026 QCMIX INFRASTRUCTURE. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* ACCESS MODAL */}
      {showAccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setShowAccessModal(false)} />
          <div className="relative bg-black border border-white/10 p-8 md:p-12 max-w-lg w-full">
            <button onClick={() => setShowAccessModal(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white">
              <X size={20} />
            </button>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-white">Request Access</h3>
            <p className="text-gray-500 text-[10px] mb-10 font-mono tracking-tight uppercase">Private Beta Registry // Registry Node 0.1</p>
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setShowAccessModal(false);
              }}
            >
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-mono text-left">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors rounded-none"
                  placeholder="IDENTIFY..."
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-mono text-left">Organization</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors rounded-none"
                  placeholder="ENTITY..."
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-mono text-left">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors rounded-none"
                  placeholder="COMMUNICATION..."
                  required
                />
              </div>
              <button type="submit" className="w-full bg-white text-black py-5 font-black uppercase tracking-[0.3em] hover:bg-gray-200 transition-all active:scale-95">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;