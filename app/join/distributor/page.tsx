// app/join/distributor/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LoadingSpinner from '@/components/LoadingSpinner';

const steps = [
  { id: 1, title: 'Company Info', description: 'Your business' },
  { id: 2, title: 'Products', description: 'What you offer' },
  { id: 3, title: 'Service', description: 'How you work' },
  { id: 4, title: 'Review', description: 'Confirm details' },
];

export default function DistributorRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    territory: '',
    
    return (
      <main className="bg-white min-h-screen text-gray-900">
        <section className="relative pt-20 pb-12 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/roles/Distributors-&-Industry-Partners.jpg" alt="Distributor" fill className="object-cover opacity-10" />
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
              <span className="text-indigo-600">Distributor</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Join as Distributor</h1>
                <p className="text-gray-500 mt-1">Beverage distribution and brand representation</p>
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
                      currentStep >= step.id ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-200'
                    }`}>
                      {currentStep > step.id ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : step.id}
                    </div>
                    <div className="mt-2 text-center hidden sm:block">
                      <p className={`text-sm font-medium ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'}`}>{step.title}</p>
                      <p className="text-xs text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 mx-4 flex-1 transition-all duration-300 ${currentStep > step.id ? 'bg-indigo-600' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-8">
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
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step.id ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white' : 'bg-white/[0.04] text-white/40 border border-white/[0.06]'
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
                  <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${currentStep > step.id ? 'bg-emerald-600' : 'bg-white/[0.06]'}`} />
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
                  <h2 className="text-2xl font-bold mb-2">Company Information</h2>
                  <p className="text-white/50">Tell us about your distribution business.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Company Name *</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => updateFormData('companyName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    placeholder="Midwest Beverage Distributors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Contact Name *</label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => updateFormData('contactName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      placeholder="Sales Representative"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Territory *</label>
                    <select
                      value={formData.territory}
                      onChange={(e) => updateFormData('territory', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d0d16]">Select</option>
                      <option value="qc-only" className="bg-[#0d0d16]">Quad Cities Only</option>
                      <option value="iowa" className="bg-[#0d0d16]">Iowa</option>
                      <option value="illinois" className="bg-[#0d0d16]">Illinois</option>
                      <option value="regional" className="bg-[#0d0d16]">Regional (Multi-State)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    placeholder="sales@distributor.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Products & Brands</h2>
                  <p className="text-white/50">What do you distribute?</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-4">Product Types *</label>
                  <div className="flex flex-wrap gap-3">
                    {['Beer', 'Wine', 'Spirits', 'Non-Alcoholic', 'Kegs', 'Cocktail Mixers', 'Bar Supplies', 'Glassware'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => toggleArrayItem('productTypes', type)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          formData.productTypes.includes(type)
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-emerald-500/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Key Brands (Optional)</label>
                  <textarea
                    value={formData.brands}
                    onChange={(e) => updateFormData('brands', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                    placeholder="List major brands you carry..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Minimum Order Requirements</label>
                  <select
                    value={formData.minimumOrders}
                    onChange={(e) => updateFormData('minimumOrders', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0d0d16]">Select</option>
                    <option value="none" className="bg-[#0d0d16]">No Minimum</option>
                    <option value="low" className="bg-[#0d0d16]">Low ($100-$500)</option>
                    <option value="medium" className="bg-[#0d0d16]">Medium ($500-$1000)</option>
                    <option value="high" className="bg-[#0d0d16]">High ($1000+)</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Service & Support</h2>
                  <p className="text-white/50">How do you work with venues?</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Delivery Schedule</label>
                  <select
                    value={formData.deliverySchedule}
                    onChange={(e) => updateFormData('deliverySchedule', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0d0d16]">Select</option>
                    <option value="daily" className="bg-[#0d0d16]">Daily</option>
                    <option value="2-3-weekly" className="bg-[#0d0d16]">2-3x Per Week</option>
                    <option value="weekly" className="bg-[#0d0d16]">Weekly</option>
                    <option value="bi-weekly" className="bg-[#0d0d16]">Bi-Weekly</option>
                    <option value="on-demand" className="bg-[#0d0d16]">On-Demand</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div>
                    <p className="font-medium text-white">Dedicated Account Support</p>
                    <p className="text-sm text-white/40">Personal rep for each venue</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => updateFormData('accountSupport', !formData.accountSupport)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${formData.accountSupport ? 'bg-emerald-600' : 'bg-white/10'}`}
                  >
                    <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${formData.accountSupport ? 'translate-x-6' : ''}`} />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Review & Submit</h2>
                  <p className="text-white/50">Confirm your distributor profile.</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h3 className="text-sm font-medium text-white/40 mb-2">Company</h3>
                    <p className="text-white font-medium">{formData.companyName}</p>
                    <p className="text-white/60 text-sm">{formData.territory}</p>
                    {formData.productTypes.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.productTypes.map(t => (
                          <span key={t} className="px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">About Your Services (Optional)</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => updateFormData('bio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                    placeholder="Tell venues what sets your distribution service apart..."
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/[0.04] text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-white/60">
                    I agree to the <Link href="/terms" className="text-emerald-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-emerald-400 hover:underline">Privacy Policy</Link>.
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
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all"
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
