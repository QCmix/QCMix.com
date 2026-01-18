'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Musicians in the Quad Cities | QCMix - Book Gigs & Promote Music",
  description: "Musicians and artists in the Quad Cities can discover venues, book gigs, and build audiences. Connect with Davenport, Bettendorf, and Cedar Rapids venues for live performances.",
  keywords: "Quad Cities musicians, local bands, live music, music venues Iowa, booking agent, artist network, perform locally",
  openGraph: {
    title: "Quad Cities Musicians | QCMix - Book Your Next Gig",
    description: "Connect with venues and book performances in the Quad Cities. Grow your music career locally.",
    url: "https://qcmix.com/musicians",
  },
};

export default function MusiciansPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url(/images/hero/musicians-hero.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Musicians & Artists</div>
          <h1 className="hero-title">
            Get <span className="gradient-text">Discovered</span><br />
            Book More Gigs
          </h1>
          <p className="hero-description">
            Build your following by connecting directly with venues and fans<br />
            who want to see you perform in the Quad Cities.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/join/musician'}>Join as Artist</button>
            <button className="btn-secondary" onClick={() => window.location.href='/bars'}>Find Venues</button>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="features">
        <div className="section-header">
          <h2 className="section-title">The Musician's Journey</h2>
          <p className="section-subtitle">Every artist faces these challenges in building their career</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3 className="feature-title">Finding Gigs</h3>
            <p className="feature-description">Venue booking is often about who you know, making it hard for new talent to break in.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3 className="feature-title">Building Audience</h3>
            <p className="feature-description">Growing a fanbase requires consistent exposure and connection with music lovers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">Promotion Struggles</h3>
            <p className="feature-description">Social media algorithms make it difficult to reach people who actually want to hear your music.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3 className="feature-title">Industry Connections</h3>
            <p className="feature-description">Networking with other musicians, venue owners, and industry professionals takes time and effort.</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="audience">
        <div className="section-header">
          <h2 className="section-title">Your Path to Success</h2>
          <p className="section-subtitle">Everything you need to advance your music career</p>
        </div>
        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-bg audience-bg-1"></div>
            <div className="audience-content">
              <h3 className="audience-title">Direct Venue Access</h3>
              <p className="audience-description">Connect directly with bar owners and venue managers who are actively looking for talent.</p>
              <a href="/bars" className="audience-link">Browse Venues →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-2"></div>
            <div className="audience-content">
              <h3 className="audience-title">Fan Discovery</h3>
              <p className="audience-description">Reach music lovers who are actively looking for new artists and live performances to attend.</p>
              <a href="/join/musician" className="audience-link">Build Fanbase →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-3"></div>
            <div className="audience-content">
              <h3 className="audience-title">Performance History</h3>
              <p className="audience-description">Build your reputation with verified performance history and fan reviews from real shows.</p>
              <a href="/editorial" className="audience-link">Success Stories →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-4"></div>
            <div className="audience-content">
              <h3 className="audience-title">Community Network</h3>
              <p className="audience-description">Connect with other musicians, collaborate on projects, and build lasting industry relationships.</p>
              <a href="/discover" className="audience-link">Join Network →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Take the Stage?</h2>
          <p className="cta-description">
            Join hundreds of musicians building their careers<br />
            in the Quad Cities music scene.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/join/musician'}>Join as Artist</button>
            <button className="btn-secondary" onClick={() => window.location.href='/editorial'}>Read Success Stories</button>
          </div>
        </div>
      </section>
    </div>
  );
}
