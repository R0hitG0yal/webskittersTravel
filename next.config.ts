import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photos/person-diving-on-pool-splashing-water-1qCSGzVEKKQ',
      },
    ],
  },
};


export default nextConfig;
