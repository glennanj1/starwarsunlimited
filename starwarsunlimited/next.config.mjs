/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://api.swu-db.com/:path*', // Proxy to Backend
          },
        ]
      },
};

export default nextConfig;
