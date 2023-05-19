/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nacional.jvsites.com.br'
            }
        ]
    }
}

module.exports = nextConfig
