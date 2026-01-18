'use client';

import SectionHero from '@/components/SectionHero';

export default function IndustryFestivalsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      <SectionHero
        title="Festivals & Events"
        description="Organize and manage major events in the Quad Cities. Connect artists, venues, vendors, and audiences."
      />

      {/* Content Sections */}
      <section className="py-20 px-6 relative z-10">
        <div className="mx-auto max-w-8xl space-y-16">
          {/* Coordination */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Event Coordination
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Access a complete directory of artists, venues, production teams, and vendors. 
              Streamline event planning by connecting all necessary parties through one platform.
            </p>
          </div>

          {/* Community Events */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Build Community Events
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Create memorable experiences that bring the Quad Cities nightlife community together. 
              Whether music festivals, themed nights, or special events, coordinate everything in one place.
            </p>
          </div>

          {/* Promotion */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Built-In Promotion
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Reach the entire Quad Cities nightlife audience automatically. Our platform ensures 
              your events get visibility with the right people at the right time.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button className="px-8 py-3 bg-qc-primary text-black font-semibold rounded-lg hover:bg-qc-orange transition-colors">
              Plan Your Event
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
