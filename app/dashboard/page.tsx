"use client";

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import ProtectedRoute from '../../components/ProtectedRoute';

const BartenderDashboard = () => (
  <div className="space-y-6">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-4">Bartender Dashboard</h2>
      <p className="text-gray-600">Welcome to your industry command center. Soon you will be able to manage gigs and view network opportunities.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link href="/tip-tracker" className="group bg-indigo-600 p-6 rounded-2xl text-white hover:bg-indigo-700 transition-all">
        <i className="fa-solid fa-calculator text-3xl mb-4"></i>
        <h3 className="text-xl font-bold">Tip Tracker</h3>
        <p className="text-indigo-100 mt-2">Check out the upcoming private tip tracking features.</p>
      </Link>
      <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col justify-center items-center text-center opacity-75">
        <i className="fa-solid fa-lock text-3xl mb-4 text-gray-300"></i>
        <h3 className="text-xl font-bold text-gray-400">Bartender Pro</h3>
        <p className="text-gray-400 mt-2">Advanced analytics and gig placement coming soon.</p>
      </div>
    </div>
  </div>
);

const VenueDashboard = () => (
  <div className="space-y-6">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-4">Venue Portal</h2>
      <p className="text-gray-600">Managing a Quad Cities venue just got easier. Showcase your spot and find local talent.</p>
    </div>
    <div className="bg-white p-8 rounded-2xl border border-dashed border-gray-300 text-center">
      <p className="text-gray-500">No active postings. <span className="text-indigo-600 font-bold">Posting gigs coming soon.</span></p>
    </div>
  </div>
);

const MusicianDashboard = () => (
  <div className="space-y-6">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-4">Artist Station</h2>
      <p className="text-gray-600">Update your links and genre so venues can find you for their next live event.</p>
    </div>
    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
      <h3 className="font-bold text-indigo-900 mb-2">Pro Feature Idea:</h3>
      <p className="text-indigo-700 text-sm">"Direct Gig Invitations" - Get notified directly by venues looking for your specific genre. (Coming Soon)</p>
    </div>
  </div>
);

export default function DashboardPage() {
  const { profile } = useAuth();

  const renderDashboardByRole = () => {
    switch (profile?.role) {
      case 'bartender': return <BartenderDashboard />;
      case 'venue': return <VenueDashboard />;
      case 'musician': return <MusicianDashboard />;
      default: return null;
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Hello, {profile?.name}!</h1>
            <p className="text-gray-500 capitalize">{profile?.role} Account • {profile?.pro ? 'Pro Member' : 'Standard'}</p>
          </div>
          <Link href="/profile" className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <i className="fa-solid fa-user-gear"></i> Edit Profile
          </Link>
        </div>

        {renderDashboardByRole()}
      </div>
    </ProtectedRoute>
  );
}