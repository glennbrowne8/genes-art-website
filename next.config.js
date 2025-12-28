/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/.netlify/functions/create-checkout-session',
        destination: '/api/create-checkout-session',
      },
    ]
  },
}

module.exports = nextConfig
