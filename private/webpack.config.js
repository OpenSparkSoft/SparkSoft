/**
 * Created by Grimbode on 21/11/2017.
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        "polygon.sparksoft":     path.join(__dirname, 'src', 'main.ts'),
        "polygon.sparksoft.min": path.join(__dirname, 'src', 'main.ts'),
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, '../public/js/dist'),
        filename: "[name].js",
        library: 'SparkSoft',
        libraryTarget: 'var'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ],
    watch: true
};