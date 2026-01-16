export default function BarsPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">
      <section className="max-w-7xl mx-auto py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Your bar isn’t just a room.</h1>
        <p className="text-xl mb-10">Visibility, talent access, and community—make your venue stand out.</p>
        <a href="#" className="px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition mb-16 inline-block">Claim Your Bar Profile</a>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Reality</h2>
          <ul className="space-y-2 text-left max-w-xl mx-auto">
            <li>Booking talent is fragmented</li>
            <li>Promotion is inconsistent</li>
            <li>Reputation lives offline</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Verified bar profile</h3>
            <p>Showcase your venue with credibility.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Talent discovery</h3>
            <p>Connect with musicians and staff easily.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Event amplification</h3>
            <p>Promote your events to the right crowd.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Editorial features</h3>
            <p>Get covered in scene stories and features.</p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-2xl font-bold mb-4">Future Tools</h2>
          <ul className="space-y-2">
            <li>Scheduling</li>
            <li>Tip reporting</li>
            <li>Payroll</li>
            <li>Shift notes</li>
            <li>POS integration</li>
            <li>Compliance peace of mind</li>
            <li>Free trial, IA/IL focus, private data</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
