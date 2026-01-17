
"use client";

import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';

export default function TipTrackerPage() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('bartender');
  const [wantsEarlyAccess, setWantsEarlyAccess] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'earlyAccess'), {
        email,
        role,
        wantsEarlyAccess,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting early access:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#08080f] min-h-screen">
      <section className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 border border-amber-500/30">Coming Soon</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            Private Tip Tracking for <br/> Quad Cities Bartenders
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Stop using napkins and notes. We're building a tool specifically for QC service professionals to track their true earnings privately.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Planned Features (Pilot)</h2>
              <ul className="space-y-4">
                {[
                  "Daily cash tips tracking",
                  "Daily card tips tracking",
                  "Hours worked entry",
                  "Optional sales tracking",
                  "True hourly wage calculation",
                  "Weekly & monthly summaries"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-indigo-500 mt-1"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy & Trust</h2>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
                <div className="flex gap-4">
                  <i className="fa-solid fa-shield-halved text-indigo-600 text-xl mt-1"></i>
                  <div>
                    <h3 className="font-bold text-gray-900">No employer access</h3>
                    <p className="text-sm text-gray-600">Your data is yours. Management never sees your reports.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="fa-solid fa-user-lock text-indigo-600 text-xl mt-1"></i>
                  <div>
                    <h3 className="font-bold text-gray-900">No public sharing</h3>
                    <p className="text-sm text-gray-600">We do not share your individual earnings with anyone.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <i className="fa-solid fa-database text-indigo-600 text-xl mt-1"></i>
                  <div>
                    <h3 className="font-bold text-gray-900">Bartender-owned data</h3>
                    <p className="text-sm text-gray-600">Export your data anytime. We don't sell your personal information.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky top-24 h-fit">
            <div className="bg-[#0d0d16] p-8 rounded-3xl shadow-2xl border border-white/[0.06]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-emerald-500/30">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                  <p className="text-white/60">We'll notify you as soon as the pilot program begins. Thank you for your interest in QCmix.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-2">Get Early Access</h3>
                  <p className="text-white/60 mb-8">Be the first to test the Tip Tracker in the Quad Cities.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-white/80 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@example.com"
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.06] rounded-xl focus:ring-2 focus:ring-violet-500/50 text-white placeholder-white/30 transition-all outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-white/80 mb-2">Primary Role</label>
                      <select 
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.06] rounded-xl outline-none text-white"
                      >
                        <option value="bartender" className="bg-[#0d0d16] text-white">Bartender</option>
                        <option value="server" className="bg-[#0d0d16] text-white">Server</option>
                        <option value="venue-owner" className="bg-[#0d0d16] text-white">Venue Owner</option>
                        <option value="musician" className="bg-[#0d0d16] text-white">Musician</option>
                        <option value="other" className="bg-[#0d0d16] text-white">Other</option>
                      </select>
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={wantsEarlyAccess}
                        onChange={(e) => setWantsEarlyAccess(e.target.checked)}
                        className="w-5 h-5 rounded text-violet-600 focus:ring-violet-500 bg-white/[0.04] border-white/[0.06]" 
                      />
                      <span className="text-sm text-white/70 group-hover:text-white">I'd like early access to the pilot program</span>
                    </label>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black py-4 rounded-xl shadow-lg hover:from-violet-700 hover:to-purple-700 transform transition-all active:scale-[0.98] disabled:opacity-50"
                    >
                      {loading ? 'Submitting...' : 'Join the Waitlist'}
                    </button>
                    
                    <p className="text-[10px] text-center text-white/40 uppercase tracking-widest font-bold">
                      Privacy First • local focus • no spam
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
