/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "**",
            },
        ],
    },
};

const withNextIntl = require('next-intl/plugin')('./i18n.ts');
module.exports = withNextIntl(nextConfig);
