var Path = require('path');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: Path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	devtool: 'cheap-module-source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader'],
				include: Path.join(__dirname, 'src')
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};