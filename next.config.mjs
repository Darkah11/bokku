/** @type {import('next').NextConfig} */
const nextConfig = {
	productionBrowserSourceMaps: false,
	images: {		
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/**', 
			},
			{
				protocol: 'https',
				hostname: 'storerocket.rotimicoker.com',
				port: '',
				pathname: '/**',
			}
		]
	},
};

export default nextConfig;
