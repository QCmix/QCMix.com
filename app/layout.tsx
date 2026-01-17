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
    <html lang="en" className="h-full">
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
