module.exports = {
	entry: './client/src/',
	output: {
		filename: 'bundle.js',
		path: './public/'
	},
	module: {
		rules: [
		{
			loader: 'babel-loader',
			test: /\.jsx?/,
			options:{
				presets: ['react']
			}
		}]
	}

}
