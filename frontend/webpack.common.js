const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    path: path.resolve(__dirname, 'src/app.jsx')

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
    extensions: ['.jsx', '.js', '.css'],
    alias: {
      components: path.resolve('src/app/components'),
      containers: path.resolve('src/app/containers'),
      constants:  path.resolve('src/app/constants'),
      reducers:   path.resolve('src/app/reducers'),
      actions:    path.resolve('src/app/actions'),
      selectors:  path.resolve('src/app/selectors'),
      routes:     path.resolve('src/app/routes'),
      assets:     path.resolve('src/assets'),
      models:     path.resolve('src/app/models'),
      sagas:      path.resolve('src/app/sagas'),
      api:        path.resolve('src/app/api'),
      store:      path.resolve('src/app/store')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ]
};

