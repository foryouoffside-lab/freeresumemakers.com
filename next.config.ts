/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'freeresumemaker.xyz',
      },
      {
        protocol: 'https', 
        hostname: '**.amazonaws.com', 
      },
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    scrollRestoration: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    // Fix for MIME type issues on Windows
    if (!isServer) {
      config.output.filename = 'static/chunks/[name].js';
      config.output.chunkFilename = 'static/chunks/[name].js';
    }
    return config;
  },
};

module.exports = nextConfig;