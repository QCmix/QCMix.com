'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function JoinVenue() {
  const router = useRouter();
  const [form, setForm] = useState({
    venueName: '',
    city: '',
    contactName: '',
    email: '',
    phone: '',
    needs: [] as string[],
    pain: '',
  });

  const toggleNeed = (need: string) => {
    setForm((prev) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n) => n !== need)
        : [...prev.needs, need],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    router.push('/thank-you');
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg max-w-xl w-full space-y-5"
      >
        <h1 className="text-2xl font-bold">
          Request Founding Partner Access
        </h1>

        <p className="text-gray-300 text-sm">
          We’re onboarding a limited number of Quad Cities venues into our
          private beta. Founding partners receive lifetime discounts and
          priority placement at launch.
        </p>

        <input
          required
          placeholder="Venue name"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.venueName}
          onChange={(e) =>
            setForm({ ...form, venueName: e.target.value })
          }
        />

        <input
          required
          placeholder="City"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />

        <input
          required
          placeholder="Contact name"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.contactName}
          onChange={(e) =>
            setForm({ ...form, contactName: e.target.value })
          }
        />

        <input
          required
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Phone (optional)"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <div>
          <p className="mb-2">What do you usually hire or book?</p>
          {['Bartenders', 'Bands', 'DJs', 'Sound tech'].map((need) => (
            <label key={need} className="block text-sm">
              <input
                type="checkbox"
                className="mr-2"
                checked={form.needs.includes(need)}
                onChange={() => toggleNeed(need)}
              />
              {need}
            </label>
          ))}
        </div>

        <textarea
          placeholder="Biggest hiring or booking pain (optional)"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.pain}
          onChange={(e) =>
            setForm({ ...form, pain: e.target.value })
          }
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-md font-medium hover:bg-gray-200"
        >
          Request Founding Access
        </button>
      </form>
    </main>
  );
}
