import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true, // ✅ prefer ES modules for smaller, modern bundles
  },
};

export default nextConfig;
