// app/join/patron/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LoadingSpinner from '@/components/LoadingSpinner';

const steps = [
  { id: 1, title: 'Basic Info', description: 'Who you are' },
  { id: 2, title: 'Interests', description: 'Your scene' },
  { id: 3, title: 'Review', description: 'Confirm details' },
];

export default function PatronRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    
    interests: [] as string[],
    favoriteVenueTypes: [] as string[],
    emailNotifications: false,
    
    agreeToTerms: false,
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: string, item: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).includes(item)
        ? (prev[field as keyof typeof prev] as string[]).filter(i => i !== item)
        : [...(prev[field as keyof typeof prev] as string[]), item],
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <main className="bg-[#08080f] min-h-screen text-white">
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/roles/The Community.jpg" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080f] via-[#08080f]/95 to-[#08080f]" />
        </div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px] -translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/join" className="hover:text-white transition-colors">Join</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/60">Community</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center text-sky-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Join the Community</h1>
              <p className="text-white/50 mt-1">Explore and support the Quad Cities nightlife</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step.id ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white' : 'bg-white/[0.04] text-white/40 border border-white/[0.06]'
                  }`}>
                    {currentStep > step.id ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : step.id}
                  </div>
                  <div className="mt-2 text-center hidden sm:block">
                    <p className={`text-sm font-medium ${currentStep >= step.id ? 'text-white' : 'text-white/40'}`}>{step.title}</p>
                    <p className="text-xs text-white/30">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-0.5 mx-4 flex-1 transition-all duration-300 ${currentStep > step.id ? 'bg-sky-600' : 'bg-white/[0.06]'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0d0d16] border border-white/[0.06] rounded-3xl p-8 md:p-12"
          >
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Basic Information</h2>
                  <p className="text-white/50">Join the QCMix community.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">City *</label>
                  <select
                    value={formData.city}
                    onChange={(e) => updateFormData('city', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0d0d16]">Select city</option>
                    <option value="davenport" className="bg-[#0d0d16]">Davenport, IA</option>
                    <option value="bettendorf" className="bg-[#0d0d16]">Bettendorf, IA</option>
                    <option value="rock-island" className="bg-[#0d0d16]">Rock Island, IL</option>
                    <option value="moline" className="bg-[#0d0d16]">Moline, IL</option>
                    <option value="east-moline" className="bg-[#0d0d16]">East Moline, IL</option>
                    <option value="other" className="bg-[#0d0d16]">Other QC Area</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Your Interests</h2>
                  <p className="text-white/50">What brings you to the scene?</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">What are you interested in?</label>
                  <div className="flex flex-wrap gap-3">
                    {['Live Music', 'Craft Cocktails', 'Craft Beer', 'Nightlife', 'Trivia Nights', 'Karaoke', 'Sports Bars', 'Dancing', 'Outdoor Patios'].map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleArrayItem('interests', interest)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          formData.interests.includes(interest)
                            ? 'bg-sky-600 text-white'
                            : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-sky-500/30'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">Favorite venue types</label>
                  <div className="flex flex-wrap gap-3">
                    {['Dive Bars', 'Cocktail Bars', 'Breweries', 'Music Venues', 'Nightclubs', 'Restaurant Bars'].map((venue) => (
                      <button
                        key={venue}
                        type="button"
                        onClick={() => toggleArrayItem('favoriteVenueTypes', venue)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          formData.favoriteVenueTypes.includes(venue)
                            ? 'bg-sky-600 text-white'
                            : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-sky-500/30'
                        }`}
                      >
                        {venue}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div>
                    <p className="font-medium text-white">Email notifications</p>
                    <p className="text-sm text-white/40">Get updates on new venues and events</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => updateFormData('emailNotifications', !formData.emailNotifications)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${formData.emailNotifications ? 'bg-sky-600' : 'bg-white/10'}`}
                  >
                    <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${formData.emailNotifications ? 'translate-x-6' : ''}`} />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Welcome to QCMix!</h2>
                  <p className="text-white/50">You're all set to explore the scene.</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h3 className="text-sm font-medium text-white/40 mb-2">Your Profile</h3>
                    <p className="text-white font-medium">{formData.firstName} {formData.lastName}</p>
                    <p className="text-white/60 text-sm">{formData.email}</p>
                    <p className="text-white/60 text-sm">{formData.city}</p>
                  </div>

                  {formData.interests.length > 0 && (
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <h3 className="text-sm font-medium text-white/40 mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {formData.interests.map(i => (
                          <span key={i} className="px-2 py-1 text-xs rounded-full bg-sky-500/20 text-sky-300">{i}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-sky-950/50 to-blue-950/50 border border-sky-500/20">
                  <h3 className="font-semibold text-white mb-2">What's next?</h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Browse venues, events, and musicians in the Quad Cities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Follow your favorite bars and bands</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Read editorial content about the nightlife scene</span>
                    </li>
                  </ul>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/[0.04] text-sky-600 focus:ring-sky-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-white/60">
                    I agree to the <Link href="/terms" className="text-sky-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-sky-400 hover:underline">Privacy Policy</Link>.
                  </span>
                </label>
              </div>
            )}

            <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/[0.06]">
              <button
                type="button"
                onClick={handleBack}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white/60 hover:text-white transition-colors ${currentStep === 1 ? 'invisible' : ''}`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back
              </button>

              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all"
                >
                  Continue
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms || isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Community
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
