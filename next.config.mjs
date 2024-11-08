/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dknvsbuyy/**',  // Your Cloudinary path
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // GitHub avatars
        port: '',
        pathname: '/**',  // Wildcard for GitHub avatars
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google user images
        port: '',
        pathname: '/**',  // Wildcard for Google user images
      },
    ],
  },
};

export default nextConfig;

