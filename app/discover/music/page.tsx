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