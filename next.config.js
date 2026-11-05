/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/wedding/sangeet',
        destination: 'https://photos.app.goo.gl/8ZbNDv4q2tCGvjz2A',
        permanent: true,
      },
      {
        source: '/wedding/ceremony',
        destination: 'https://photos.app.goo.gl/cHoSPUftvEo2jDCU8',
        permanent: true,
      },
      {
        source: '/wedding/reception',
        destination: 'https://photos.app.goo.gl/dHXbt2mVVnSAHsg39',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
