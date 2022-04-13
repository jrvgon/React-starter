const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devServer: {
		port: 8080, //default port
		hot: true, //hot reload
		open: true, //opens app in browser
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
}
