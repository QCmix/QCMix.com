// app/join/bar-owner/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LoadingSpinner from '@/components/LoadingSpinner';

const steps = [
  { id: 1, title: 'Venue Info', description: 'Your business' },
  { id: 2, title: 'Operations', description: 'Your setup' },
  { id: 3, title: 'Needs', description: 'What you want' },
  { id: 4, title: 'Review', description: 'Confirm details' },
];

export default function BarOwnerRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    venueName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    venueType: '',
    
    yearsInBusiness: '',
    capacity: '',
    liquorLicense: '',
    entertainment: [] as string[],
    weeklyHours: '',
    
    hiring: false,
    seekingDistributors: false,
    seekingBookings: false,
    
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
          <Image src="/images/roles/Bars & Owners.jpg" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080f] via-[#08080f]/95 to-[#08080f]" />
        </div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -translate-y-1/2" />

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
            <span className="text-white/60">Bar Owner</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 3.129 3h17.742a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Join as Bar Owner</h1>
              <p className="text-white/50 mt-1">Ownership, management, and venue operations</p>
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
                    currentStep >= step.id ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' : 'bg-white/[0.04] text-white/40 border border-white/[0.06]'
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
                  <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${currentStep > step.id ? 'bg-amber-600' : 'bg-white/[0.06]'}`} />
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
                  <h2 className="text-2xl font-bold mb-2">Venue Information</h2>
                  <p className="text-white/50">Tell us about your bar or venue.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Venue Name *</label>
                  <input
                    type="text"
                    value={formData.venueName}
                    onChange={(e) => updateFormData('venueName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    placeholder="The Corner Tavern"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Owner Name *</label>
                    <input
                      type="text"
                      value={formData.ownerName}
                      onChange={(e) => updateFormData('ownerName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Venue Type *</label>
                    <select
                      value={formData.venueType}
                      onChange={(e) => updateFormData('venueType', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d0d16]">Select type</option>
                      <option value="bar" className="bg-[#0d0d16]">Bar</option>
                      <option value="nightclub" className="bg-[#0d0d16]">Nightclub</option>
                      <option value="music-venue" className="bg-[#0d0d16]">Music Venue</option>
                      <option value="restaurant-bar" className="bg-[#0d0d16]">Restaurant/Bar</option>
                      <option value="brewery" className="bg-[#0d0d16]">Brewery/Taproom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    placeholder="owner@venue.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">City *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d0d16]">Select city</option>
                      <option value="davenport" className="bg-[#0d0d16]">Davenport, IA</option>
                      <option value="bettendorf" className="bg-[#0d0d16]">Bettendorf, IA</option>
                      <option value="rock-island" className="bg-[#0d0d16]">Rock Island, IL</option>
                      <option value="moline" className="bg-[#0d0d16]">Moline, IL</option>
                      <option value="east-moline" className="bg-[#0d0d16]">East Moline, IL</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Operations</h2>
                  <p className="text-white/50">Tell us about your venue's operations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Years in Business</label>
                    <select
                      value={formData.yearsInBusiness}
                      onChange={(e) => updateFormData('yearsInBusiness', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d0d16]">Select</option>
                      <option value="new" className="bg-[#0d0d16]">New/Opening Soon</option>
                      <option value="0-2" className="bg-[#0d0d16]">Less than 2 years</option>
                      <option value="2-5" className="bg-[#0d0d16]">2-5 years</option>
                      <option value="5-10" className="bg-[#0d0d16]">5-10 years</option>
                      <option value="10+" className="bg-[#0d0d16]">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Capacity</label>
                    <input
                      type="number"
                      value={formData.capacity}
                      onChange={(e) => updateFormData('capacity', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                      placeholder="150"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Liquor License Type</label>
                  <select
                    value={formData.liquorLicense}
                    onChange={(e) => updateFormData('liquorLicense', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0d0d16]">Select</option>
                    <option value="beer-wine" className="bg-[#0d0d16]">Beer & Wine Only</option>
                    <option value="full-bar" className="bg-[#0d0d16]">Full Bar</option>
                    <option value="pending" className="bg-[#0d0d16]">License Pending</option>
                    <option value="none" className="bg-[#0d0d16]">No License</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">Entertainment Offered</label>
                  <div className="flex flex-wrap gap-3">
                    {['Live Music', 'DJs', 'Karaoke', 'Trivia', 'Sports Viewing', 'Dancing', 'Pool/Games', 'Private Events'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleArrayItem('entertainment', item)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          formData.entertainment.includes(item)
                            ? 'bg-amber-600 text-white'
                            : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-amber-500/30'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">What Are You Looking For?</h2>
                  <p className="text-white/50">Let us know how QCMix can help your venue.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div>
                      <p className="font-medium text-white">Hiring bartenders or staff</p>
                      <p className="text-sm text-white/40">Connect with qualified candidates</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateFormData('hiring', !formData.hiring)}
                      className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${formData.hiring ? 'bg-amber-600' : 'bg-white/10'}`}
                    >
                      <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${formData.hiring ? 'translate-x-6' : ''}`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div>
                      <p className="font-medium text-white">Seeking distributors</p>
                      <p className="text-sm text-white/40">Find beverage suppliers and partners</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateFormData('seekingDistributors', !formData.seekingDistributors)}
                      className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${formData.seekingDistributors ? 'bg-amber-600' : 'bg-white/10'}`}
                    >
                      <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${formData.seekingDistributors ? 'translate-x-6' : ''}`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div>
                      <p className="font-medium text-white">Booking live music</p>
                      <p className="text-sm text-white/40">Discover local musicians and bands</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateFormData('seekingBookings', !formData.seekingBookings)}
                      className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${formData.seekingBookings ? 'bg-amber-600' : 'bg-white/10'}`}
                    >
                      <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${formData.seekingBookings ? 'translate-x-6' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Review & Submit</h2>
                  <p className="text-white/50">Confirm your venue information.</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h3 className="text-sm font-medium text-white/40 mb-2">Venue</h3>
                    <p className="text-white font-medium">{formData.venueName}</p>
                    <p className="text-white/60 text-sm">{formData.venueType}</p>
                    <p className="text-white/60 text-sm">{formData.city}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">About Your Venue (Optional)</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => updateFormData('bio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none"
                    placeholder="Tell the community about your venue..."
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/[0.04] text-amber-600 focus:ring-amber-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-white/60">
                    I agree to the <Link href="/terms" className="text-amber-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</Link>. I verify that I am authorized to represent this venue.
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
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(217,119,6,0.3)] transition-all"
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
