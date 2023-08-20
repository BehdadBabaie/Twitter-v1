/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imgs.search.brave.com", "cdn.britannica.com"],
  },
};

module.exports = nextConfig;
