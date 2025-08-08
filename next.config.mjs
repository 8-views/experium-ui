/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    domains: ['11views.com'],
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
        pathname: '/demos/images/**',
      },
    ],
  },};

export default nextConfig;
