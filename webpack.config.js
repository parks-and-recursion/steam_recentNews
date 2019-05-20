var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		filename: 'bundle.js',
		path: DIST_DIR
	},
	module: {
		rules: [
		{
			loader: 'babel-loader',
			test: /\.jsx?/,
			include: SRC_DIR,
			query:{
				presets: ['@babel/preset-react']
			}
		}]
	}

}
