import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "QCMix",
  description: "Quad Cities nightlife and music ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#08080f] text-white antialiased">
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
