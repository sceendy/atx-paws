const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        ie8: false,
        ecma: 5,
        compress: {
          warnings: false
        }
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'MAP_KEY': JSON.stringify(process.env.MAP_KEY)
      }
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});