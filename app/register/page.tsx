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
    <div className="min-h-screen bg-[#08080f] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white tracking-tight">Create your QCmix account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#0d0d16] py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10 border border-white/[0.06]">
          <div className="mb-6">
            <label className="block text-sm font-medium text-white/80 mb-2">Select your role</label>
            <div className="grid grid-cols-3 gap-3">
              {(['bartender', 'venue', 'musician'] as UserRole[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all uppercase tracking-wider ${
                    role === r 
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-600' 
                      : 'bg-white/[0.04] text-white/60 border-white/[0.06] hover:border-violet-500/30'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            {error && <div className="p-3 bg-red-500/10 text-red-400 text-sm rounded-lg border border-red-500/20">{error}</div>}
            
            <div>
              <label className="block text-sm font-medium text-white/80">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-white/[0.06] rounded-md bg-white/[0.04] text-white placeholder-white/30 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80">Email address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-white/[0.06] rounded-md bg-white/[0.04] text-white placeholder-white/30 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-white/[0.06] rounded-md bg-white/[0.04] text-white placeholder-white/30 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:opacity-50 transition-all"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.06]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#0d0d16] text-white/60">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleRegister}
                className="w-full inline-flex justify-center py-2 px-4 border border-white/[0.06] rounded-md bg-white/[0.04] text-sm font-medium text-white/80 hover:bg-white/[0.08] transition-all"
              >
                <i className="fa-brands fa-google text-red-400 mr-2 mt-1"></i> Google
              </button>
            </div>
          </div>
          
          <p className="mt-8 text-center text-xs text-white/60">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-violet-400 hover:text-violet-300">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}