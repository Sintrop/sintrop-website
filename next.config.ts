import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // typescript: {
  //   ignoreBuildErrors: true
  // }
  images: {
    remotePatterns: [
      { hostname: 'www.sintrop.com' },
      { hostname: 'ipfs.sintrop.com' }
    ]
  }
};

export default nextConfig;
