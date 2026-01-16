export default function BartendersPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">
      <section className="max-w-7xl mx-auto py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">You make the night work.</h1>
        <p className="text-xl mb-10">Visibility and protection for the people behind the bar.</p>
        <a href="#" className="px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition mb-16 inline-block">Join as Industry</a>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Reality</h2>
          <ul className="space-y-2 text-left max-w-xl mx-auto">
            <li>No public record of experience</li>
            <li>Word-of-mouth disappears online</li>
            <li>Invisible outside the shift</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Industry profile</h3>
            <p>Showcase your experience and skills.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Coworker network</h3>
            <p>No personal phone numbers required.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Scene visibility</h3>
            <p>Get noticed by venues and patrons.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Tip Compliance App (Coming Soon)</h3>
            <p>Track tips and income securely.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Know your worth</h3>
            <p>Tip & income tracking for transparency.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Customer & shift records</h3>
            <p>Keep a private log of your work.</p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-2xl font-bold mb-4">Founder Context</h2>
          <ul className="space-y-2">
            <li>Tip Compliance App was created after a bad experience with a bar owner</li>
            <li>Builtin for IA/IL first</li>
            <li>Data is private and never sold</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
