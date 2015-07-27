var ReactStylePlugin = require('react-style-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: './app',
  output: {
    path: __dirname + '/dist',
    publicPath: '/public/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['jsx', 'babel-loader', ReactStylePlugin.loader()]
      }
    ]
  },
  plugins: [
    new ReactStylePlugin('bundle.css')
  ]
};
