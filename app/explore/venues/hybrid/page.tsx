export default function HybridVenuesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Promoted Venue Block */}
        <div className="mb-12 rounded-lg border border-blue-600/30 bg-gradient-to-r from-blue-950/30 to-neutral-900 p-6">
          <div className="mb-2 text-sm font-medium text-blue-400">PROMOTED VENUE</div>
          <h2 className="mb-2 text-xl font-bold">Sample Hybrid Venue</h2>
          <p className="mb-4 text-neutral-300">
            Neighborhood bar that transforms into a music venue on weekends. Full bar program 
            with regular local shows and special events throughout the week.
          </p>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <span>West End</span>
            <span>•</span>
            <span>Bar + Live Music</span>
            <span>•</span>
            <span>Local & Touring Acts</span>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Hybrid Venues</h1>
          <p className="text-xl text-neutral-300">
            Versatile spaces that blend bar culture with live music, events, and unique experiences
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-2xl font-semibold">About Hybrid Venues</h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                Hybrid venues are the multitaskers of the Quad Cities nightlife scene. They function as bars or restaurants most of the time but transform into music venues, event spaces, or specialized entertainment experiences when the occasion calls for it.
              </p>
              <p>
                This versatility allows them to serve their communities in multiple ways throughout the week, adapting to different needs while maintaining their core identity and regular operations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">The Hybrid Advantage</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Versatile Programming</h3>
                <p className="text-neutral-300">
                  A single venue can offer quiet conversation on Tuesday, acoustic music on Thursday, and a full band with dancing on Saturday. This variety serves different moods and occasions.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Community Hub Function</h3>
                <p className="text-neutral-300">
                  By serving multiple functions, hybrid venues often become central gathering places for their neighborhoods, hosting everything from trivia nights to art shows to live performances.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Artist Opportunity</h3>
                <p className="text-neutral-300">
                  Musicians get more stage time because these venues can book shows regularly while maintaining their primary business model. More opportunities mean more chances to build audiences.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Economic Sustainability</h3>
                <p className="text-neutral-300">
                  The hybrid model allows venues to maintain consistent revenue from regular operations while adding special events and music as additional draws.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Common Hybrid Models</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Bar + Live Music</h3>
                <p className="text-neutral-300">
                  Regular bar service with a dedicated stage area for weekend shows, open mic nights, or special musical events.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Restaurant + Entertainment</h3>
                <p className="text-neutral-300">
                  Dinner service that transitions to late-night entertainment, from acoustic sets during dinner to dancing after the kitchen closes.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Event Space + Bar</h3>
                <p className="text-neutral-300">
                  Venues that host private events, art shows, community gatherings, or themed nights while maintaining regular bar operations.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Seasonal Adaptation</h3>
                <p className="text-neutral-300">
                  Spaces that change their programming based on season, weather, or community needs, offering outdoor events in summer and intimate indoor experiences in winter.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">What to Expect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Check the Schedule</h3>
                <p className="text-neutral-300">
                  The experience can vary dramatically based on what's programmed. A Tuesday visit might feel completely different from a Saturday night, so it's worth understanding the calendar.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Adaptable Environment</h3>
                <p className="text-neutral-300">
                  Lighting, seating arrangements, and even sound systems might change depending on the venue's current function. The space literally transforms to match its purpose.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Discovery Opportunities</h3>
                <p className="text-neutral-300">
                  Because they host diverse programming, hybrid venues are excellent for discovering new artists, trying different types of events, or experiencing unexpected entertainment.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Role in the Ecosystem</h2>
            <div className="rounded-lg bg-neutral-900 p-6">
              <p className="text-neutral-300">
                Hybrid venues fill important gaps in the nightlife ecosystem by providing more performance opportunities for artists while offering patrons variety and discovery. They bridge the space between dedicated music venues and traditional bars, creating a middle ground that serves both communities effectively.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}