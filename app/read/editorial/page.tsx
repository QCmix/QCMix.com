export default function ReadEditorialPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Read the Editorial</h1>
          <p className="text-xl text-neutral-300">
            Stories, insights, and perspectives from the Quad Cities nightlife and music scene
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-2xl font-semibold">What QC Mix Covers</h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                QC Mix editorial focuses on the culture, people, and places that make up the Quad Cities nightlife and music ecosystem. We write about venues and their stories, artists and their contributions to the scene, and the connections that make it all work together.
              </p>
              <p>
                Our coverage emphasizes context and perspective rather than breaking news or event announcements. We aim to help you understand not just what's happening, but why it matters and how it fits into the bigger picture of local culture.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Types of Stories</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Venue Features</h3>
                <p className="text-neutral-300">
                  Deep dives into what makes specific venues special, their history, and their role in the community they serve.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Music Scene Analysis</h3>
                <p className="text-neutral-300">
                  Exploration of how the local music ecosystem works, trends in the scene, and artist contributions to local culture.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Industry Insights</h3>
                <p className="text-neutral-300">
                  Behind-the-scenes looks at how the business of nightlife and live music actually operates in the Quad Cities.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">What We Don't Do</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Event Listings</h3>
                <p className="text-neutral-300">
                  We don't provide comprehensive event calendars or show listings. Instead, we help you understand the venues and contexts where interesting events naturally happen.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Reviews or Ratings</h3>
                <p className="text-neutral-300">
                  We don't rate venues or performances. Our goal is understanding and context, not judgment or consumer guidance in a traditional review sense.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Breaking News</h3>
                <p className="text-neutral-300">
                  We focus on deeper stories and analysis rather than immediate news coverage. Our timeline is driven by insight and perspective, not speed.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Comprehensive Coverage</h3>
                <p className="text-neutral-300">
                  We don't attempt to cover everything that happens in the scene. Instead, we focus on stories that illuminate how the ecosystem works and why it matters.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Why Documentation Matters</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Preserving Scene History</h3>
                <p className="text-neutral-300">
                  Local music and nightlife scenes are constantly evolving. Documenting current moments helps preserve the stories and context that might otherwise be lost.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Building Understanding</h3>
                <p className="text-neutral-300">
                  Explaining how venues operate, how artists develop, and how communities form helps people participate more meaningfully in the scene they're part of.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Connecting Communities</h3>
                <p className="text-neutral-300">
                  Different parts of the scene don't always intersect naturally. Editorial content can bridge these gaps and introduce people to aspects they might not discover on their own.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Celebrating Contributions</h3>
                <p className="text-neutral-300">
                  Many people make the scene work—from venue owners to sound engineers to door staff. Recognizing these contributions helps build appreciation for the ecosystem's complexity.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Our Editorial Approach</h2>
            <div className="rounded-lg bg-neutral-900 p-6">
              <div className="space-y-4 text-neutral-300">
                <p>
                  We approach editorial content from the position that local scenes matter—that the venues, artists, and cultural moments in the Quad Cities deserve thoughtful attention and documentation.
                </p>
                <p>
                  Our perspective is that of participants in the scene rather than outside observers. We write for people who care about this community and want to understand how it works and why it thrives.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Explore the Stories</h2>
            <div className="rounded-lg bg-neutral-900 p-6">
              <p className="mb-4 text-neutral-300">
                Ready to dive deeper into the stories behind the Quad Cities nightlife and music scene? Our editorial content is organized by topic to help you find the perspectives most relevant to your interests.
              </p>
              <a 
                href="/editorial"
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Read Editorial Content
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}