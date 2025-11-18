import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Next.js 15 + React 19 RC currently conflict with the bundled ESLint runner.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
