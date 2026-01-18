import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Musicians in the Quad Cities | QCMix - Book Gigs & Promote Music',
  description:
    'Musicians and artists in the Quad Cities can discover venues, book gigs, and build audiences. Connect with Davenport, Bettendorf, and Cedar Rapids venues for live performances.',
  keywords: [
    'Quad Cities musicians',
    'local bands',
    'live music',
    'music venues Iowa',
    'booking agent',
    'artist network',
    'perform locally',
  ].join(', '),
  openGraph: {
    title: 'Quad Cities Musicians | QCMix - Book Your Next Gig',
    description:
      'Connect with venues and book performances in the Quad Cities. Grow your music career locally.',
    url: 'https://qcmix.com/musicians',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://qcmix.com/musicians' },
};

export default function MusiciansLayout({ children }: { children: React.ReactNode }) {
  return children;
}
 