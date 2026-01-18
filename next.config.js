/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for better SEO and performance
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
  },

  // Security and SEO headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Cache control for static assets
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      // Longer cache for images and fonts
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for SEO maintenance
  async redirects() {
    return [
      // Ensure canonical URLs
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Rewrites for clean URL structure
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap.xml',
        },
        {
          source: '/robots.txt',
          destination: '/api/robots.txt',
        },
      ],
    };
  },

  // Webpack optimizations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              filename: 'vendor.[hash].js',
              chunks: 'all',
              reuseExistingChunk: true,
              priority: 20,
              test: /node_modules/,
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },

  // Enable strict mode for better debugging
  reactStrictMode: true,

  // Compression
  compress: true,

  // Power header for third-party services
  poweredByHeader: false,

  // Production source maps disabled for security
  productionBrowserSourceMaps: false,

  // Trailing slashes for SEO consistency
  trailingSlash: false,

  // Swcrc options for better performance
  swcMinify: true,

  // Internationalization (ready for future expansion)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
