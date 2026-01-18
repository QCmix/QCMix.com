"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from '../../firebase/config';
import { UserRole } from '../../types';

export default function RegisterPage() {
  const [role, setRole] = useState<UserRole>('bartender');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createUserProfile = async (uid: string, email: string, name: string, role: UserRole) => {
    await setDoc(doc(db, 'users', uid), {
      uid,
      email,
      name,
      role,
      pro: false,
      createdAt: serverTimestamp(),
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await createUserProfile(user.uid, email, name, role);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setLoading(true);
    setError('');
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      await createUserProfile(user.uid, user.email || '', user.displayName || 'User', role);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Google registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      {/* Hero Section */}
      <section className="hero pt-20">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Join the Scene</div>
          <h1 className="hero-title">
            Create Your <span className="gradient-text">QCMix</span> Account
          </h1>
          <p className="hero-description">
            Connect with venues, artists, and the Quad Cities nightlife community
          </p>
        </div>
      </section>

      {/* Register Form */}
      <section className="py-20 px-16 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <form className="space-y-6" onSubmit={handleRegister}>
              {error && (
                <div className="p-3 bg-qc-primary/10 text-qc-primary text-sm rounded-lg border border-qc-primary/20">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-white mb-3">Select your role</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['bartender', 'venue', 'musician'] as UserRole[]).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-3 px-2 text-xs font-bold rounded-lg border transition-all uppercase tracking-wider capitalize ${
                        role === r 
                          ? 'bg-gradient-to-r from-qc-primary to-qc-orange text-white border-qc-primary' 
                          : 'bg-white/5 text-white/60 border-white/10 hover:border-qc-primary/30'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-qc-primary/50 focus:border-qc-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-qc-primary/50 focus:border-qc-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-qc-primary/50 focus:border-qc-primary/50 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-gradient-to-r from-qc-primary to-qc-orange text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-qc-primary/40 disabled:opacity-50 transition-all"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black text-white/60">Or sign up with</span>
                </div>
              </div>

              <button
                onClick={handleGoogleRegister}
                className="w-full mt-4 inline-flex justify-center py-3 px-4 border border-white/10 rounded-lg bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
            </div>
            
            <p className="mt-6 text-center text-sm text-white/60">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-qc-primary hover:text-qc-orange transition-colors">Log in</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}