import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quad Cities Bars & Venues | QCMix - Find Bars in Davenport & Bettendorf',
  description:
    'Discover bars, venues, and nightlife destinations in the Quad Cities. Connect with bartenders and musicians. Explore live music venues in Davenport, Bettendorf, and Cedar Rapids.',
  keywords: [
    'Quad Cities bars',
    'Davenport bars',
    'Bettendorf venues',
    'Iowa nightlife',
    'live music venues',
    'bar finder',
    'nightclub',
    'lounges',
  ].join(', '),
  openGraph: {
    title: 'Discover Quad Cities Bars & Venues | QCMix',
    description:
      'Find the best bars, venues, and nightlife experiences in the Quad Cities region.',
    url: 'https://qcmix.com/bars',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://qcmix.com/bars' },
};

export default function BarsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
 