import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Optimized for Vercel deployment */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
