/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ifnoreDuringBuilds: true,
    },
}


module.exports=nextConfig
 