export default function BarsClubsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Promoted Venue Block */}
        <div className="mb-12 rounded-lg border border-blue-600/30 bg-gradient-to-r from-blue-950/30 to-neutral-900 p-6">
          <div className="mb-2 text-sm font-medium text-blue-400">PROMOTED VENUE</div>
          <h2 className="mb-2 text-xl font-bold">Sample Bar Name</h2>
          <p className="mb-4 text-neutral-300">
            Classic neighborhood bar with craft cocktails and local beer selection. 
            Known for welcoming atmosphere and expert bartenders who know the scene.
          </p>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <span>Downtown District</span>
            <span>•</span>
            <span>Craft Cocktails</span>
            <span>•</span>
            <span>Local Beers</span>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Bars & Clubs</h1>
          <p className="text-xl text-neutral-300">
            Traditional nightlife spaces focused on drinks, atmosphere, and social connection in the Quad Cities
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-2xl font-semibold">About Bars & Clubs</h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                Bars and clubs form the foundation of Quad Cities nightlife. These venues prioritize drinks, atmosphere, and creating spaces where people naturally connect and socialize. While some may occasionally feature live music or special events, their primary focus is hospitality and social experience.
              </p>
              <p>
                Each bar and club develops its own character through drink selection, interior design, music choices, and the community it attracts. This diversity means there's always a venue that matches what you're looking for on any given night.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Types of Experiences</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Cocktail Lounges</h3>
                <p className="text-neutral-300">
                  Craft cocktails, premium spirits, and intimate settings perfect for conversation and sophisticated nights out.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Sports Bars</h3>
                <p className="text-neutral-300">
                  Game day destinations with multiple screens, cold beer, and the energy of shared sports experiences.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Dance Clubs</h3>
                <p className="text-neutral-300">
                  High-energy spaces with DJ music, dance floors, and late-night atmosphere for moving and celebrating.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Neighborhood Pubs</h3>
                <p className="text-neutral-300">
                  Local gathering places with familiar faces, comfortable atmospheres, and the feeling of community.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">What Defines These Spaces</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Drink-Focused Experience</h3>
                <p className="text-neutral-300">
                  The bar program is central to the venue's identity. Whether it's craft cocktails, local beer selection, or classic drinks executed perfectly, beverages drive the experience.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Social Atmosphere</h3>
                <p className="text-neutral-300">
                  Layout, lighting, and ambiance are designed to encourage interaction. These spaces understand that people come to connect with others and create shared experiences.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Consistent Identity</h3>
                <p className="text-neutral-300">
                  Each venue cultivates a specific vibe and maintains it consistently. You know what to expect, which helps you choose the right place for your mood and occasion.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Role in the Nightlife Ecosystem</h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                Bars and clubs provide essential social infrastructure for the Quad Cities. They offer spaces for celebration, relaxation, and connection that complement but differ from live music venues and hybrid spaces.
              </p>
              <p>
                Many serve as community anchors in their neighborhoods, supporting local events and providing gathering places that strengthen social bonds. Their success depends on understanding and serving their specific communities well.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}