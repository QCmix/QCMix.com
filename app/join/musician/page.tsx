// app/join/musician/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LoadingSpinner from '@/components/LoadingSpinner';

const steps = [
  { id: 1, title: 'Artist Info', description: 'Who you are' },
  { id: 2, title: 'Music', description: 'Your sound' },
  { id: 3, title: 'Booking', description: 'Gig preferences' },
  { id: 4, title: 'Review', description: 'Confirm details' },
];

export default function MusicianRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    artistName: '',
    contactName: '',
    email: '',
    phone: '',
    city: '',
    
    genre: [] as string[],
    bandSize: '',
    yearsPerforming: '',
    equipment: '',
    
    seekingVenues: false,
    travelRadius: '',
    typicalSetLength: '',
    rateRange: '',
    
    bio: '',
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
          <Image src="/images/roles/Musicians & Bands.jpg" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080f] via-[#08080f]/95 to-[#08080f]" />
        </div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] -translate-y-1/2" />

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
            <span className="text-white/60">Musician</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center text-rose-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Join as Musician</h1>
              <p className="text-white/50 mt-1">Performing artists and working musicians</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step.id ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white' : 'bg-white/[0.04] text-white/40 border border-white/[0.06]'
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
                  <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${currentStep > step.id ? 'bg-rose-600' : 'bg-white/[0.06]'}`} />
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
                  <h2 className="text-2xl font-bold mb-2">Artist Information</h2>
                  <p className="text-white/50">Tell us about you or your band.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Artist/Band Name *</label>
                  <input
                    type="text"
                    value={formData.artistName}
                    onChange={(e) => updateFormData('artistName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all"
                    placeholder="The River City Band"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Contact Name *</label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => updateFormData('contactName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">City *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all appearance-none cursor-pointer"
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

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all"
                    placeholder="artist@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Your Music</h2>
                  <p className="text-white/50">Tell us about your sound and setup.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">Genre(s) *</label>
                  <div className="flex flex-wrap gap-3">
                    {['Rock', 'Country', 'Blues', 'Jazz', 'Folk', 'Indie', 'Cover Band', 'Acoustic', 'Electronic', 'Hip Hop', 'Metal', 'Pop'].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => toggleArrayItem('genre', g)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          formData.genre.includes(g)
                            ? 'bg-rose-600 text-white'
                            : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-rose-500/30'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Band Size *</label>
                    <select
                      value={formData.bandSize}
                      onChange={(e) => updateFormData('bandSize', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d0d16]">Select</option>
                      <option value="solo" className="bg-[#0d0d16]">Solo</option>
                      <option value="duo" className="bg-[#0d0d16]">Duo</option>
                      <option value="trio" className="bg-[#0d0d16]">Trio</option>
                      <option value="4-piece" className="bg-[#0d0d16]">4-Piece</option>
                      <option value="5+" className="bg-[#0d0d16]">5+ Members</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Years Performing</label>
                    <select
                      value={formData.yearsPerforming}
                      onChange={(e) => updateFormData('yearsPerforming', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d0d16]">Select</option>
                      <option value="0-1" className="bg-[#0d0d16]">Less than 1 year</option>
                      <option value="1-3" className="bg-[#0d0d16]">1-3 years</option>
                      <option value="3-5" className="bg-[#0d0d16]">3-5 years</option>
                      <option value="5-10" className="bg-[#0d0d16]">5-10 years</option>
                      <option value="10+" className="bg-[#0d0d16]">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Equipment/PA</label>
                  <select
                    value={formData.equipment}
                    onChange={(e) => updateFormData('equipment', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0d0d16]">Select</option>
                    <option value="full-pa" className="bg-[#0d0d16]">Full PA System</option>
                    <option value="partial" className="bg-[#0d0d16]">Partial Equipment</option>
                    <option value="none" className="bg-[#0d0d16]">Need Venue PA</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Booking Preferences</h2>
                  <p className="text-white/50">What kind of gigs are you looking for?</p>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div>
                    <p className="font-medium text-white">Actively seeking venues</p>
                    <p className="text-sm text-white/40">Let venues know you're available to book</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => updateFormData('seekingVenues', !formData.seekingVenues)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${formData.seekingVenues ? 'bg-rose-600' : 'bg-white/10'}`}
                  >
                    <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${formData.seekingVenues ? 'translate-x-6' : ''}`} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Travel Radius</label>
                    <select
                      value={formData.travelRadius}
                      onChange={(e) => updateFormData('travelRadius', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d0d16]">Select</option>
                      <option value="qc-only" className="bg-[#0d0d16]">QC Only</option>
                      <option value="30-miles" className="bg-[#0d0d16]">Within 30 miles</option>
                      <option value="50-miles" className="bg-[#0d0d16]">Within 50 miles</option>
                      <option value="regional" className="bg-[#0d0d16]">Regional (100+ miles)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Typical Set Length</label>
                    <select
                      value={formData.typicalSetLength}
                      onChange={(e) => updateFormData('typicalSetLength', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d0d16]">Select</option>
                      <option value="30-min" className="bg-[#0d0d16]">30 minutes</option>
                      <option value="1-hour" className="bg-[#0d0d16]">1 hour</option>
                      <option value="2-hours" className="bg-[#0d0d16]">2 hours</option>
                      <option value="3-4-hours" className="bg-[#0d0d16]">3-4 hours</option>
                      <option value="flexible" className="bg-[#0d0d16]">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Rate Range (Optional)</label>
                  <input
                    type="text"
                    value={formData.rateRange}
                    onChange={(e) => updateFormData('rateRange', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all"
                    placeholder="e.g., $200-$400 per set"
                  />
                  <p className="text-xs text-white/30 mt-2">This won't be publicly visible</p>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Review & Submit</h2>
                  <p className="text-white/50">Confirm your artist profile.</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h3 className="text-sm font-medium text-white/40 mb-2">Artist</h3>
                    <p className="text-white font-medium">{formData.artistName}</p>
                    <p className="text-white/60 text-sm">{formData.bandSize}</p>
                    {formData.genre.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.genre.map(g => (
                          <span key={g} className="px-2 py-1 text-xs rounded-full bg-rose-500/20 text-rose-300">{g}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">About Your Music (Optional)</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => updateFormData('bio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all resize-none"
                    placeholder="Tell venues about your sound and what makes you unique..."
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/[0.04] text-rose-600 focus:ring-rose-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-white/60">
                    I agree to the <Link href="/terms" className="text-rose-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-rose-400 hover:underline">Privacy Policy</Link>.
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
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(225,29,72,0.3)] transition-all"
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      Complete Registration
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
