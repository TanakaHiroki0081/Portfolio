const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,  // ✅ build won’t fail on TS errors
    },
  };
  
  module.exports = nextConfig;
  