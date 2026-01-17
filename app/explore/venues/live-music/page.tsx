export default function LiveMusicPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Promoted Venue Block */}
        <div className="mb-12 rounded-lg border border-blue-600/30 bg-gradient-to-r from-blue-950/30 to-neutral-900 p-6">
          <div className="mb-2 text-sm font-medium text-blue-400">PROMOTED VENUE</div>
          <h2 className="mb-2 text-xl font-bold">Sample Music Venue</h2>
          <p className="mb-4 text-neutral-300">
            Intimate listening room showcasing local and touring artists. Committed to 
            supporting emerging talent and providing quality sound for every performance.
          </p>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <span>Arts District</span>
            <span>•</span>
            <span>150 Capacity</span>
            <span>•</span>
            <span>All Ages Welcome</span>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Live Music Venues</h1>
          <p className="text-xl text-neutral-300">
            Dedicated spaces where music takes center stage and artists connect directly with audiences
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-2xl font-semibold">About Live Music Venues</h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                Live music venues are purpose-built spaces where the primary focus is showcasing musical performances. These venues prioritize sound quality, artist comfort, and audience experience over other forms of entertainment or hospitality.
              </p>
              <p>
                In the Quad Cities, live music venues range from intimate listening rooms to mid-sized concert spaces. Each is designed to create optimal conditions for both performers and audiences to experience music as it was meant to be heard—live and immediate.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Why Small Rooms Matter</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Intimate Connection</h3>
                <p className="text-neutral-300">
                  Small venues create proximity between artist and audience that's impossible in larger spaces. Every nuance of performance is audible and visible, creating shared experiences that feel personal.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Artist Development</h3>
                <p className="text-neutral-300">
                  These rooms serve as training grounds where musicians develop stage presence, test new material, and learn to connect with audiences. They're essential for building the skills that serve artists throughout their careers.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Musical Discovery</h3>
                <p className="text-neutral-300">
                  Small venues often pair local artists with touring acts, creating opportunities for audiences to discover new music they wouldn't encounter otherwise.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Community Building</h3>
                <p className="text-neutral-300">
                  Regular attendees become part of a music community that supports both local and visiting artists, creating networks that strengthen the entire scene.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Types of Music Venues</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Listening Rooms</h3>
                <p className="text-neutral-300">
                  Intimate spaces designed for acoustic performances and attentive audiences, often featuring singer-songwriters and small ensembles.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Rock Clubs</h3>
                <p className="text-neutral-300">
                  High-energy venues equipped for electric performances where bands can play at full volume and audiences can feel the music physically.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Multi-Genre Rooms</h3>
                <p className="text-neutral-300">
                  Versatile spaces that adapt to different musical styles, from jazz to indie rock to experimental sounds, often with flexible seating arrangements.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">All-Ages Venues</h3>
                <p className="text-neutral-300">
                  Spaces specifically designed to welcome music fans regardless of age, often focusing on community building and early show times.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">How Live Music Works Locally</h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                Live music venues operate as cultural anchors in the Quad Cities music ecosystem. They provide essential infrastructure for artists to perform, audiences to discover music, and communities to gather around shared musical experiences.
              </p>
              <p>
                These venues often work together, sharing artists and cross-promoting shows to build circuits that benefit both local and touring musicians. This collaboration helps create a sustainable environment where live music can thrive consistently.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Supporting Live Music</h2>
            <div className="rounded-lg bg-neutral-900 p-6">
              <p className="text-neutral-300">
                Live music venues depend on consistent audience support to remain viable. Attending shows, purchasing drinks and merchandise, and respecting the listening environment all contribute to keeping these essential cultural spaces operating and booking diverse, interesting acts.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}