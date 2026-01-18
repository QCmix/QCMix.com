'use client';

import SectionHero from '@/components/SectionHero';

export default function IndustryPromotionPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      <SectionHero
        title="Promotion & Marketing"
        description="Build the audience. Drive attendance. Shape the Quad Cities nightlife scene through strategic promotion."
      />

      {/* Content Sections */}
      <section className="py-20 px-6 relative z-10">
        <div className="mx-auto max-w-8xl space-y-16">
          {/* Reach Audience */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Reach Local Audiences
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Connect your events, shows, and promotions directly with Quad Cities nightlife 
              enthusiasts. Build buzz for your venues, artists, and special events through 
              targeted promotion.
            </p>
          </div>

          {/* Partnerships */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Work with bars, venues, and artists to develop compelling promotion strategies. 
              Access the Quad Cities community to amplify your marketing efforts and drive attendance.
            </p>
          </div>

          {/* Analytics */}
          <div className="space-y-4">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Community Engagement
            </h2>
            <p className="text-lg text-ink-secondary max-w-prose">
              Tap into the Quad Cities nightlife ecosystem to understand audience preferences, 
              build brand loyalty, and create memorable experiences that keep people coming back.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button className="px-8 py-3 bg-qc-primary text-black font-semibold rounded-lg hover:bg-qc-orange transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
