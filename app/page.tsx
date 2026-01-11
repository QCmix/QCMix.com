export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-12">
          {/* Hero Editorial */}
          <div className="md:col-span-8">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              QC Nights
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/70">
              Bars, Bartenders, and Music That Matter in the Quad Cities.
            </p>

            {/* Featured Story */}
            <article className="mt-10">
              <div className="aspect-[16/9] w-full rounded-lg bg-white/5" />
              <h2 className="mt-4 text-2xl font-semibold">
                Inside the Nights That Shape the Quad Cities
              </h2>
              <p className="mt-2 text-white/60">
                A closer look at the venues, people, and performances defining
                the current moment.
              </p>
            </article>
          </div>

          {/* Right Rail */}
          <aside className="md:col-span-4">
            <div className="space-y-6">
              <RailCard title="This Week" />
              <RailCard title="Featured Bar" />
              <RailCard title="Bartender Spotlight" />
              <RailCard title="Artist of the Week" />
            </div>
          </aside>
        </div>
      </section>

      {/* EDITORIAL SPINE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Main Editorial Column */}
          <div className="md:col-span-8 space-y-12">
            <EditorialBlock />
            <EditorialBlock />
            <EditorialBlock compact />
          </div>

          {/* Sticky Rail (Optional later) */}
          <div className="md:col-span-4 hidden md:block">
            <div className="sticky top-24 space-y-6">
              <RailCard title="QC Recommended" />
              <RailCard title="Upcoming Coverage" />
            </div>
          </div>
        </div>
      </section>

      {/* BARS */}
      <SectionBlock title="Bars">
        <CardRow />
      </SectionBlock>

      {/* BARTENDERS */}
      <SectionBlock title="Bartenders">
        <CardRow />
      </SectionBlock>

      {/* MUSIC */}
      <SectionBlock title="Music">
        <CardRow />
      </SectionBlock>

      {/* FOOTER STRIP */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 text-sm text-white/50">
          © QCmix — Quad Cities Culture, Curated.
        </div>
      </footer>
    </main>
  )
}

/* ---------- Components ---------- */

function RailCard({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
        {title}
      </h3>
      <div className="mt-3 aspect-[4/3] w-full rounded bg-white/10" />
      <p className="mt-3 text-sm text-white/60">
        Editorial spotlight curated by QCmix.
      </p>
    </div>
  )
}

function EditorialBlock({ compact }: { compact?: boolean }) {
  return (
    <article className="space-y-4">
      <div className="aspect-[16/9] w-full rounded-lg bg-white/5" />
      <h3 className={`font-semibold ${compact ? "text-xl" : "text-2xl"}`}>
        A Story That Explains the Scene
      </h3>
      <p className="text-white/60">
        Contextual reporting that focuses on why this moment matters.
      </p>
    </article>
  )
}

function SectionBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-semibold">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function CardRow() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border border-white/10 bg-white/5 p-4"
        >
          <div className="aspect-[4/3] rounded bg-white/10" />
          <h3 className="mt-3 font-semibold">Featured</h3>
          <p className="mt-1 text-sm text-white/60">
            Curated editorial selection.
          </p>
        </div>
      ))}
    </div>
  )
}
