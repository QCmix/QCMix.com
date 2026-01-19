'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center px-6 py-20 min-h-screen">
        {/* Hero Image */}
        <img
          src="/hero-bar-interior-01.jpg"
          alt="Quad Cities bar interior during a live night"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black"></div>

        {/* Hero Content Panel */}
        <div className="relative z-10 max-w-6xl w-full">
          <div className="bg-zinc-950/95 shadow-2xl border border-zinc-800/50">
            <div className="p-16 md:p-24 lg:p-32">
              <div className="max-w-4xl mx-auto text-center space-y-12">
                <img
                  src="/logo.png"
                  alt="QCMix logo"
                  className="h-20 md:h-24 mx-auto mb-4"
                />
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                  The operating system<br />for Quad Cities nightlife
                </h1>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-px bg-zinc-600"></div>
                  <div className="w-2 h-2 bg-zinc-600 rotate-45"></div>
                  <div className="w-12 h-px bg-zinc-600"></div>
                </div>

                <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
                  A hiring and booking network built for bars, venues, bartenders, and musicians
                </p>

                <div className="pt-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800 max-w-4xl mx-auto">
                    <div className="px-8 py-6">
                      <p className="text-zinc-200 text-lg">Hire bartenders faster</p>
                    </div>
                    <div className="px-8 py-6">
                      <p className="text-zinc-200 text-lg">Book live acts without chaos</p>
                    </div>
                    <div className="px-8 py-6">
                      <p className="text-zinc-200 text-lg">Find real paid gigs</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="/join-venue"
                    className="px-10 py-3 bg-white text-black font-medium tracking-wide text-sm hover:bg-zinc-200 transition-colors duration-500"
                  >
                    Request Founding Access
                  </a>
                  <a
                    href="/join-industry"
                    className="px-10 py-3 border border-zinc-700 text-zinc-200 font-medium tracking-wide text-sm hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-500"
                  >
                    Join Industry Beta
                  </a>
                </div>

                <p className="text-zinc-500 text-xs pt-8 tracking-[0.2em] uppercase">
                  Private Beta · Limited Access · Quad Cities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Partner Section */}
      <section className="relative px-6 py-24 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="bg-zinc-950/95 border border-zinc-800/50 shadow-2xl">
            <div className="p-16 md:p-20 lg:p-24">
              <div className="max-w-3xl mx-auto text-center space-y-12">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                  Founding Partner Access
                </h2>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-px bg-zinc-600"></div>
                  <div className="w-2 h-2 bg-zinc-600 rotate-45"></div>
                  <div className="w-12 h-px bg-zinc-600"></div>
                </div>

                <p className="text-zinc-300 text-xl leading-relaxed font-normal">
                  Early access for a select group of Quad Cities venues and industry professionals
                </p>

                <div className="pt-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
                    <div className="border-l-2 border-zinc-700 pl-6 py-2">
                      <p className="text-zinc-200 text-lg font-normal">Lifetime discounted pricing</p>
                    </div>
                    <div className="border-l-2 border-zinc-700 pl-6 py-2">
                      <p className="text-zinc-200 text-lg font-normal">Priority placement at launch</p>
                    </div>
                    <div className="border-l-2 border-zinc-700 pl-6 py-2">
                      <p className="text-zinc-200 text-lg font-normal">Direct input on features</p>
                    </div>
                    <div className="border-l-2 border-zinc-700 pl-6 py-2">
                      <p className="text-zinc-200 text-lg font-normal">Permanent founding badge</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-10 mt-4">
                  <p className="text-zinc-500 text-xs mb-10 tracking-[0.2em] uppercase">
                    First 10 Venues · First 100 Members
                  </p>
                  <a
                    href="/join-venue"
                    className="inline-block px-10 py-3 bg-white text-black font-medium tracking-wide text-sm hover:bg-zinc-200 transition-colors duration-500"
                  >
                    Request Founding Access
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-16 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <img
            src="/logo.png"
            alt="QCMix logo"
            className="h-12 mx-auto"
          />
          <a
            href="/contact"
            className="inline-block text-zinc-500 hover:text-zinc-300 transition-colors duration-500 tracking-[0.2em] uppercase text-xs"
          >
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}