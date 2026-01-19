'use client';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-ink-primary mb-4">Thank You</h1>
        <p className="text-lg text-ink-secondary mb-8">
          We appreciate your interest in QCMix. We'll be in touch soon.
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
