export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <span className="meta uppercase tracking-widest">QC Nights</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
              Bars, Bartenders, and Music  
              That Shape the Quad Cities
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70">
              Independent editorial coverage of the spaces, people, and nights
              that define Quad Cities nightlife.
            </p>
            <article className="mt-16 max-w-2xl">
              <div className="aspect-[16/9] qc-img" />
              <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight">
                Why Some Rooms Last
              </h2>
              <p className="mt-3 text-white/60">
                Looking at the bars and venues that outlast trends.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}