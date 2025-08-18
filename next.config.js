/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: ['lucide-react'],
	},
	eslint: {
		ignoreDuringBuilds: false,
	},
	images: {
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bloombrightnursery.ae',
				port: '',
				pathname: '/**',
			},
		],
	},
	compress: true,
	poweredByHeader: false,
	generateEtags: false,
	reactStrictMode: true,
	headers: async () => {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
				],
			},
		]
	},
}

module.exports = nextConfig
