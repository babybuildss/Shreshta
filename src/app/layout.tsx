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
  title: "SHRESHTA — Luxury Real Estate Developer | Crafting Timeless Destinations",
  description:
    "Shreshta is a premier luxury real estate developer crafting timeless destinations for future generations. Discover our signature residential projects across India.",
  keywords: [
    "Shreshta",
    "luxury real estate",
    "premium residential",
    "luxury homes",
    "Mumbai",
    "Bangalore",
    "Goa",
    "real estate developer",
  ],
  authors: [{ name: "Shreshta Developers" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SHRESHTA — Luxury Beyond Construction",
    description:
      "Building timeless destinations designed for future generations.",
    siteName: "Shreshta Developers",
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
