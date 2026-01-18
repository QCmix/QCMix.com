'use client';

import SectionHero from '@/components/SectionHero';

export default function IndustryVendorsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      <SectionHero
        title="Vendors & Suppliers"
        description="Provide products and services to the Quad Cities nightlife industry. Connect with bars, venues, and event organizers."
      />

      {/* Content Sections */}
      <section className="py-20 px-6 relative z-10">
        <div className="mx-auto max-w-8xl space-y-16">
          {/* B2B Connections */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              B2B Opportunities
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Connect with bars, restaurants, and venues across the Quad Cities. Showcase your 
              products and services directly to business owners and decision-makers in the 
              hospitality industry.
            </p>
          </div>

          {/* Supply Chain */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Supply the Scene
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              From beverages and equipment to furniture and decorative elements, venues and 
              events need reliable suppliers. Build long-term partnerships with the Quad Cities 
              nightlife industry.
            </p>
          </div>

          {/* Industry Network */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Industry Partnerships
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Understand the needs of bars and venues. Connect with other vendors, collaborate on 
              solutions, and build your reputation as a trusted supplier in the Quad Cities.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button className="px-8 py-3 bg-qc-primary text-black font-semibold rounded-lg hover:bg-qc-orange transition-colors">
              Become a Vendor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
