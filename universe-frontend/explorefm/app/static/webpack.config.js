var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './js/react/main.jsx',
  devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx$/, 
                exclude: /node_modules/, 
                use: {
                    loader: "babel-loader", 
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
