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
        //style: ['./ui/scss/style.scss']

    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'],
            // loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react'],
            /* 
            query: {
                 presets: ['es2015', 'react']
             }
             */
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            //loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
            loaders: ['style-loader', sassLoaders.join('!')]
        }]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './js'),
        publicPath: '/js'
    },
    plugins: [
        //new ExtractTextPlugin('../css/style.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
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
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:5000'
            }
        }
    }
}

module.exports = config
