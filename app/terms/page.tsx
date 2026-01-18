export const metadata = {
  title: 'Terms of Service | QCMix - Quad Cities Nightlife Community',
  description: 'QCMix terms of service for bartenders, musicians, venues, and patrons in the Quad Cities nightlife ecosystem.',
};

export default function TermsPage() {
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
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="hero-description">
            Agreement for using the QCMix platform and connecting with the Quad Cities nightlife community.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-white/80 leading-relaxed">
              By accessing and using QCMix.com, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">2. Use License</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on QCMix for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 text-white/80 ml-4">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for any commercial purpose or for any public display</li>
              <li>• Attempt to decompile or reverse engineer any software contained on QCMix</li>
              <li>• Remove any copyright or other proprietary notations from the materials</li>
              <li>• Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>• Harass or threaten other users</li>
            </ul>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">3. Disclaimer</h2>
            <p className="text-white/80 leading-relaxed">
              The materials on QCMix are provided "as is." QCMix makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">4. Limitations</h2>
            <p className="text-white/80 leading-relaxed">
              In no event shall QCMix or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on QCMix, even if QCMix or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">5. Accuracy of Materials</h2>
            <p className="text-white/80 leading-relaxed">
              The materials appearing on QCMix could include technical, typographical, or photographic errors. QCMix does not warrant that any of the materials on its website are accurate, complete, or current. QCMix may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">6. Links</h2>
            <p className="text-white/80 leading-relaxed">
              QCMix has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by QCMix of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">7. Modifications</h2>
            <p className="text-white/80 leading-relaxed">
              QCMix may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">8. Governing Law</h2>
            <p className="text-white/80 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the State of Iowa, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">9. User Conduct</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              You agree not to use QCMix for any unlawful purpose or in any way that violates applicable law. Specifically, you agree:
            </p>
            <ul className="space-y-2 text-white/80 ml-4">
              <li>• Not to post content that is defamatory, harassing, or threatening</li>
              <li>• Not to engage in harassment, abuse, or discrimination</li>
              <li>• Not to violate intellectual property rights</li>
              <li>• Not to attempt unauthorized access to the platform</li>
              <li>• Not to interfere with platform operations</li>
            </ul>
          </div>

          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">Last updated: January 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}