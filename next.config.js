// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : './',
  // trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/perguntas-frequentes': { page: '/perguntas-frequentes' },
      '/cashback': { page: '/cashback' }
    };
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
});
