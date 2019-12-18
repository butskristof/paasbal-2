const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devtool: "source-map",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: "style-loader"
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: "css-loader"
					},
					{
						// Loader for webpack to process CSS with PostCSS
						loader: "postcss-loader",
						options: {
							plugins: function () {
								return [
									require("autoprefixer")
								];
							}
						}
					},
					{
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: "sass-loader"
					}
				]
			},
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
			{ test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "src/html/index.html"
		}),
		new CopyWebpackPlugin([{
			from: "./src/static", to: "static"
		}])
	],
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		watchContentBase: true,
		compress: true,
		port: 8000
	}
};
