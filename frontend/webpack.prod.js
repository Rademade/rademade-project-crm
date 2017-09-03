const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'cheap-source-map',

   // Where you want the output to go
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'app-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' }
    ])
  ]
});
