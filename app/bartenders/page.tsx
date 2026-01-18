'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bartenders Jobs in Quad Cities | QCMix - Find Work & Grow Your Career",
  description: "Professional bartenders in the Quad Cities can find jobs, connect with bars and venues, and grow their career. Discover opportunities in Davenport, Bettendorf, and beyond.",
  keywords: "bartender jobs Quad Cities, bartending Davenport, bar jobs Iowa, bartender network, employment opportunities, career growth",
  openGraph: {
    title: "Bartender Jobs & Opportunities | QCMix - Quad Cities",
    description: "Find bartending positions and grow your career in Quad Cities venues. Connect with established bars and build your reputation.",
    url: "https://qcmix.com/bartenders",
  },
};

export default function BartendersPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url(/images/hero/bartenders-hero.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Professional Bartenders</div>
          <h1 className="hero-title">
            Find Your<br />
            <span className="gradient-text">Next Opportunity</span>
          </h1>
          <p className="hero-description">
            Build your reputation. Connect with bars that value your craft<br />
            and customers who appreciate quality drinks.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/join/bartender'}>Start Building Profile</button>
            <button className="btn-secondary" onClick={() => window.location.href='/bars'}>Browse Opportunities</button>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="features">
        <div className="section-header">
          <h2 className="section-title">The Bartending Reality</h2>
          <p className="section-subtitle">Challenges every professional bartender faces</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3 className="feature-title">Job Search Struggle</h3>
            <p className="feature-description">Finding quality bar positions often relies on word-of-mouth and timing rather than showcasing your skills.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3 className="feature-title">Recognition Gap</h3>
            <p className="feature-description">Your craft skills and customer service excellence aren't always visible to potential employers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💸</div>
            <h3 className="feature-title">Inconsistent Income</h3>
            <p className="feature-description">Part-time schedules and seasonal fluctuations make financial planning challenging.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3 className="feature-title">High Turnover</h3>
            <p className="feature-description">The industry's reputation for instability affects career growth and professional development.</p>
          </div>
        </div>
      </section>

      {/* Solutions for Bartenders */}
      <section className="audience">
        <div className="section-header">
          <h2 className="section-title">Elevate Your Career</h2>
          <p className="section-subtitle">Everything you need to advance as a professional bartender</p>
        </div>
        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-bg audience-bg-1"></div>
            <div className="audience-content">
              <h3 className="audience-title">Professional Profile</h3>
              <p className="audience-description">Showcase your skills, experience, and signature drinks to attract quality employers who value expertise.</p>
              <a href="/join/bartender" className="audience-link">Build Profile →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-2"></div>
            <div className="audience-content">
              <h3 className="audience-title">Direct Connections</h3>
              <p className="audience-description">Connect directly with bar owners and managers who are actively seeking experienced bartenders.</p>
              <a href="/bars" className="audience-link">Find Opportunities →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-3"></div>
            <div className="audience-content">
              <h3 className="audience-title">Skill Recognition</h3>
              <p className="audience-description">Get verified reviews from customers and colleagues that demonstrate your professional expertise.</p>
              <a href="/editorial" className="audience-link">Success Stories →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-4"></div>
            <div className="audience-content">
              <h3 className="audience-title">Industry Network</h3>
              <p className="audience-description">Build relationships with other bartenders, venue owners, and industry professionals for career growth.</p>
              <a href="/discover" className="audience-link">Join Community →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Advance Your Career?</h2>
          <p className="cta-description">
            Join professional bartenders building their reputation<br />
            in the Quad Cities nightlife scene.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/join/bartender'}>Build Your Profile</button>
            <button className="btn-secondary" onClick={() => window.location.href='/bars'}>Browse Opportunities</button>
          </div>
        </div>
      </section>
    </div>
  );
}
