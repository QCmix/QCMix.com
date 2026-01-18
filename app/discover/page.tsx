'use client';

export default function DiscoverPage() {
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
          <div className="hero-subtitle">Explore & Discover</div>
          <h1 className="hero-title">
            <span className="gradient-text">Discover</span><br />
            Your Scene
          </h1>
          <p className="hero-description">
            Find new spots, support local talent, and be part of what makes<br />
            the Quad Cities nightlife special.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/bars'}>Find Venues</button>
            <button className="btn-secondary" onClick={() => window.location.href='/musicians'}>Discover Artists</button>
          </div>
        </div>
      </section>

      {/* Discovery Grid */}
      <section className="audience">
        <div className="section-header">
          <h2 className="section-title">What Will You Discover?</h2>
          <p className="section-subtitle">Explore every aspect of the Quad Cities nightlife scene</p>
        </div>
        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-bg audience-bg-1"></div>
            <div className="audience-content">
              <h3 className="audience-title">Hidden Gems</h3>
              <p className="audience-description">Uncover secret speakeasies, intimate cocktail bars, and local favorites that only insiders know about.</p>
              <a href="/bars" className="audience-link">Explore Venues →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-2"></div>
            <div className="audience-content">
              <h3 className="audience-title">Live Music</h3>
              <p className="audience-description">Discover emerging artists, catch established acts, and find the perfect soundtrack to your night.</p>
              <a href="/musicians" className="audience-link">Find Music →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-3"></div>
            <div className="audience-content">
              <h3 className="audience-title">Craft Cocktails</h3>
              <p className="audience-description">Meet the talented bartenders creating amazing drinks and learn about the craft behind every pour.</p>
              <a href="/bartenders" className="audience-link">Meet Bartenders →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-4"></div>
            <div className="audience-content">
              <h3 className="audience-title">Community Events</h3>
              <p className="audience-description">Stay connected with trivia nights, live performances, and special events happening around the cities.</p>
              <a href="/editorial" className="audience-link">See Events →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Start Your Discovery</h2>
          <p className="cta-description">
            Join thousands exploring the best of Quad Cities nightlife.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/join'}>Join the Community</button>
            <button className="btn-secondary" onClick={() => window.location.href='/about'}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}