'use client';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ink-primary text-ink-primary flex flex-col">
      {/* Hero Image Placeholder */}
      <div className="w-full" style={{ aspectRatio: '21/9' }}>
        <div className="w-full h-full bg-gradient-to-b from-ink-secondary to-ink-primary"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-5xl w-full text-center space-y-10">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-ink-primary">
            The operating system for Quad Cities nightlife.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-ink-secondary max-w-3xl mx-auto">
            QCMix is building a private hiring and booking network for bars, venues, bartenders, and musicians in the Quad Cities.
          </p>

          {/* Value Props */}
          <ul className="space-y-4 text-lg text-ink-secondary max-w-2xl mx-auto">
            <li className="flex items-center gap-3">
              <span className="text-brand-primary font-bold">•</span>
              Hire bartenders faster
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-primary font-bold">•</span>
              Book live acts without Facebook chaos
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-primary font-bold">•</span>
              Find real paid gigs in one place
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="/join-venue"
              className="px-8 py-4 bg-brand-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              Join as a Venue
            </a>
            <a
              href="/join-industry"
              className="px-8 py-4 border-2 border-brand-primary text-brand-primary font-semibold rounded-lg hover:bg-brand-primary hover:text-white transition-colors text-lg"
            >
              Join as Bartender or Musician
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-ink-secondary border-opacity-20 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <a href="/contact" className="text-ink-secondary hover:text-brand-primary transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}