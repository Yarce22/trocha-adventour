import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/etsa88u70ow8/**',
        search: '',
      }
    ],
  },
};

export default nextConfig;
