import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HessLabs - Professional Music Production & Licensing | Film, TV, Commercial",
  description: "ASCAP-registered producer and songwriter offering rights-clear music licensing for film, television, advertising, and artist projects. Custom scores, fast turnaround, industry experience.",
  keywords: [
    "music licensing",
    "film music",
    "TV music licensing",
    "commercial music production",
    "custom music composition",
    "ASCAP music",
    "rights-clear music",
    "jingle production",
    "soundtrack composition",
    "music producer",
    "songwriter",
    "music for advertising",
    "brand music",
    "artist collaboration"
  ],
  openGraph: {
    title: "HessLabs - Professional Music Production & Licensing",
    description: "Rights-clear music for film, television, and commercial projects. ASCAP-registered with industry experience.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HessLabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
