// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   devIndicators: false,

//   images: {
//     unoptimized: true,
//     domains: [
//       'backend.aurexbuilders.com',
//     ],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.aurexbuilders.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;