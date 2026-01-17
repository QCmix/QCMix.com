import React from "react";
import Link from "next/link";

export default function DistributorJoinPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
        <div className="flex flex-col items-center">
          <img
            src="/images/roles/distributor.png"
            alt="Distributor"
            className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-100 shadow"
          />
          <h1 className="text-3xl font-extrabold text-indigo-700 mb-2 text-center">Join as a Distributor</h1>
          <p className="text-gray-600 text-center mb-6">
            Connect with bars, venues, and musicians. Manage your distribution network and grow your business with QCMix.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="company-name" className="sr-only">Company Name</label>
              <input
                id="company-name"
                name="company-name"
                type="text"
                autoComplete="organization"
                required
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
            >
              Request Invite
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Link href="/join">
            <span className="text-indigo-600 hover:text-indigo-800 font-medium transition">&larr; Back to all roles</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
