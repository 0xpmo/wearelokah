import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyclical Ceremony - Holistic Health & Menstrual Cycle Coaching",
  description:
    "Empowering women through holistic health coaching and menstrual cycle wisdom. 1:1 coaching, yoga retreats, and sacred healing spaces with Lucy.",
  generator: "v0.app",
  keywords: [
    "menstrual cycle coaching",
    "holistic health",
    "women's wellness",
    "yoga retreats",
    "feminine energy",
  ],
  icons: {
    icon: "/flower.jpeg",
    shortcut: "/flower.jpeg",
    apple: "/flower.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
