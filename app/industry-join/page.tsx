'use client';

import { setRoleAction } from "./actions";
import Link from "next/link";

export default function IndustryJoinPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Welcome Back</div>
          <h1 className="hero-title">
            Select Your <span className="gradient-text">Role</span>
          </h1>
          <p className="hero-description">
            Choose how you participate in the Quad Cities nightlife scene.<br />
            You can manage multiple roles from your dashboard.
          </p>
        </div>
      </section>

      {/* Role Selection Form */}
      <section className="py-20 px-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-12 backdrop-blur-md">
            <form action={setRoleAction} className="space-y-8">
              <div>
                <label className="block text-lg font-semibold mb-4">Select Your Primary Role</label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="patron"
                      name="role"
                      value="patron"
                      defaultChecked
                      className="w-5 h-5 accent-qc-primary"
                    />
                    <label htmlFor="patron" className="ml-3 cursor-pointer text-white">
                      Music & Nightlife Enthusiast
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="owner"
                      name="role"
                      value="owner_manager"
                      className="w-5 h-5 accent-qc-primary"
                    />
                    <label htmlFor="owner" className="ml-3 cursor-pointer text-white">
                      Bar Owner / Management
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bartender"
                      name="role"
                      value="bartender"
                      className="w-5 h-5 accent-qc-primary"
                    />
                    <label htmlFor="bartender" className="ml-3 cursor-pointer text-white">
                      Professional Bartender
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="worker"
                      name="role"
                      value="bar_worker"
                      className="w-5 h-5 accent-qc-primary"
                    />
                    <label htmlFor="worker" className="ml-3 cursor-pointer text-white">
                      Bar Support Staff
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="musician"
                      name="role"
                      value="musician"
                      className="w-5 h-5 accent-qc-primary"
                    />
                    <label htmlFor="musician" className="ml-3 cursor-pointer text-white">
                      Musician / Artist
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="distributor"
                      name="role"
                      value="distributor"
                      className="w-5 h-5 accent-qc-primary"
                    />
                    <label htmlFor="distributor" className="ml-3 cursor-pointer text-white">
                      Industry Partner / Distributor
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-4">Account Status</label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="unverified"
                      name="verification"
                      value="unverified"
                      defaultChecked
                      className="w-5 h-5 accent-qc-primary"
                    />
                    <label htmlFor="unverified" className="ml-3 cursor-pointer text-white">
                      <span className="font-medium">Unverified</span>
                      <span className="block text-white/60 text-sm">Basic access</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="verified"
                      name="verification"
                      value="verified"
                      className="w-5 h-5 accent-qc-primary"
                    />
                    <label htmlFor="verified" className="ml-3 cursor-pointer text-white">
                      <span className="font-medium">Verified</span>
                      <span className="block text-white/60 text-sm">Full access</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button 
                  type="submit" 
                  className="w-full px-8 py-3 bg-gradient-to-r from-qc-primary to-qc-orange text-white font-semibold rounded-full hover:shadow-lg hover:shadow-qc-primary/40 transition-all"
                >
                  Continue to Dashboard
                </button>
                <Link 
                  href="/" 
                  className="block w-full px-8 py-3 border border-white/20 text-white font-semibold rounded-full text-center hover:bg-white/5 transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </form>

            <div className="mt-8 p-4 bg-qc-primary/10 border border-qc-primary/20 rounded-xl">
              <p className="text-sm text-white/80">
                <span className="font-semibold text-qc-primary">💡 Pro tip:</span> You can add and manage multiple roles from your dashboard. Start with your primary role and expand as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
