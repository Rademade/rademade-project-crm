const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './src',
    host: '0.0.0.0',
    port: 4000,
    proxy: {
            '/api/**': {
                target: 'http://localhost:3000',
                changeOrigin: true
              }
            }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
