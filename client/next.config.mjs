/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_BASE_URL: process.env.API_BASE_URL,
        API_BASE_URLL: process.env.API_BASE_URLL,
    },
    images: {
        remotePatterns:[{protocol:"http", hostname:"127.0.0.1", }]
    },
};

export default nextConfig;
