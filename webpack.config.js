var webpack=require('webpack');
var path=require('path');
module.exports={
	entry: "./src/index.js",
	output: {
		path:__dirname,
		publicPath:"/public",
		filename:"bundle.js"
	},
	devServer:{
		inline: true,
		contentBase: "./",
		port: 1233,
		historyApiFallback: true
	},
	module:{
		loaders:[{
			test:/.js$/,
			loader:"babel-loader",
			exclude:/node_modules/,
			query:{presets:["es2015","react"]}
		}]
	}
};