// app/join/bartender/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LoadingSpinner from '@/components/LoadingSpinner';

// Form steps
const steps = [
  { id: 1, title: 'Basic Info', description: 'Your identity' },
  { id: 2, title: 'Experience', description: 'Your background' },
  { id: 3, title: 'Preferences', description: 'What you want' },
  { id: 4, title: 'Review', description: 'Confirm details' },
];

export default function BartenderRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    
    // Step 2: Experience
    yearsExperience: '',
    specialties: [] as string[],
    certifications: [] as string[],
    currentEmployment: '',
    
    // Step 3: Preferences
    seekingWork: false,
    preferredShifts: [] as string[],
    minimumPay: '',
    willingToTravel: false,
    
    // Step 4: Additional
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
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Redirect to success or dashboard
  };

  return (
    <main className="bg-white min-h-screen text-gray-900">
      <section className="relative pt-20 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/roles/Bartender.jpg" alt="Bartender" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        </div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/join" className="hover:text-indigo-600 transition-colors">Join</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-indigo-600">Bartender</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Join as Bartender</h1>
              <p className="text-gray-500 mt-1">Guest-facing bar service and floor leadership</p>
            </div>
          </div>
        </div>
      </section>

            {/* ==================== PROGRESS STEPS ==================== */}
            <section className="px-6 pb-8">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                            currentStep >= step.id
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                              : 'bg-gray-100 text-gray-400 border border-gray-200'
                          }`}
                        >
                          {currentStep > step.id ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            step.id
                          )}
                        </div>
                        <div className="mt-2 text-center hidden sm:block">
                          <p className={`text-sm font-medium ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'}`}>
                            {step.title}
                          </p>
                          <p className="text-xs text-gray-400">{step.description}</p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                            currentStep > step.id ? 'bg-indigo-600' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ==================== FORM CONTENT ==================== */}
            <section className="px-6 pb-32">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg"
                >
                  {/* Step 1: ... */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Basic Information</h2>
                  <p className="text-white/50">Let's start with who you are.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      City *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d0d16]">Select city</option>
                      <option value="davenport" className="bg-[#0d0d16]">Davenport, IA</option>
                      <option value="bettendorf" className="bg-[#0d0d16]">Bettendorf, IA</option>
                      <option value="rock-island" className="bg-[#0d0d16]">Rock Island, IL</option>
                      <option value="moline" className="bg-[#0d0d16]">Moline, IL</option>
                      <option value="east-moline" className="bg-[#0d0d16]">East Moline, IL</option>
                      <option value="other" className="bg-[#0d0d16]">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )

            {/* Step 2: Experience */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Your Experience</h2>
                  <p className="text-white/50">Tell us about your bartending background.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    value={formData.yearsExperience}
                    onChange={(e) => updateFormData('yearsExperience', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0d0d16]">Select experience level</option>
                    <option value="0-1" className="bg-[#0d0d16]">Less than 1 year</option>
                    <option value="1-3" className="bg-[#0d0d16]">1-3 years</option>
                    <option value="3-5" className="bg-[#0d0d16]">3-5 years</option>
                    <option value="5-10" className="bg-[#0d0d16]">5-10 years</option>
                    <option value="10+" className="bg-[#0d0d16]">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">
                    Specialties
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {['Craft Cocktails', 'High Volume', 'Wine Service', 'Beer/Draft', 'Speed Bartending', 'Flair', 'Mixology', 'Event Bartending'].map((specialty) => (
                      <button
                        key={specialty}
                        type="button"
                        onClick={() => toggleArrayItem('specialties', specialty)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          formData.specialties.includes(specialty)
                            ? 'bg-violet-600 text-white'
                            : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-violet-500/30'
                        }`}
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">
                    Certifications
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {['TIPS Certified', 'ServSafe', 'State License', 'Cicerone', 'Sommelier', 'BarSmarts'].map((cert) => (
                      <button
                        key={cert}
                        type="button"
                        onClick={() => toggleArrayItem('certifications', cert)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          formData.certifications.includes(cert)
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-emerald-500/30'
                        }`}
                      >
                        {cert}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Current Employment Status
                  </label>
                  <select
                    value={formData.currentEmployment}
                    onChange={(e) => updateFormData('currentEmployment', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0d0d16]">Select status</option>
                    <option value="employed-ft" className="bg-[#0d0d16]">Employed Full-Time</option>
                    <option value="employed-pt" className="bg-[#0d0d16]">Employed Part-Time</option>
                    <option value="freelance" className="bg-[#0d0d16]">Freelance / Gig Work</option>
                    <option value="seeking" className="bg-[#0d0d16]">Actively Seeking</option>
                    <option value="not-seeking" className="bg-[#0d0d16]">Not Currently Seeking</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Your Preferences</h2>
                  <p className="text-white/50">What are you looking for?</p>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div>
                    <p className="font-medium text-white">Open to new opportunities</p>
                    <p className="text-sm text-white/40">Let venues know you're available</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => updateFormData('seekingWork', !formData.seekingWork)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${
                      formData.seekingWork ? 'bg-violet-600' : 'bg-white/10'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${
                        formData.seekingWork ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">
                    Preferred Shifts
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {['Day Shift', 'Night Shift', 'Weekends', 'Weekdays', 'Events Only', 'Flexible'].map((shift) => (
                      <button
                        key={shift}
                        type="button"
                        onClick={() => toggleArrayItem('preferredShifts', shift)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          formData.preferredShifts.includes(shift)
                            ? 'bg-violet-600 text-white'
                            : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-violet-500/30'
                        }`}
                      >
                        {shift}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Minimum Hourly Rate (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">$</span>
                    <input
                      type="number"
                      value={formData.minimumPay}
                      onChange={(e) => updateFormData('minimumPay', e.target.value)}
                      className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
                      placeholder="15"
                    />
                  </div>
                  <p className="text-xs text-white/30 mt-2">This won't be publicly visible</p>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div>
                    <p className="font-medium text-white">Willing to travel within QC</p>
                    <p className="text-sm text-white/40">Work across Iowa/Illinois border</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => updateFormData('willingToTravel', !formData.willingToTravel)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${
                      formData.willingToTravel ? 'bg-violet-600' : 'bg-white/10'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${
                        formData.willingToTravel ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Review & Submit</h2>
                  <p className="text-white/50">Almost there! Review your information.</p>
                </div>

                {/* Summary cards */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h3 className="text-sm font-medium text-white/40 mb-2">Basic Info</h3>
                    <p className="text-white font-medium">{formData.firstName} {formData.lastName}</p>
                    <p className="text-white/60 text-sm">{formData.email}</p>
                    <p className="text-white/60 text-sm">{formData.city}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h3 className="text-sm font-medium text-white/40 mb-2">Experience</h3>
                    <p className="text-white font-medium">{formData.yearsExperience} years experience</p>
                    {formData.specialties.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.specialties.map(s => (
                          <span key={s} className="px-2 py-1 text-xs rounded-full bg-violet-500/20 text-violet-300">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h3 className="text-sm font-medium text-white/40 mb-2">Preferences</h3>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${formData.seekingWork ? 'bg-emerald-500' : 'bg-white/30'}`} />
                      <span className="text-white/60 text-sm">
                        {formData.seekingWork ? 'Open to opportunities' : 'Not seeking work'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Short Bio (Optional)
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => updateFormData('bio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all resize-none"
                    placeholder="Tell venues a bit about yourself and what you bring to the bar..."
                  />
                </div>

                {/* Terms */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/[0.04] text-violet-600 focus:ring-violet-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-white/60">
                    I agree to the <Link href="/terms" className="text-violet-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-violet-400 hover:underline">Privacy Policy</Link>. I understand that my profile will be visible to venue owners and other industry members.
                  </span>
                </label>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/[0.06]">
              <button
                type="button"
                onClick={handleBack}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white/60 hover:text-white transition-colors ${
                  currentStep === 1 ? 'invisible' : ''
                }`}
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
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all"
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
