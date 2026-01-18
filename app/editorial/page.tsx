'use client';

export default function EditorialPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url(/images/hero/editorial-hero.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Editorial Coverage</div>
          <h1 className="hero-title">
            <span className="gradient-text">Behind the Scene</span><br />
            Real Stories
          </h1>
          <p className="hero-description">
            Go behind the scenes with exclusive coverage of bartenders, bar owners,<br />
            musicians, and the culture that drives the Quad Cities scene.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/read/editorial'}>Read Stories</button>
            <button className="btn-secondary" onClick={() => window.location.href='/about'}>About Our Coverage</button>
          </div>
        </div>
      </section>

      {/* Editorial Categories */}
      <section className="features">
        <div className="section-header">
          <h2 className="section-title">What We Cover</h2>
          <p className="section-subtitle">Deep dives into every aspect of Quad Cities nightlife</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3 className="feature-title">Artist Profiles</h3>
            <p className="feature-description">In-depth interviews with local musicians, their creative process, and the venues that champion their music.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍸</div>
            <h3 className="feature-title">Bartender Spotlights</h3>
            <p className="feature-description">Meet the talented bartenders crafting amazing drinks and creating memorable experiences for customers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏢</div>
            <h3 className="feature-title">Venue Stories</h3>
            <p className="feature-description">The history, vision, and community impact of bars and venues that shape the local nightlife landscape.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎭</div>
            <h3 className="feature-title">Scene Culture</h3>
            <p className="feature-description">Exploring the traditions, innovations, and community spirit that make Quad Cities nightlife unique.</p>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="audience">
        <div className="section-header">
          <h2 className="section-title">Featured Stories</h2>
          <p className="section-subtitle">Recent coverage highlighting the best of our community</p>
        </div>
        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-bg audience-bg-1"></div>
            <div className="audience-content">
              <h3 className="audience-title">Rising Stars</h3>
              <p className="audience-description">Discover the emerging musicians making waves in local venues and building devoted followings.</p>
              <a href="/editorial/music" className="audience-link">Read More →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-2"></div>
            <div className="audience-content">
              <h3 className="audience-title">Craft Cocktails</h3>
              <p className="audience-description">Behind-the-bar with bartenders creating innovative drinks and elevating the cocktail scene.</p>
              <a href="/editorial/bartenders" className="audience-link">Explore →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-3"></div>
            <div className="audience-content">
              <h3 className="audience-title">Venue Owners</h3>
              <p className="audience-description">The entrepreneurs and visionaries creating spaces where community and culture flourish.</p>
              <a href="/editorial/bars" className="audience-link">Read Stories →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-4"></div>
            <div className="audience-content">
              <h3 className="audience-title">Community Events</h3>
              <p className="audience-description">Coverage of special events, festivals, and moments that bring the nightlife community together.</p>
              <a href="/read/editorial" className="audience-link">View Coverage →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Have a Story to Share?</h2>
          <p className="cta-description">
            We're always looking for compelling stories from the<br />
            Quad Cities nightlife community.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/about'}>Contact Editorial</button>
            <button className="btn-secondary" onClick={() => window.location.href='/read/editorial'}>Read All Stories</button>
          </div>
        </div>
      </section>
    </div>
  );
}
