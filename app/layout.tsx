import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "QCMix - Quad Cities Nightlife Platform for Bars, Venues & Musicians",
  description: "QCMix connects bartenders, musicians, venue owners, and nightlife enthusiasts across the Quad Cities. Discover bars, explore venues, and build the nightlife community.",
  keywords: [
    "Quad Cities bars",
    "Davenport nightlife",
    "Bettendorf venues",
    "Iowa bartenders",
    "musicians Iowa",
    "Quad Cities nightlife",
    "live music QC",
    "bartender network",
    "nightlife community",
    "Quad Cities events",
  ].join(", "),
  metadataBase: new URL("https://qcmix.com"),
  openGraph: {
    title: "QCMix - Quad Cities Nightlife Platform",
    description: "Connect with bartenders, musicians, and venues in the Quad Cities. Explore nightlife, discover events, and build community.",
    url: "https://qcmix.com",
    siteName: "QCMix",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QCMix - Quad Cities Nightlife",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QCMix - Quad Cities Nightlife",
    description: "Connect with bartenders, musicians, and venues in the Quad Cities.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://qcmix.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "QCMix",
              url: "https://qcmix.com",
              logo: "https://qcmix.com/logo.png",
              description: "Quad Cities nightlife platform connecting bartenders, musicians, venue owners, and patrons",
              sameAs: [
                "https://facebook.com/qcmix",
                "https://instagram.com/qcmix",
                "https://twitter.com/qcmix",
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "IA",
                addressCountry: "US",
                areaServed: ["Davenport", "Bettendorf", "Cedar Rapids", "Dubuque"],
              },
            }),
          }}
        />

        {/* JSON-LD LocalBusiness Schema for Quad Cities */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "QCMix",
              description: "Nightlife and music community platform for Quad Cities",
              url: "https://qcmix.com",
              areaServed: {
                "@type": "GeoShape",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "41.5868",
                  longitude: "-90.6646",
                },
                geoRadius: "25000",
              },
              potentialAction: {
                "@type": "Action",
                actionStatus: "PotentialActionStatus",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://qcmix.com/join",
                },
              },
            }),
          }}
        />
      </head>
      <body className="
        h-full
        min-h-screen
        bg-[radial-gradient(1200px_circle_at_20%_-10%,#1A2030_0%,transparent_40%),radial-gradient(800px_circle_at_80%_10%,#141824_0%,transparent_45%),#0B0D10]
        text-ink-primary
        antialiased
        overflow-x-hidden
      ">
        {/* Noise Texture Overlay */}
        <div className="pointer-events-none fixed inset-0 bg-[url('/noise.png')] opacity-[0.035] mix-blend-overlay" />
        
        {/* Ambient Light Effects */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-brand-amber/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Main Layout Grid */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-1">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </div>
        
        {/* Analytics */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
