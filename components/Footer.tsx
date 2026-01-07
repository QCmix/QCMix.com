
"use client";

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black text-white tracking-tighter">QC<span className="text-indigo-400">mix</span></span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Empowering the Quad Cities service and music industry. Track tips, build your network, and showcase your talent.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-indigo-400">Home</Link></li>
              <li><Link href="/tip-tracker" className="hover:text-indigo-400">Tip App</Link></li>
              <li><Link href="/login" className="hover:text-indigo-400">Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-indigo-400">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
          &copy; {new Date().getFullYear()} QCmix.com. All rights reserved. Built for the Quad Cities.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
