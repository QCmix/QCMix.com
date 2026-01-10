import "./globals.css";

export const metadata = {
  title: "QCMix",
  description:
    "QCMix is a platform and editorial hub for Quad Cities bartending and music culture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
