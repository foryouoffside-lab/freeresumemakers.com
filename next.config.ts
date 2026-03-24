/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // ✅ Updated images configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yourdomain.com',
      },
      {
        protocol: 'https', 
        hostname: '**.amazonaws.com', 
      },
    ],
    // Remove unoptimized: true or set to false
    unoptimized: false,
    // Add domains for local development
    domains: ['localhost'],
  },

  // ✅ Add this to fix the lockfile warning
  outputFileTracingRoot: __dirname,

  // ✅ Optional: Add transpilePackages if needed
  transpilePackages: [],

  // ✅ Add webpack configuration to fix MIME type issues
webpack: (config: any, { isServer }: { isServer: boolean }) => {
    // Fix for MIME type issues on Windows
    if (!isServer) {
      config.output.filename = 'static/chunks/[name].js';
      config.output.chunkFilename = 'static/chunks/[name].js';
    }
    return config;
  },
}

module.exports = nextConfig