const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    //progress: true,
    contentBase: './src',
    host: '0.0.0.0',
    port: 4000,
    proxy: {
            '/api/**': {
                target: 'http://back:3000',
                changeOrigin: true
              }
            }
  },
  entry: {
    //"hotServer": "webpack/hot/dev-server",
    //webpackServer: 'webpack-dev-server/client?http://localhost:3000',
    path: path.resolve(__dirname, 'src/app.jsx')

  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'style-loader!css-loader'
    },{
      test: /\.scss$/,
      include: path.resolve(__dirname, 'src'),
      loaders: ['style', 'css', 'sass']
    },{
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    //root: path.resolve('src'),
    alias: {
      components: path.resolve('src/app/components'),
      containers: path.resolve('src/app/containers'),
      constants:  path.resolve('src/app/constants'),
      reducers:   path.resolve('src/app/reducers'),
      actions:    path.resolve('src/app/actions'),
      selectors:  path.resolve('src/app/selectors'),
			routes:     path.resolve('src/app/routes'),
      assets:     path.resolve('src/assets')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
