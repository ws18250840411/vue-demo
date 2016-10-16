var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry:	'./src/main.js',
	output:	{
		path: path.resolve(__dirname, './dist'),
		publicPath:'/dist/',
		filename:'build.js'
	},
	 resolveLoader: {
	    root: path.join(__dirname, 'node_modules'),
	 },
	watch:true,
	module:	{
		loaders:[
			{test:/\.styl$/, loader: "style!css!stylus"},
			{test:/\.js$/,loader:'babel',exclude:/node_modules/},
			{ test: /\.css$/, loader: 'style!css' },
			{test: /\.html$/, loader: "html"},
			{test:/\.vue/, loader: 'vue'}
		]
	},
	babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
	devServer: {
		historyApiFallback: true,
		noInfo: true
	}
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}