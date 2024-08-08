/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Set to false if you encounter issues with strict mode
  images: {
    unoptimized: true, // Keep this if you have issues with image optimization
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      readline: false,
    };
    return config;
  },
};

module.exports = nextConfig;
