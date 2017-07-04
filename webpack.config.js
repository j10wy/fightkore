const path = require('path');

const config = {
	entry: `${__dirname}/public/src/`,
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		filename: 'webpack.js'
	},
	module: {
		rules: [{
			test: /\.js$/, //Check for all js files
			loader: 'babel-loader',
			exclude: /(node_modules|bower_components)/,
			query: {
				presets: ["babel-preset-es2015"].map(require.resolve)
			}
		}]
	},
};

module.exports = config;