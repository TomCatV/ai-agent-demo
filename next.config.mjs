/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
export default nextConfig;
