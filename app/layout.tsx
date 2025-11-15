import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOKAH - A New World Within",
  description:
    "A new world within. Empowering transformation through holistic health coaching, courses, and retreats.",
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
