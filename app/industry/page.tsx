'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/hero-bar-interior-01.webp')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl w-full text-center space-y-10">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            The operating system for Quad Cities nightlife.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            QCMix is opening a private beta for a hiring and booking network built
            for bars, venues, bartenders, and musicians in the Quad Cities.
          </p>

          {/* Value Props */}
          <ul className="space-y-4 text-lg text-gray-200 max-w-2xl mx-auto list-none p-0">
            <li>• Hire bartenders faster</li>
            <li>• Book live acts without Facebook chaos</li>
            <li>• Find real paid gigs in one place</li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="/join-venue"
              className="px-10 py-5 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition text-lg tracking-wide"
            >
              Request Founding Access
            </a>

            <a
              href="/join-industry"
              className="px-8 py-4 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-white hover:text-black transition"
            >
              Join the Industry Beta
            </a>
          </div>
        </div>
      </section>

      {/* Founding Partner Section */}
      <section className="border-t border-gray-800 px-6 py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Founding Partner Access (Limited)
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            We’re opening early access to a small group of Quad Cities venues and
            industry professionals.
          </p>

          <ul className="space-y-3 text-gray-200 text-lg list-none p-0 mx-auto max-w-xl">
            <li>• Lifetime discounted pricing</li>
            <li>• Priority placement at launch</li>
            <li>• Direct input on features</li>
            <li>• Permanent “Founding Venue” or “Founding Member” badge</li>
          </ul>

          <p className="text-gray-400">
            Limited to the first 10 venues and 100 industry members.
          </p>

          <div className="pt-6">
            <a
              href="/join-venue"
              className="inline-block px-10 py-5 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition text-lg tracking-wide"
            >
              Request Founding Access
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <a
            href="/contact"
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
