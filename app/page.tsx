'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Smooth scroll
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href')!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Parallax effect on hero
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-content') as HTMLElement;
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = String(1 - scrolled / 800);
      }
    };

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animation = 'fadeInUp 0.8s ease forwards';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.feature-card, .audience-card').forEach(el => {
      observer.observe(el);
    });

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      <nav className="nav-fixed">
        <div className="logo">QCMix</div>
        <ul className="nav-links">
          <li><a href="/bars">Venues</a></li>
          <li><a href="/musicians">Music</a></li>
          <li><a href="/bartenders">Bartenders</a></li>
          <li><a href="/editorial">Editorial</a></li>
        </ul>
        <button className="nav-cta" onClick={() => window.location.href='/join'}>Join the Scene</button>
      </nav>

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Quad Cities Nightlife</div>
          <h1 className="hero-title">
            Your Night Starts<br />
            <span className="gradient-text">Right Here</span>
          </h1>
          <p className="hero-description">
            Discover the pulse of the Quad Cities. From hidden speakeasies to electric live music,<br />
            we connect you with the people, places, and moments that make nights unforgettable.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/bars'}>Explore the Scene</button>
            <button className="btn-secondary" onClick={() => window.location.href='/discover/music'}>Find Tonight's Vibe</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-header">
          <h2 className="section-title">Everything You Need</h2>
          <p className="section-subtitle">Your complete guide to the Quad Cities nightlife ecosystem</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🍸</div>
            <h3 className="feature-title">Curated Venues</h3>
            <p className="feature-description">Discover verified bars and clubs across the Quad Cities. From dive bars to upscale lounges, find exactly what you're looking for tonight.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎵</div>
            <h3 className="feature-title">Live Music</h3>
            <p className="feature-description">Never miss a beat. Track local bands, DJs, and live performances. See where they play, when they perform, and who they are.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📰</div>
            <h3 className="feature-title">Inside Stories</h3>
            <p className="feature-description">Go behind the scenes with exclusive coverage of bartenders, bar owners, musicians, and the culture that drives the scene.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3 className="feature-title">Scene Insights</h3>
            <p className="feature-description">Understand how everything connects. See the relationships between venues, artists, and industry players in one place.</p>
          </div>
        </div>
      </section>

      <section className="audience">
        <div className="section-header">
          <h2 className="section-title">Made For Everyone</h2>
          <p className="section-subtitle">Whether you pour drinks, play music, or just love the night—this is your platform</p>
        </div>
        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-bg audience-bg-1"></div>
            <div className="audience-content">
              <h3 className="audience-title">Bars & Owners</h3>
              <p className="audience-description">Showcase your venue to thousands. Connect with experienced bartenders, talented musicians, and loyal patrons who keep the night alive.</p>
              <a href="/bars" className="audience-link">Learn More →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-2"></div>
            <div className="audience-content">
              <h3 className="audience-title">Bartenders</h3>
              <p className="audience-description">Find your next opportunity. Build your reputation. Connect with bars that value your craft and customers who appreciate it.</p>
              <a href="/bartenders" className="audience-link">Get Started →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-3"></div>
            <div className="audience-content">
              <h3 className="audience-title">Musicians & Bands</h3>
              <p className="audience-description">Get discovered. Book more gigs. Build your following by connecting directly with venues and fans who want to see you perform.</p>
              <a href="/musicians" className="audience-link">Join Now →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-4"></div>
            <div className="audience-content">
              <h3 className="audience-title">Industry Partners</h3>
              <p className="audience-description">Distributors, suppliers, and industry pros—understand the landscape, connect with decision-makers, and see how the scene moves.</p>
              <a href="/industry" className="audience-link">Connect →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-5"></div>
            <div className="audience-content">
              <h3 className="audience-title">Promoters</h3>
              <p className="audience-description">Amplify your events. Reach the right audience. Make every night legendary by connecting with venues, talent, and the people who show up.</p>
              <a href="/promoters" className="audience-link">Promote →</a>
            </div>
          </div>
          <div className="audience-card">
            <div className="audience-bg audience-bg-6"></div>
            <div className="audience-content">
              <h3 className="audience-title">The Community</h3>
              <p className="audience-description">This is for you. Discover new spots, support local talent, and be part of what makes the Quad Cities nightlife special.</p>
              <a href="/discover" className="audience-link">Explore →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Join the Scene?</h2>
          <p className="cta-description">
            Connect with venues, musicians, and industry professionals.<br />
            Your night in the Quad Cities starts here.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/join'}>Join the Community</button>
            <button className="btn-secondary" onClick={() => window.location.href='/editorial'}>Read the Editorial</button>
          </div>
        </div>
      </section>

      <footer style={{ padding: '3rem 4rem', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.5)' }}>
        <p>&copy; 2026 QCMix. Documenting the Quad Cities nightlife.</p>
      </footer>
    </div>
  );
}