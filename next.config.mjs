/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            pathname: '**',
            hostname: 'park.co.th',
          },
        ],
      },
};

export default nextConfig;
