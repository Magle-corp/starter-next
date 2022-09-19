/** @type {import('next').NextConfig} */

// Use the appropriate .env file according to the environment.
require('dotenv').config({
  path: process.env.ENVIRONMENT
    ? `environments/.env.${process.env.ENVIRONMENT}`
    : 'environments/.env',
});

module.exports = {
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  reactStrictMode: true,
  webpack(config, options) {
    return config;
  },
  images: {
    minimumCacheTTL: 3600,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  eslint: {
    dirs: ['pages', 'src'],
  },
};
