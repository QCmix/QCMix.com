'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-ink-primary mb-4">Contact Us</h1>
        <p className="text-lg text-ink-secondary mb-8">
          Have questions? We'd love to hear from you. Contact information coming soon.
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
