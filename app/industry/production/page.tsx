'use client';

import SectionHero from '@/components/SectionHero';

export default function IndustryProductionPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      <SectionHero
        title="Production & Sound"
        description="Technical professionals powering the Quad Cities nightlife industry. Connect with venues, artists, and event organizers."
      />

      {/* Content Sections */}
      <section className="py-20 px-6 relative z-10">
        <div className="mx-auto max-w-8xl space-y-16">
          {/* Services */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Sound & Production Services
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Offer your expertise in audio engineering, sound design, lighting, and event production. 
              Connect with venues and promoters who need reliable technical professionals for live events.
            </p>
          </div>

          {/* Reach Venues */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Reach Quad Cities Venues
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Build relationships with bar owners, promoters, and event planners. Showcase your portfolio, 
              availability, and technical capabilities to secure consistent work.
            </p>
          </div>

          {/* Network */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Industry Network
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Connect with other production professionals, share resources, and collaborate on complex 
              events. The Quad Cities scene values technical excellence and professionalism.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button className="px-8 py-3 bg-qc-primary text-black font-semibold rounded-lg hover:bg-qc-orange transition-colors">
              List Your Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
