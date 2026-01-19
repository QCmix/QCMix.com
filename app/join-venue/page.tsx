'use client';

export default function JoinVenuePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-ink-primary mb-4">For Venue Owners</h1>
        <p className="text-lg text-ink-secondary mb-8">
          Coming soon: Venue registration and management dashboard.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
