export default function BarsPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <Header
        title="Bars"
        description="The rooms, layouts, and neighborhoods that shape nightlife in the Quad Cities."
      />
      <Feature
        title="Why Certain Bars Endure"
        description="Some spaces last because they adapt. Others because they never needed to."
      />
      <Grid title="QC Recommended Bars" />
    </main>
  )
}

function Header({ title, description }: { title: string; description: string }) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">{description}</p>
      </div>
    </section>
  )
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <article className="max-w-2xl">
        <div className="aspect-[16/9] qc-img" />
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-3 text-white/60">{description}</p>
      </article>
    </section>
  )
}

function Grid({ title }: { title: string }) {
  return (
    <section className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 pl-4 text-3xl font-semibold accent-rule">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="surface p-4">
              <div className="aspect-[4/3] qc-img qc-img-muted" />
              <h3 className="mt-3 font-semibold">Editorial Feature</h3>
              <p className="mt-1 text-sm text-white/60">Context-driven coverage.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
