"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-white pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
              The Hub for Quad Cities{" "}
              <span className="text-indigo-600">Bartending & Music</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              QCmix connects local industry professionals, provides essential
              tools for bartenders, and helps venues find the perfect talent.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/register"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
              >
                Join the Mix
              </Link>
              <Link
                href="/tip-tracker"
                className="bg-white text-indigo-600 border-2 border-indigo-50 px-8 py-4 rounded-xl text-lg font-bold hover:border-indigo-100 transition-all transform hover:-translate-y-1"
              >
                Explore Tip App
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
