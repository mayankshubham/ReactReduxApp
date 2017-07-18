var webpack = require('webpack');
var path = require('path');

module.exports = {

	context: path.join(__dirname, 'src'),
	devtool: 'inline-sourcemap',
	entry: './js/index.js',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy']
				}
			}
		]
	},
	output: {
		path: __dirname + "/src",
		filename: 'bundle.js'
	}

}