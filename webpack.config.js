var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');

var config = {
  devtool: 'eval',
  entry: [mainPath],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: [nodeModulesPath]
        },
        {
          test: /\.scss$/,
          loader: 'style!css!sass?sourceMap'
        }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]

};

module.exports = config;
