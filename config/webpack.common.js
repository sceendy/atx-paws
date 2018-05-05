const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'app/index.html',
  filename: 'index.html',
  inject: 'body',
  title: 'ATX Paw Finder'
});

module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name]-[chunkhash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', 
            options: {
              importLoaders: 1,
              minimize: true
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('../dist', {allowExternal: true}),
    HtmlWebpackPluginConfig,
    new CopyWebpackPlugin([
      { from: 'app/assets', to: 'assets' }
    ]),
    new webpack.ProgressPlugin()
  ]
}