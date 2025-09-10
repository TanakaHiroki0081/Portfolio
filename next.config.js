/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // ✅ Skip linting errors during production builds
      ignoreDuringBuilds: true,
    },
    typescript: {
      // ✅ (optional) If you want to skip TS errors during builds
      // ignoreBuildErrors: true,
    },
  };
  
  module.exports = nextConfig;
  