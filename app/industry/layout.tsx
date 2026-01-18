import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Partners & Distributors | QCMix - Quad Cities B2B Nightlife',
  description:
    'Connect with bars, venues, and nightlife businesses in the Quad Cities as a distributor, supplier, or industry professional. Access the complete ecosystem.',
  keywords: [
    'distributors',
    'suppliers',
    'Quad Cities B2B',
    'beverage distribution',
    'industry partners',
    'nightlife suppliers',
  ].join(', '),
  openGraph: {
    title: 'Industry Partners | QCMix - Connect with Quad Cities Nightlife',
    description:
      'Access the Quad Cities nightlife business network. Connect with venues, bars, and suppliers.',
    url: 'https://qcmix.com/industry',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://qcmix.com/industry' },
};

export default function IndustryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
 