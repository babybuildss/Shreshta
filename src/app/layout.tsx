import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ÉLYSÉE — Luxury Real Estate Developer | Crafting Timeless Destinations",
  description:
    "Élysée is a premier luxury real estate developer crafting timeless destinations for future generations. Discover our signature residential projects across India.",
  keywords: [
    "Élysée",
    "luxury real estate",
    "premium residential",
    "luxury homes",
    "Mumbai",
    "Bangalore",
    "Goa",
    "real estate developer",
  ],
  authors: [{ name: "Élysée Developers" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "ÉLYSÉE — Luxury Beyond Construction",
    description:
      "Building timeless destinations designed for future generations.",
    siteName: "Élysée Developers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
