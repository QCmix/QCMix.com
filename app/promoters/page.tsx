'use client';

export default function PromotersPage() {
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
          <div className="hero-subtitle">Event Promotion</div>
          <h1 className="hero-title">
            <span className="gradient-text">Amplify</span><br />
            Your Events
          </h1>
          <p className="hero-description">
            Reach the right audience. Make every night legendary by connecting with<br />
            venues, talent, and the people who show up.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/join'}>Start Promoting</button>
            <button className="btn-secondary" onClick={() => window.location.href='/bars'}>Find Venues</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2 className="section-title">Promote Like a Pro</h2>
          <p className="section-subtitle">Everything you need to make your events unforgettable</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Targeted Reach</h3>
            <p className="feature-description">Connect directly with your ideal audience through our network of venues, artists, and nightlife enthusiasts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3 className="feature-title">Venue Partnerships</h3>
            <p className="feature-description">Build lasting relationships with bar owners and venue managers who value quality events.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3 className="feature-title">Event Analytics</h3>
            <p className="feature-description">Track your success and understand your audience with detailed event performance insights.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎵</div>
            <h3 className="feature-title">Artist Network</h3>
            <p className="feature-description">Discover and book talented local musicians and DJs for your events.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Promote?</h2>
          <p className="cta-description">
            Join our community of successful event promoters in the Quad Cities.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/join'}>Get Started</button>
            <button className="btn-secondary" onClick={() => window.location.href='/editorial'}>Success Stories</button>
          </div>
        </div>
      </section>
    </div>
  );
}