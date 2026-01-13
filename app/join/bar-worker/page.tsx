// app/join/bar-worker/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LoadingSpinner from '@/components/LoadingSpinner';

const steps = [
  { id: 1, title: 'Basic Info', description: 'Who you are' },
  { id: 2, title: 'Experience', description: 'Your skills' },
  { id: 3, title: 'Availability', description: 'Work preferences' },
  { id: 4, title: 'Review', description: 'Confirm details' },
];

export default function BarWorkerRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    role: [] as string[],
    
    yearsExperience: '',
    certifications: [] as string[],
    
    seekingWork: false,
    preferredShifts: [] as string[],
    willingToTravel: false,
    
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
          <Image src="/images/roles/Bartenders & Bar Staff.jpg" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080f] via-[#08080f]/95 to-[#08080f]" />
        </div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-600/10 rounded-full blur-[120px] -translate-y-1/2" />

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
            <span className="text-white/60">Bar Worker</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-500/20 to-gray-500/20 flex items-center justify-center text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Join as Bar Worker</h1>
              <p className="text-white/50 mt-1">Barback, BOH, security, and door staff</p>
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
                    currentStep >= step.id ? 'bg-gradient-to-r from-slate-600 to-gray-600 text-white' : 'bg-white/[0.04] text-white/40 border border-white/[0.06]'
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
                  <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${currentStep > step.id ? 'bg-slate-600' : 'bg-white/[0.06]'}`} />
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
                  <p className="text-white/50">Tell us about yourself.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-slate-500/50 focus:ring-1 focus:ring-slate-500/50 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-slate-500/50 focus:ring-1 focus:ring-slate-500/50 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-slate-500/50 focus:ring-1 focus:ring-slate-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-slate-500/50 focus:ring-1 focus:ring-slate-500/50 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">City *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-slate-500/50 focus:ring-1 focus:ring-slate-500/50 transition-all appearance-none cursor-pointer"
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

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">Role(s) *</label>
                  <div className="flex flex-wrap gap-3">
                    {['Barback', 'Door/Security', 'Kitchen/BOH', 'Maintenance', 'Cleaning/Setup'].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => toggleArrayItem('role', r)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          formData.role.includes(r)
                            ? 'bg-slate-600 text-white'
                            : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-slate-500/30'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Experience</h2>
                  <p className="text-white/50">Tell us about your background.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Years of Experience *</label>
                  <select
                    value={formData.yearsExperience}
                    onChange={(e) => updateFormData('yearsExperience', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-slate-500/50 focus:ring-1 focus:ring-slate-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0d0d16]">Select</option>
                    <option value="0-1" className="bg-[#0d0d16]">Less than 1 year</option>
                    <option value="1-3" className="bg-[#0d0d16]">1-3 years</option>
                    <option value="3-5" className="bg-[#0d0d16]">3-5 years</option>
                    <option value="5+" className="bg-[#0d0d16]">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">Certifications (if applicable)</label>
                  <div className="flex flex-wrap gap-3">
                    {['ServSafe', 'TIPS', 'Security License', 'First Aid/CPR', 'Food Handler'].map((cert) => (
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
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Availability</h2>
                  <p className="text-white/50">What are you looking for?</p>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div>
                    <p className="font-medium text-white">Actively seeking work</p>
                    <p className="text-sm text-white/40">Let venues know you're available</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => updateFormData('seekingWork', !formData.seekingWork)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${formData.seekingWork ? 'bg-slate-600' : 'bg-white/10'}`}
                  >
                    <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${formData.seekingWork ? 'translate-x-6' : ''}`} />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">Preferred Shifts</label>
                  <div className="flex flex-wrap gap-3">
                    {['Day', 'Night', 'Weekends', 'Weekdays', 'Flexible'].map((shift) => (
                      <button
                        key={shift}
                        type="button"
                        onClick={() => toggleArrayItem('preferredShifts', shift)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          formData.preferredShifts.includes(shift)
                            ? 'bg-slate-600 text-white'
                            : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-slate-500/30'
                        }`}
                      >
                        {shift}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div>
                    <p className="font-medium text-white">Willing to travel within QC</p>
                    <p className="text-sm text-white/40">Work across Iowa/Illinois border</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => updateFormData('willingToTravel', !formData.willingToTravel)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${formData.willingToTravel ? 'bg-slate-600' : 'bg-white/10'}`}
                  >
                    <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${formData.willingToTravel ? 'translate-x-6' : ''}`} />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Review & Submit</h2>
                  <p className="text-white/50">Confirm your information.</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h3 className="text-sm font-medium text-white/40 mb-2">Basic Info</h3>
                    <p className="text-white font-medium">{formData.firstName} {formData.lastName}</p>
                    <p className="text-white/60 text-sm">{formData.email}</p>
                    {formData.role.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.role.map(r => (
                          <span key={r} className="px-2 py-1 text-xs rounded-full bg-slate-500/20 text-slate-300">{r}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">About You (Optional)</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => updateFormData('bio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-slate-500/50 focus:ring-1 focus:ring-slate-500/50 transition-all resize-none"
                    placeholder="Tell venues about your work ethic and experience..."
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/[0.04] text-slate-600 focus:ring-slate-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-white/60">
                    I agree to the <Link href="/terms" className="text-slate-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-slate-400 hover:underline">Privacy Policy</Link>.
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
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-slate-600 to-gray-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(71,85,105,0.3)] transition-all"
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
