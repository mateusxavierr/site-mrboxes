import type { NextConfig } from "next";

/** Para GitHub Pages em `username.github.io/nome-do-repo/`, defina na build: `BASE_PATH=/nome-do-repo` */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
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
