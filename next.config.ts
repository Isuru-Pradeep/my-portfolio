import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/my-portfolio",
  // assetPrefix: "/my-portfolio", // Remove the trailing slash
  assetPrefix: "./", // for custom domain
  images: {
    unoptimized: true,
  },
  // Very important for GitHub Pages
  trailingSlash: true, // Add this line
};

export default nextConfig;
