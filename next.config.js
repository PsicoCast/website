/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // domains: ['pe.unit.br'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'pe.unit.br',
        }
      ],
    },
  }
  
  module.exports = nextConfig