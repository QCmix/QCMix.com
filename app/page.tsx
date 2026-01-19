'use client';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)'
        }}></div>
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        {/* Logo/Title */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary bg-clip-text text-transparent mb-2">
            QCMix
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto"></div>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-ink-primary mb-6">
          Coming Soon
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-ink-secondary mb-8 leading-relaxed">
          We're building the platform that connects bartenders, musicians, venue owners, and the entire Quad Cities nightlife community. Get ready to discover, collaborate, and celebrate the scene.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/join-venue"
            className="px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            For Venues
          </a>
          <a
            href="/join-industry"
            className="px-8 py-3 border-2 border-brand-primary text-brand-primary font-semibold rounded-lg hover:bg-brand-primary hover:text-white transition-colors"
          >
            For Industry
          </a>
        </div>

        {/* Additional info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-lg bg-white bg-opacity-5 border border-ink-border">
            <h3 className="text-brand-primary font-semibold mb-2">Early Access</h3>
            <p className="text-ink-secondary text-sm">
              Join our waitlist for early access and exclusive launch updates.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white bg-opacity-5 border border-ink-border">
            <h3 className="text-brand-secondary font-semibold mb-2">Local First</h3>
            <p className="text-ink-secondary text-sm">
              Built for the Quad Cities nightlife community, by people who love the scene.
            </p>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-ink-tertiary">
          <a href="/contact" className="hover:text-brand-primary transition-colors">Contact</a>
          <a href="/thank-you" className="hover:text-brand-primary transition-colors">Thank You</a>
          <span className="text-ink-border">•</span>
          <span>&copy; 2026 QCMix</span>
        </div>
      </div>
    </div>
  );
}