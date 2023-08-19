/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**'
            }
        ],
        domains: ['raw.githubusercontent.com', 'lh3.googleusercontent.com']
    }
}

module.exports = nextConfig
