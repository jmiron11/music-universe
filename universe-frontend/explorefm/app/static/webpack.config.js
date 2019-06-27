var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './js/profile.js',
  devtool: 'source-map',
    mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["babel-loader"]
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};