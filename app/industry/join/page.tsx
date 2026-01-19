'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function JoinIndustry() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    role: '',
    city: '',
    email: '',
    instagram: '',
    work: '',
  });

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
          Join the Industry Beta
        </h1>

        <p className="text-gray-300 text-sm">
          We’re onboarding bartenders, musicians, DJs, and sound techs into our
          private beta to build the QC hiring and booking network together.
        </p>

        <input
          required
          placeholder="Name"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <select
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <option value="">Select role</option>
          <option>Bartender</option>
          <option>Musician</option>
          <option>DJ</option>
          <option>Sound tech</option>
        </select>

        <input
          required
          placeholder="City"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.city}
          onChange={(e) =>
            setForm({ ...form, city: e.target.value })
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
          placeholder="Instagram (optional)"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.instagram}
          onChange={(e) =>
            setForm({ ...form, instagram: e.target.value })
          }
        />

        <textarea
          placeholder="What kind of work are you looking for?"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={form.work}
          onChange={(e) =>
            setForm({ ...form, work: e.target.value })
          }
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-md font-medium hover:bg-gray-200"
        >
          Join the Beta
        </button>
      </form>
    </main>
  );
}
