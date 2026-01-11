export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      {/* ================= HERO ================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12">
          {/* Editorial Hero */}
          <div className="md:col-span-8">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              QC Nights
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/70">
              Bars, Bartenders, and Music That Matter in the Quad Cities.
            </p>

            {/* Featured Story */}
            <article className="mt-14 max-w-2xl">
              <div className="aspect-[16/9] w-full rounded-lg bg-white/5" />
              <h2 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
                Inside the Nights That Shape the Quad Cities
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/60">
                A closer look at the venues, people, and performances defining
                the current moment.
              </p>
            </article>
          </div>

          {/* Desktop Rail */}
          <aside className="hidden md:col-span-4 md:block">
            <div className="space-y-8">
              <RailCard title="This Week" />
              <RailCard title="Featured Bar" />
              <RailCard title="Bartender Spotlight" />
              <RailCard title="Artist of the Week" />
            </div>
          </aside>
        </div>
      </section>

      {/* ================= EDITORIAL SPINE ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Main Editorial Column */}
          <div className="md:col-span-8 space-y-16">
            <EditorialBlock />
            <EditorialBlock />
            <EditorialBlock compact />
          </div>

          {/* Sticky Desktop Rail */}
          <div className="hidden md:col-span-4 md:block">
            <div className="sticky top-28 space-y-8">
              <RailCard title="QC Recommended" />
              <RailCard title="Upcoming Coverage" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= BARS ================= */}
      <SectionBlock title="Bars">
        <CardRow />
      </SectionBlock>

      {/* ================= BARTENDERS ================= */}
      <SectionBlock title="Bartenders">
        <CardRow />
      </SectionBlock>

      {/* ================= MUSIC ================= */}
      <SectionBlock title="Music">
        <CardRow />
      </SectionBlock>

      {/* ================= MOBILE RAIL (DEFERRED) ================= */}
      <section className="border-t border-white/10 py-16 md:hidden">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          <RailCard title="Featured Bar" />
          <RailCard title="Bartender Spotlight" />
          <RailCard title="Artist of the Week" />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-14">
        <div className="mx-auto max-w-7xl px-6 text-sm text-white/50">
          © QCmix — Quad Cities Culture, Curated.
        </div>
      </footer>
    </main>
  )
}

/* ================= COMPONENTS ================= */

function RailCard({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60">
        {title}
      </h3>
      <div className="mt-4 aspect-[4/3] rounded bg-white/10" />
      <p className="mt-4 text-sm leading-relaxed text-white/60">
        Editorial spotlight curated by QCmix.
      </p>
    </div>
  )
}

function EditorialBlock({ compact }: { compact?: boolean }) {
  return (
    <article className="max-w-2xl space-y-4">
      <div className="aspect-[16/9] rounded-lg bg-white/5" />
      <h3
        className={`font-semibold tracking-tight ${
          compact
            ? "text-xl"
            : "text-2xl sm:text-3xl"
        }`}
      >
        A Story That Explains the Scene
      </h3>
      <p className="text-base leading-relaxed text-white/60">
        Contextual reporting focused on why this moment matters — not just
        what happened.
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
    <section className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

function CardRow() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
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
