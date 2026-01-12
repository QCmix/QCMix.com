export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">{description}</p>
      </div>
    </section>
  )
}

export function Feature({ title, description }: { title: string; description: string }) {
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

export function GridCard({ title, description, isPaid }: { title: string; description: string; isPaid?: boolean }) {
  return (
    <div className="surface p-4">
      <div className="aspect-[4/3] qc-img qc-img-muted" />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/60">{description}</p>
      {isPaid && <span className="meta mt-2 block">Paid placement</span>}
    </div>
  )
}

export function Grid({ title, items }: { title: string; items: any[] }) {
  return (
    <section className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 pl-4 text-3xl font-semibold accent-rule">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <GridCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
