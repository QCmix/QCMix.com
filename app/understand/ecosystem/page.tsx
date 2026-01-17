export default function UnderstandEcosystemPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Understand the Nightlife Ecosystem</h1>
          <p className="text-xl text-neutral-300">
            How bars, bartenders, musicians, and patrons work together to create the Quad Cities scene
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-2xl font-semibold">The Four Essential Groups</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Venues (Bars & Clubs)</h3>
                <p className="text-neutral-300">
                  Provide the physical spaces, atmosphere, and infrastructure that make nightlife possible. They create environments where people gather and experiences happen.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Bartenders & Staff</h3>
                <p className="text-neutral-300">
                  The human interface between venues and patrons. They create connections, ensure quality experiences, and often serve as cultural ambassadors for their venues.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Musicians & Artists</h3>
                <p className="text-neutral-300">
                  Bring live energy and cultural content to venues. They create moments that transform ordinary spaces into memorable experiences and cultural events.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Patrons & Audiences</h3>
                <p className="text-neutral-300">
                  The community that supports venues through attendance and spending, creating demand for experiences and providing the social energy that makes venues thrive.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">How They Depend on Each Other</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-medium">Venues ↔ Bartenders & Staff</h3>
                <p className="text-neutral-300">
                  Venues depend on skilled bartenders to execute their vision and create consistent experiences. Bartenders depend on venues for employment opportunities and platforms to develop their hospitality skills.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-medium">Venues ↔ Musicians</h3>
                <p className="text-neutral-300">
                  Venues book musicians to enhance atmosphere and draw audiences. Musicians need venues as platforms to perform, test new material, and build followings in the community.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-medium">Bartenders ↔ Patrons</h3>
                <p className="text-neutral-300">
                  Bartenders create personal connections that keep patrons returning to specific venues. Patrons provide the social energy and financial support that make bartending both viable and rewarding.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-medium">Musicians ↔ Audiences</h3>
                <p className="text-neutral-300">
                  Artists perform for audiences who provide both immediate energy during shows and longer-term support for their careers. Audiences discover new music and experiences through live performance.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">What QC Mix Is</h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                QC Mix is an information platform designed to strengthen the connections between these four groups. We provide context that helps patrons discover venues and music, help venues connect with appropriate audiences, and help everyone understand how the scene works.
              </p>
              <p>
                We focus exclusively on real places, real people, and actual experiences in the Quad Cities. Everything on the platform is designed to support genuine businesses and authentic community connections in the physical world.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">What QC Mix Is Not</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Not a Booking Platform</h3>
                <p className="text-neutral-300">
                  We don't handle reservations, ticketing, or event planning. We provide information that leads to direct relationships between you and venues.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Not a Review Site</h3>
                <p className="text-neutral-300">
                  We provide context and understanding rather than ratings or consumer reviews. Our goal is insight, not judgment or comparison.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Not a Social Network</h3>
                <p className="text-neutral-300">
                  We focus on connecting people to places and experiences in the real world rather than creating online communities or social interactions.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Not a Marketplace</h3>
                <p className="text-neutral-300">
                  We don't facilitate transactions, sales, or commerce. We provide information that supports direct business relationships.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Supporting a Healthy Ecosystem</h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                A sustainable nightlife and music ecosystem requires all four groups to thrive simultaneously. Venues need consistent audiences, bartenders need fair compensation and career development, musicians need performance opportunities and audience support, and patrons need quality experiences and vibrant cultural options.
              </p>
              <p>
                When these relationships work well, they create a positive feedback loop: great venues attract skilled bartenders and interesting artists, which draws appreciative audiences, which supports the venues' ability to continue providing excellent experiences.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Industry Participation</h2>
            <div className="rounded-lg bg-neutral-900 p-6">
              <p className="mb-4 text-neutral-300">
                If you work professionally in the Quad Cities nightlife or music industry—whether as a venue owner, bartender, musician, booking agent, or in another capacity—you can connect with our industry network for resources and community.
              </p>
              <a 
                href="/industry/join"
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Learn About Industry Network
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}