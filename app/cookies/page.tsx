export const metadata = {
  title: 'Cookie Policy | QCMix - Quad Cities Nightlife',
  description: 'Learn about how QCMix uses cookies and similar technologies to enhance your experience on the Quad Cities nightlife platform.',
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      {/* Hero */}
      <section className="hero pt-20">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Legal</div>
          <h1 className="hero-title">
            Cookie <span className="gradient-text">Policy</span>
          </h1>
          <p className="hero-description">
            How we use cookies to improve your QCMix experience in the Quad Cities nightlife community.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">What Are Cookies?</h2>
            <p className="text-white/80 leading-relaxed">
              Cookies are small data files that are stored on your browser or device. They help websites remember information about your visit, such as your preferences and login status. QCMix uses cookies to enhance your experience on our platform connecting bartenders, musicians, venues, and patrons in the Quad Cities.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-qc-primary mb-2">Essential Cookies</h3>
                <p className="text-white/80">
                  These cookies are necessary for the website to function. They enable core functionality such as login, user authentication, and platform security. These cannot be disabled.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-qc-orange mb-2">Performance Cookies</h3>
                <p className="text-white/80">
                  These cookies help us understand how you use QCMix by collecting anonymous data about page visits, bounce rates, and traffic sources. This helps us improve platform performance and user experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-qc-yellow mb-2">Functional Cookies</h3>
                <p className="text-white/80">
                  These cookies remember your preferences (such as language, location filter for Quad Cities venues, or notification settings) to provide a personalized experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-qc-pink mb-2">Marketing Cookies</h3>
                <p className="text-white/80">
                  These cookies track your activity to show you relevant ads and content related to nightlife, venues, and events in the Quad Cities area.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="text-white/80 leading-relaxed">
              QCMix uses third-party services such as:
            </p>
            <ul className="space-y-2 text-white/80 ml-4 mt-4">
              <li>• <span className="font-semibold">Google Analytics</span> - to analyze website traffic and user behavior</li>
              <li>• <span className="font-semibold">Vercel Analytics</span> - to monitor platform performance</li>
              <li>• <span className="font-semibold">Firebase</span> - for authentication and real-time data management</li>
              <li>• <span className="font-semibold">Supabase</span> - for database and user management</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              These services may place their own cookies on your device. Please review their privacy policies for more information.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">How to Control Cookies</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Most browsers allow you to control cookies through your settings. You can:
            </p>
            <ul className="space-y-2 text-white/80 ml-4">
              <li>• Accept or reject cookies</li>
              <li>• Delete cookies from your device</li>
              <li>• Block certain types of cookies</li>
              <li>• Use private or incognito browsing modes</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              Please note: Disabling essential cookies may affect your ability to use QCMix features.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Do Not Track</h2>
            <p className="text-white/80 leading-relaxed">
              Some browsers include a "Do Not Track" feature. QCMix currently does not respond to DNT signals, but we respect your privacy choices and allow you to control cookies through your browser settings.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-white/80 leading-relaxed">
              QCMix may update this cookie policy to reflect changes in our practices or technology. Please review this page periodically for updates. Your continued use of QCMix constitutes your acceptance of any updates.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-white/80 leading-relaxed">
              If you have questions about our cookie practices, please contact us at{' '}
              <span className="text-qc-primary font-semibold">privacy@qcmix.com</span>
            </p>
          </div>

          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">Last updated: January 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}