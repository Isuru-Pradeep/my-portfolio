import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: ".", // Replace 'my-portfolio' with your repository name
  // assetPrefix: "/my-portfolio/", // Replace 'my-portfolio' with your repository name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
