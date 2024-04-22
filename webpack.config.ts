import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'@/store': path.resolve(__dirname, '/src/store'),
			'@/components': path.resolve(__dirname, '/src/components'),
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
		],
	},
	plugins: [
		// Add any additional webpack plugins needed for your project
	],
};

export default config;
