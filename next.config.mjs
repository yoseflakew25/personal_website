/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-icons'],
  },

  // Remove source maps in production
  productionBrowserSourceMaps: false,

  // Strict mode for catching issues early
  reactStrictMode: true,

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },


  images: {
    formats: ['image/avif', 'image/webp'],
    // Reduce default image quality slightly for speed (still visually fine)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    minimumCacheTTL: 86400, // 24h cache
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Suppress watchpack EINVAL warnings on Windows when scanning drive-root system files
  webpack: (config, { dev }) => {
    if (dev && process.platform === 'win32') {
      const windowsSystemRe =
        /[\\/](?:pagefile|swapfile|hiberfil)\.sys$|[\\/]DumpStack\.log\.tmp$|[\\/]System Volume Information(?:[\\/]|$)/
      const existingIgnored = config.watchOptions?.ignored

      config.watchOptions = {
        ...config.watchOptions,
        ignored:
          existingIgnored instanceof RegExp
            ? new RegExp(
                `(?:${existingIgnored.source})|(?:${windowsSystemRe.source})`,
                existingIgnored.flags
              )
            : windowsSystemRe,
      }
    }

    return config
  },

  // HTTP headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

export default nextConfig
