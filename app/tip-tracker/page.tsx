
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
    <div className="bg-white min-h-screen">
      <section className="bg-indigo-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-indigo-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Coming Soon</span>
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
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
                  <p className="text-gray-600">We'll notify you as soon as the pilot program begins. Thank you for your interest in QCmix.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h3>
                  <p className="text-gray-600 mb-8">Be the first to test the Tip Tracker in the Quad Cities.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Primary Role</label>
                      <select 
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                      >
                        <option value="bartender">Bartender</option>
                        <option value="server">Server</option>
                        <option value="venue-owner">Venue Owner</option>
                        <option value="musician">Musician</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={wantsEarlyAccess}
                        onChange={(e) => setWantsEarlyAccess(e.target.checked)}
                        className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500" 
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">I'd like early access to the pilot program</span>
                    </label>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-indigo-600 text-white font-black py-4 rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transform transition-all active:scale-[0.98] disabled:opacity-50"
                    >
                      {loading ? 'Submitting...' : 'Join the Waitlist'}
                    </button>
                    
                    <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold">
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
