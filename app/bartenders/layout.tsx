import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bartenders Jobs in Quad Cities | QCMix - Find Work & Grow Your Career',
  description:
    'Professional bartenders in the Quad Cities can find jobs, connect with bars and venues, and grow their career. Discover opportunities in Davenport, Bettendorf, and beyond.',
  keywords: [
    'bartender jobs Quad Cities',
    'bartending Davenport',
    'bar jobs Iowa',
    'bartender network',
    'employment opportunities',
    'career growth',
  ].join(', '),
  openGraph: {
    title: 'Bartender Jobs & Opportunities | QCMix - Quad Cities',
    description:
      'Find bartending positions and grow your career in Quad Cities venues. Connect with established bars and build your reputation.',
    url: 'https://qcmix.com/bartenders',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://qcmix.com/bartenders' },
};

export default function BartendersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
 