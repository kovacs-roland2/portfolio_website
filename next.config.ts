import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build', // Changes the build output directory to `build`
  trailingSlash: true, // Ensures URLs end with / for better S3 compatibility
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
