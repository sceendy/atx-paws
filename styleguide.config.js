module.exports = {
  components: 'app/components/**/*.js',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
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
        }
      ]
    }
  }
}