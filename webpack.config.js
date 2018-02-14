const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2017']
                }
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" 
                }, {
                    loader: "css-loader" 
                }, {
                    loader: "sass-loader" 
                }]
            }
        ]
    },
    plugins: [
        //new UglifyJsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};