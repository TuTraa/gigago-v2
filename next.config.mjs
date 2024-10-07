/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gigago.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
