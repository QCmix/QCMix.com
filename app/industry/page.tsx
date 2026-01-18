'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industry Partners & Distributors | QCMix - Quad Cities B2B Nightlife",
  description: "Connect with bars, venues, and nightlife businesses in the Quad Cities as a distributor, supplier, or industry professional. Access the complete ecosystem.",
  keywords: "distributors, suppliers, Quad Cities B2B, beverage distribution, industry partners, nightlife suppliers",
  openGraph: {
    title: "Industry Partners | QCMix - Connect with Quad Cities Nightlife",
    description: "Access the Quad Cities nightlife business network. Connect with venues, bars, and suppliers.",
    url: "https://qcmix.com/industry",
  },
};

export default function IndustryPage() {
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
          <div className="hero-subtitle">Industry Partners</div>
          <h1 className="hero-title">
            <span className="gradient-text">Connect</span><br />
            With the Industry
          </h1>
          <p className="hero-description">
            Distributors, suppliers, and industry professionals—understand the landscape,<br />
            connect with decision-makers, and see how the scene moves.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/industry/join'}>Join as Partner</button>
            <button className="btn-secondary" onClick={() => window.location.href='/bars'}>Browse Venues</button>
          </div>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="features">
        <div className="section-header">
          <h2 className="section-title">Industry Solutions</h2>
          <p className="section-subtitle">Comprehensive tools for every aspect of the nightlife industry</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3 className="feature-title">Distributors</h3>
            <p className="feature-description">Connect with venues, track orders, and understand local market demand patterns across the Quad Cities.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏭</div>
            <h3 className="feature-title">Suppliers</h3>
            <p className="feature-description">Reach bar owners directly, showcase products, and build lasting partnerships with quality venues.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Market Analytics</h3>
            <p className="feature-description">Access detailed insights about venue preferences, seasonal trends, and emerging opportunities.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3 className="feature-title">B2B Networking</h3>
            <p className="feature-description">Build relationships with venue owners, event promoters, and other industry professionals.</p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="audience">
        <div className="section-header">
          <h2 className="section-title">Partner With Us</h2>
          <p className="section-subtitle">Join the network that powers Quad Cities nightlife</p>
        </div>
        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-bg audience-bg-1"></div>
            <div className="audience-content">
              <h3 className="audience-title">Beverage Distributors</h3>
              <p className="audience-description">Connect with venues seeking quality products and streamline the ordering and delivery process.</p>
              <a href="/industry/join" className="audience-link">Join Network →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-2"></div>
            <div className="audience-content">
              <h3 className="audience-title">Equipment Suppliers</h3>
              <p className="audience-description">Reach bar owners upgrading their equipment and building new venues across the region.</p>
              <a href="/industry/join" className="audience-link">Get Listed →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-3"></div>
            <div className="audience-content">
              <h3 className="audience-title">Service Providers</h3>
              <p className="audience-description">Offer specialized services like POS systems, security, cleaning, and maintenance to venues.</p>
              <a href="/industry/join" className="audience-link">Partner Up →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-4"></div>
            <div className="audience-content">
              <h3 className="audience-title">Consultants</h3>
              <p className="audience-description">Share expertise in business operations, marketing, compliance, and venue optimization.</p>
              <a href="/industry/join" className="audience-link">Share Expertise →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Connect?</h2>
          <p className="cta-description">
            Join the industry network that supports the best<br />
            of Quad Cities nightlife.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/industry/join'}>Become a Partner</button>
            <button className="btn-secondary" onClick={() => window.location.href='/about'}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}