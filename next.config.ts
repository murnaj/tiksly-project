import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "customer-wyu58i20r3viufsr.cloudflarestream.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "videodelivery.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
