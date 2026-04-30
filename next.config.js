/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1v25kychuu7fe.cloudfront.net',
      },
    ],
  },
};

module.exports = nextConfig;