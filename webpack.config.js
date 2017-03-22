var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractSCSS = new ExtractTextPlugin("[name].css");
const ExtractJPG = new ExtractTextPlugin("/images/[name].jpg");


module.exports = {
	context: __dirname + "/app/js",
	entry: "./app.js",
	output: {
		path: __dirname + "/public",
		filename: "app.bundle.js",
	},
	module: {
		loaders: [
			{
				test: /\.scss?/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader", 
					use: "css-loader!resolve-url-loader!sass-loader?sourceMap",
					publicPath: "images/"
				})
			},
			{
				test: /\.js$/,
				exclude: "node_modules",
				loaders: ["babel-loader", "eslint-loader"]
			},
			{
				test: /\.jpg?/,
				loader: "file-loader?outputPath=images/"
			}
		]
	},

	plugins: [
				
		new webpack.ProvidePlugin({
			$: "jquery",
 				jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
		ExtractSCSS,
		ExtractJPG

	]

}