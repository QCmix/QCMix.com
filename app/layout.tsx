import React from "react";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientProviders from "../components/ClientProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: "QCmix – Quad Cities Bartending & Music",
  description:
    "QCmix connects Quad Cities bartenders, venues, musicians, and patrons.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <ClientProviders>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
