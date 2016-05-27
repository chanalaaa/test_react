var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'build/main.js'),
    output: {
      path: path.resolve(__dirname, 'js'),
      filename: 'main.js'
    },
    devServer: {
      inline: true,
      port: 5555
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
};