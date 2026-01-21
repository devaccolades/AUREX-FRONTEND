/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.aurexbuilders.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
