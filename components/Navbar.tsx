"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

const Navbar: React.FC = () => {
  const { user, profile } = useAuth();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-black text-indigo-600 tracking-tighter">QC<span className="text-gray-900">mix</span></span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/tip-tracker" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Tip App</Link>
              {user && (
                <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Dashboard</Link>
              )}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/profile" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                  {profile?.name || user.email}
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Log in</Link>
                <Link href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">Sign up</Link>
              </>
            )}
          </div>

          <div className="flex items-center sm:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-indigo-600 p-2"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">Home</Link>
            <Link href="/tip-tracker" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">Tip App</Link>
            {user && (
              <>
                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">Dashboard</Link>
                <Link href="/profile" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">Profile</Link>
                <button 
                  onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                  className="w-full text-left block px-3 py-2 text-base font-medium text-gray-600 hover:text-red-600"
                >
                  Logout
                </button>
              </>
            )}
            {!user && (
              <>
                <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">Log in</Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-indigo-600">Sign up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;