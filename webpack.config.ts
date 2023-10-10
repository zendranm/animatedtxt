import * as path from 'path';
import * as webpack from 'webpack';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: webpack.Configuration = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'umd',
		globalObject: 'this',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'ts-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx'],
		plugins: [new TsconfigPathsPlugin({})]
	},
	externals: {
		react: 'react',
		reactDOM: 'react-dom',
	},
};

export default config;
