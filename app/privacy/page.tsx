
"use client";

import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black mb-10">Privacy Policy</h1>
      <div className="prose prose-indigo max-w-none space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p>
            Welcome to QCmix.com. We are committed to protecting your personal information and your right to privacy. 
            This policy outlines how we handle data for our bartending and music platform.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Account Information:</strong> Name, email, and role selection.</li>
            <li><strong>Profile Information:</strong> Experience, availability, genre, and external links you choose to provide.</li>
            <li><strong>Early Access:</strong> Contact information submitted via waitlist forms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <p>
            QCmix is designed to be a safe space for industry professionals. We will never sell your individual financial data 
            (such as future tip tracking logs) to third parties or employers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
          <p>
            If you have questions about this policy, please contact us at privacy@qcmix.com.
          </p>
        </section>
      </div>
    </div>
  );
}
