const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
var webpack = require('webpack');

const sassLoaders = [

    'css-loader?sourceMap',
    'postcss-loader',
    'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true&includePaths[]=' + path.resolve(__dirname, './')
]

/////////////////////////



const config = {
    devtool: 'source-map',
    entry: {
        main: ['./ui/main.js']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react'],
            // loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react'],
            /* 
            query: {
                 presets: ['es2015', 'react']
             }
             */
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
        }]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './js'),
        publicPath: '/js'
    },
    plugins: [
        new ExtractTextPlugin('../css/style.css'),
        //new webpack.HotModuleReplacementPlugin(),

    ],
    postcss: [
        autoprefixer({
            browsers: ["last 3 version", "> 1%", "Firefox 15", "ie 8", "ie 7"]
        })
    ],
    resolve: {
        extensions: ['', '.jsx', '.js', '.scss'],
        root: [path.join(__dirname, './')]
    },
}

module.exports = config
