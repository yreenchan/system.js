const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'system.js',
		path: path.resolve(__dirname, './'),
		library: 'system',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
		]
	},
	devtool: '#source-map'
};