'use client';

export default function DiscoverMusicPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Tonight's Vibe</div>
          <h1 className="hero-title">
            Find Your<br />
            <span className="gradient-text">Perfect Night</span>
          </h1>
          <p className="hero-description">
            From acoustic sets to electric performances, discover the music<br />
            and venues that match your mood tonight.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/musicians'}>Browse Artists</button>
            <button className="btn-secondary" onClick={() => window.location.href='/bars'}>Find Venues</button>
          </div>
        </div>
      </section>

      {/* Music Categories */}
      <section className="features">
        <div className="section-header">
          <h2 className="section-title">What's Your Vibe?</h2>
          <p className="section-subtitle">Discover live music across every genre in the Quad Cities</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎸</div>
            <h3 className="feature-title">Live Bands</h3>
            <p className="feature-description">Rock, indie, folk, and everything in between. Find where your favorite bands are playing tonight.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎹</div>
            <h3 className="feature-title">Solo Acts</h3>
            <p className="feature-description">Intimate performances from singer-songwriters, pianists, and acoustic artists in cozy venues.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3 className="feature-title">DJ Sets</h3>
            <p className="feature-description">Electronic beats, hip-hop, and dance music to keep you moving all night long.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3 className="feature-title">Open Mic</h3>
            <p className="feature-description">Discover emerging talent and maybe even take the stage yourself at weekly open mic nights.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Discover?</h2>
          <p className="cta-description">
            Find your perfect night out in the Quad Cities music scene.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/bars'}>Explore Venues</button>
            <button className="btn-secondary" onClick={() => window.location.href='/musicians'}>Meet Artists</button>
          </div>
        </div>
      </section>
    </div>
  );
}

        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Discover Local Music</h1>
          <p className="text-xl text-neutral-300">
            Understanding how the Quad Cities music scene works and where to find the sounds that move you
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-2xl font-semibold">How the Scene Works</h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                The Quad Cities music scene operates as a network of venues, artists, and supporters who work together to keep live music thriving. It's not just about individual shows—it's about the relationships and systems that make those shows possible and meaningful.
              </p>
              <p>
                Understanding these connections helps you discover not just music you'll love, but the venues and events where that music naturally appears, and the communities that support it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Discovery vs. Promotion</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Music Discovery</h3>
                <p className="text-neutral-300">
                  Discovery is about finding sounds, scenes, and experiences that resonate with you. It's exploratory and personal, focused on expanding your musical horizons through live experiences.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Artist Promotion</h3>
                <p className="text-neutral-300">
                  Promotion is about marketing specific musicians to build their audiences and careers. QC Mix focuses on discovery—helping you find great music—rather than promoting individual artists.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">The QC Mix Approach</h3>
                <p className="text-neutral-300">
                  We help you understand how the scene works, where different types of music happen, and how to navigate the ecosystem to find what you're looking for. The discovery happens when you attend shows.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">The Music Ecosystem</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Local Artists</h3>
                <p className="text-neutral-300">
                  Musicians who call the Quad Cities home, developing their craft in local venues and building audiences through consistent performance and community engagement.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Touring Acts</h3>
                <p className="text-neutral-300">
                  Artists from other cities who pass through the Quad Cities, often paired with local acts to create diverse lineups that benefit both audiences and local musicians.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Venue Networks</h3>
                <p className="text-neutral-300">
                  Venues that support each other by sharing artists, cross-promoting shows, and building circuits that help musicians reach audiences and audiences find music.
                </p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-medium">Music Communities</h3>
                <p className="text-neutral-300">
                  Groups of fans, supporters, and scene participants who attend shows, support artists, and help sustain the ecosystem through their active participation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">How Local Music Works</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Venue Relationships</h3>
                <p className="text-neutral-300">
                  Different venues develop reputations for booking certain types of music. Following venues whose taste aligns with yours leads to natural discovery of new artists and sounds.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Artist Networks</h3>
                <p className="text-neutral-300">
                  Musicians collaborate, recommend each other, and share stages. Following these connections helps you discover entire networks of related artists and musical styles.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Cross-Pollination</h3>
                <p className="text-neutral-300">
                  Local acts often open for touring musicians, and venues mix genres on the same bills. This creates opportunities to discover music outside your usual preferences.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Community Support</h3>
                <p className="text-neutral-300">
                  The scene thrives when audiences attend shows regularly, support venues as businesses, and help spread word about artists and events they enjoy.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Connecting with the Scene</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <a 
                href="/musicians"
                className="group rounded-lg bg-neutral-900 p-6 transition-colors hover:bg-neutral-800"
              >
                <h3 className="mb-3 text-lg font-medium group-hover:text-blue-400">
                  Learn About Musicians
                </h3>
                <p className="text-neutral-300">
                  Understand the different roles musicians play in the local scene and how they contribute to the ecosystem.
                </p>
              </a>
              
              <a 
                href="/editorial"
                className="group rounded-lg bg-neutral-900 p-6 transition-colors hover:bg-neutral-800"
              >
                <h3 className="mb-3 text-lg font-medium group-hover:text-blue-400">
                  Read Scene Stories
                </h3>
                <p className="text-neutral-300">
                  Explore editorial content about the people, places, and culture that shape the Quad Cities music scene.
                </p>
              </a>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Your Role in Discovery</h2>
            <div className="rounded-lg bg-neutral-900 p-6">
              <p className="text-neutral-300">
                Music discovery works best when you participate actively. Show up with curiosity, support the venues and artists that move you, and stay open to unexpected connections. The Quad Cities scene thrives when audiences engage not just as consumers, but as participants in a living musical community.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}