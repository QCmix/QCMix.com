import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | QCMix - Quad Cities Nightlife Platform',
  description: 'Learn how QCMix protects your privacy and handles your personal data. Transparent data practices for bartenders, musicians, venues, and nightlife professionals.',
};

export default function PrivacyPage() {
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
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="hero-description">
            Your privacy matters. Transparent data practices for the Quad Cities nightlife community.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-white/80 leading-relaxed">
              Welcome to QCMix.com. We are committed to protecting your personal information and your right to privacy. This policy outlines how we handle data for our Quad Cities nightlife and music platform connecting bartenders, musicians, venues, and patrons.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-white/80">
              <div>
                <h3 className="text-xl font-semibold text-qc-primary mb-2">Account Information</h3>
                <p>Name, email address, phone number, and role selection (bartender, musician, venue owner, patron, etc.)</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-qc-orange mb-2">Profile Information</h3>
                <p>Experience level, certifications, musical genres, availability, links to portfolios, social media, and preferences about the Quad Cities venue scene.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-qc-yellow mb-2">Usage Data</h3>
                <p>How you interact with QCMix, pages visited, search history, and connections made within the platform.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-qc-pink mb-2">Location Data</h3>
                <p>City/region information for matching with Quad Cities venues, bartenders, and events.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
            <ul className="space-y-3 text-white/80">
              <li className="flex gap-3">
                <span className="text-qc-primary font-bold">•</span>
                <span>Connect you with venues, bartenders, musicians, and patrons in the Quad Cities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-qc-primary font-bold">•</span>
                <span>Match your skills and preferences with relevant opportunities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-qc-primary font-bold">•</span>
                <span>Send notifications about shifts, events, and network connections</span>
              </li>
              <li className="flex gap-3">
                <span className="text-qc-primary font-bold">•</span>
                <span>Improve platform features and user experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-qc-primary font-bold">•</span>
                <span>Ensure platform security and prevent fraud</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
            <div className="space-y-4 text-white/80">
              <p>
                <span className="text-qc-primary font-semibold">We will never:</span>
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Sell your personal information to third parties or data brokers</li>
                <li>• Share your financial data (tips, earnings) with employers or venues without consent</li>
                <li>• Use your data for purposes unrelated to the QCMix platform</li>
                <li>• Share your profile without your explicit permission</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Data Security</h2>
            <p className="text-white/80 leading-relaxed">
              We implement industry-standard security measures to protect your information. Your password is encrypted, and all communications are secured with SSL encryption. However, no method of transmission is 100% secure.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              You have the right to access, correct, or delete your personal information. Contact us to request any of these actions.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-white/80 leading-relaxed">
              If you have questions about this privacy policy or our data practices, please contact us at{' '}
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
