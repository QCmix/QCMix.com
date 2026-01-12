import { GlobalNav } from './components/Nav'
import { Feature } from './components/Editorial'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <GlobalNav />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Bars, Bartenders, and Music That Shape the Quad Cities
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Independent editorial coverage of nightlife culture across the Quad Cities.
          </p>
        </div>
      </section>
      <Feature
        title="Raccoon Motel and the Value of Small Rooms"
        description="Why scale, not spectacle, still defines the strongest nights."
      />
    </main>
  )
}
