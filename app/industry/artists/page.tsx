'use client';

import SectionHero from '@/components/SectionHero';

export default function IndustryArtistsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      <SectionHero
        title="Artists & Performers"
        description="Connect with venues, promoters, and audiences. Build your career in the Quad Cities music ecosystem."
      />

      {/* Content Sections */}
      <section className="py-20 px-6 relative z-10">
        <div className="mx-auto max-w-8xl space-y-16">
          {/* Discovery */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Get Discovered
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Showcase your talent to venues and promoters actively looking for live entertainment. 
              Build your reputation and secure more bookings through direct connections.
            </p>
          </div>

          {/* Opportunities */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Booking Opportunities
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Access curated opportunities for performances at bars, restaurants, festivals, and 
              special events across the Quad Cities region. Build your performance calendar and 
              expand your audience reach.
            </p>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Artist Community
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Connect with other musicians, collaborate on projects, share resources, and grow 
              together. The Quad Cities music scene thrives on community and collaboration.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button className="px-8 py-3 bg-qc-primary text-black font-semibold rounded-lg hover:bg-qc-orange transition-colors">
              Join as Artist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
