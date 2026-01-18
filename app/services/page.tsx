'use client';

import SectionHero from '@/components/SectionHero';

export default function ServicesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      <SectionHero
        title="Our Services"
        description="Everything you need to connect, discover, and thrive in the Quad Cities nightlife ecosystem."
      />

      {/* Services Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="mx-auto max-w-8xl">
          <div className="space-y-20">
            {/* For Bartenders */}
            <div className="space-y-4">
              <h2 className="text-display-sm font-bold text-qc-primary">
                For Bartenders
              </h2>
              <div className="space-y-3 text-ink-secondary">
                <p>
                  <span className="font-semibold text-ink-primary">Profile Building</span> — Create 
                  a professional profile that showcases your skills, experience, and bartending style.
                </p>
                <p>
                  <span className="font-semibold text-ink-primary">Job Discovery</span> — Browse 
                  opportunities at bars and venues across the Quad Cities and connect directly with owners.
                </p>
                <p>
                  <span className="font-semibold text-ink-primary">Community Network</span> — Connect 
                  with other bartenders, share tips, and build your professional network locally.
                </p>
              </div>
            </div>

            {/* For Musicians */}
            <div className="space-y-4">
              <h2 className="text-display-sm font-bold text-qc-orange">
                For Musicians & Artists
              </h2>
              <div className="space-y-3 text-ink-secondary">
                <p>
                  <span className="font-semibold text-ink-primary">Artist Profiles</span> — Showcase 
                  your music, sound, and style to venues and promoters searching for talent.
                </p>
                <p>
                  <span className="font-semibold text-ink-primary">Gig Opportunities</span> — Discover 
                  performance opportunities at bars, festivals, and special events in the region.
                </p>
                <p>
                  <span className="font-semibold text-ink-primary">Audience Building</span> — Connect 
                  directly with local music fans and build your following in the Quad Cities.
                </p>
              </div>
            </div>

            {/* For Venues */}
            <div className="space-y-4">
              <h2 className="text-display-sm font-bold text-qc-yellow">
                For Bar & Venue Owners
              </h2>
              <div className="space-y-3 text-ink-secondary">
                <p>
                  <span className="font-semibold text-ink-primary">Talent Access</span> — Connect 
                  with professional bartenders, musicians, and production teams ready to enhance your venue.
                </p>
                <p>
                  <span className="font-semibold text-ink-primary">Audience Reach</span> — Gain visibility 
                  with local music lovers, event attendees, and nightlife enthusiasts in the Quad Cities.
                </p>
                <p>
                  <span className="font-semibold text-ink-primary">Venue Profile</span> — Showcase your 
                  space, atmosphere, and events to the entire Quad Cities community.
                </p>
              </div>
            </div>

            {/* For Patrons */}
            <div className="space-y-4">
              <h2 className="text-display-sm font-bold text-qc-pink">
                For Nightlife Enthusiasts
              </h2>
              <div className="space-y-3 text-ink-secondary">
                <p>
                  <span className="font-semibold text-ink-primary">Discovery</span> — Explore bars, 
                  venues, and live music experiences happening across the Quad Cities.
                </p>
                <p>
                  <span className="font-semibold text-ink-primary">Event Finder</span> — Stay updated 
                  on live shows, special events, and things to do in the nightlife scene.
                </p>
                <p>
                  <span className="font-semibold text-ink-primary">Community</span> — Connect with other 
                  music and nightlife lovers in your local area.
                </p>
              </div>
            </div>

            {/* For Industry */}
            <div className="space-y-4">
              <h2 className="text-display-sm font-bold text-qc-coral">
                For Industry Partners
              </h2>
              <div className="space-y-3 text-ink-secondary">
                <p>
                  <span className="font-semibold text-ink-primary">B2B Connections</span> — Connect 
                  with bars, venues, and decision-makers to supply products and services.
                </p>
                <p>
                  <span className="font-semibold text-ink-primary">Ecosystem Access</span> — Tap into the 
                  complete Quad Cities nightlife network for partnerships and opportunities.
                </p>
                <p>
                  <span className="font-semibold text-ink-primary">Market Intelligence</span> — Understand 
                  the local nightlife landscape and industry trends in the region.
                </p>
              </div>
            </div>
          </div>

          {/* Core Platform Benefits */}
          <div className="mt-20 pt-16 border-t border-line space-y-8">
            <h2 className="text-display-sm font-bold text-ink-primary">
              Platform Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-qc-primary">Direct Connections</h3>
                <p className="text-ink-secondary">
                  Connect directly with the people and venues you need without intermediaries.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-qc-orange">Local Focus</h3>
                <p className="text-ink-secondary">
                  Built specifically for the Quad Cities nightlife community.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-qc-yellow">No Middleman</h3>
                <p className="text-ink-secondary">
                  Work directly with decision-makers and keep more of what you earn.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-qc-pink">Community Focused</h3>
                <p className="text-ink-secondary">
                  Part of a thriving local ecosystem building the nightlife scene together.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center space-y-6">
            <p className="text-lg text-ink-secondary max-w-prose mx-auto">
              Ready to connect with the Quad Cities nightlife community?
            </p>
            <button className="px-8 py-3 bg-qc-primary text-black font-semibold rounded-lg hover:bg-qc-orange transition-colors">
              Join QCMix Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
