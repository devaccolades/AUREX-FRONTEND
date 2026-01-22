/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,

  images: {
    unoptimized: true,
    domains: [
      'backend.aurexbuilders.com',
    ],
  },
};

export default nextConfig;
