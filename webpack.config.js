const path = require('path');

module.exports = {
  entry: './src/index.js',
  context: path.resolve(__dirname),
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
    },
    {
      test: /.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: 'dist',
    watchContentBase: true,
    historyApiFallback: true
  }
};