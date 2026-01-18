'use client';

export default function BarsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url(/images/hero/bars-hero.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Bar & Venue Owners</div>
          <h1 className="hero-title">
            Your bar isn't just<br />
            <span className="gradient-text">a room</span>
          </h1>
          <p className="hero-description">
            Visibility, talent access, and community—make your venue stand out<br />
            in the Quad Cities nightlife scene.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/join/bar-owner'}>Claim Your Profile</button>
            <button className="btn-secondary" onClick={() => window.location.href='/musicians'}>Find Talent</button>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="features">
        <div className="section-header">
          <h2 className="section-title">The Reality</h2>
          <p className="section-subtitle">Challenges every bar owner faces in today's landscape</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎵</div>
            <h3 className="feature-title">Fragmented Booking</h3>
            <p className="feature-description">Finding and booking quality talent is scattered across multiple platforms and personal connections.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📢</div>
            <h3 className="feature-title">Inconsistent Promotion</h3>
            <p className="feature-description">Event promotion relies on social media algorithms and word-of-mouth with unpredictable reach.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3 className="feature-title">Offline Reputation</h3>
            <p className="feature-description">Your venue's reputation and community impact isn't captured or showcased online.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3 className="feature-title">Staff Turnover</h3>
            <p className="feature-description">Finding experienced bartenders and reliable staff is an ongoing challenge.</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="audience">
        <div className="section-header">
          <h2 className="section-title">The QCMix Solution</h2>
          <p className="section-subtitle">Everything you need to elevate your venue</p>
        </div>
        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-bg audience-bg-1"></div>
            <div className="audience-content">
              <h3 className="audience-title">Verified Profile</h3>
              <p className="audience-description">Showcase your venue with credibility and reach thousands of potential customers looking for their next night out.</p>
              <a href="/join/bar-owner" className="audience-link">Get Verified →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-2"></div>
            <div className="audience-content">
              <h3 className="audience-title">Talent Discovery</h3>
              <p className="audience-description">Connect directly with musicians, DJs, and experienced bartenders in your area who are actively seeking opportunities.</p>
              <a href="/musicians" className="audience-link">Find Talent →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-3"></div>
            <div className="audience-content">
              <h3 className="audience-title">Event Amplification</h3>
              <p className="audience-description">Promote your events to the right crowd through our network of music lovers and nightlife enthusiasts.</p>
              <a href="/editorial" className="audience-link">Learn More →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-4"></div>
            <div className="audience-content">
              <h3 className="audience-title">Editorial Features</h3>
              <p className="audience-description">Get featured in our editorial coverage and build your reputation as a cornerstone of the local music scene.</p>
              <a href="/editorial" className="audience-link">View Features →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Elevate Your Venue?</h2>
          <p className="cta-description">
            Join the community of successful bar owners showcasing the best<br />
            of Quad Cities nightlife.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/join/bar-owner'}>Claim Your Profile</button>
            <button className="btn-secondary" onClick={() => window.location.href='/about'}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
