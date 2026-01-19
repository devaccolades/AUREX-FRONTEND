/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'backend.aurexbuilders.com',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
