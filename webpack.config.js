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
    entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './ui/scss/style.scss',
    './ui/main.js'
  ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['babel-loader'],
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
        filename: 'main.js',
        path: path.join(__dirname, './js'),
        publicPath: '../../js'
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
        hot: true,
        inline: false,
        historyApiFallback: {
            index: '/'
        },
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:5000'
            }
        }
    }
}

module.exports = config
