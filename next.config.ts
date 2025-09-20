import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // ✅ ensures modern minification
  experimental: {
    esmExternals: true, // ✅ prefer ES modules for smaller, modern bundles
  },
};

export default nextConfig;
