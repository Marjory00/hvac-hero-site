// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure the full Next.js feature set is available on Vercel
  // You MUST remove the 'output: "export"' and 'images: { unoptimized: true }' 
  // lines that were added for GitHub Pages, as they conflict with Vercel's server features.

  // Optional: Add common settings for stability
  // Ensure Next.js doesn't fail the build if TypeScript emits warnings
  typescript: {
    ignoreBuildErrors: false, // Set to true only if absolutely necessary for temporary dev, but false is best practice
  },

  // Optional: Add transpile packages if you have any uncompiled external dependencies
  // transpilePackages: ['some-esm-package'],

  // Optional: Standard image configuration
  images: {
    // Add any external image domains here if you use them
    // remotePatterns: [
    //   { hostname: 'example.com' },
    // ],
    unoptimized: false, // Keep image optimization enabled for Vercel
  }
};

export default nextConfig;