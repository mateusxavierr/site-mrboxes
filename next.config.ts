import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mrboxes.com.br",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
