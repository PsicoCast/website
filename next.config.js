/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['encrypted-tbn0.gstatic.com', 'www.jobatus.com.br'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'pe.unit.br',
        }
      ],
    },
  }
  
  module.exports = nextConfig