import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: 'https://gantavya.me',
  basePath: '',
};

export default nextConfig;
