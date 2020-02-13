const path = require('path');

const PUBLIC_DIR = 'public'

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, PUBLIC_DIR)
  },
  entry: path.resolve(__dirname, 'src', 'main.js'),
  mode: 'development',
  module: {
    rules: [{
      exclude: /node_modules/,
      test: '/\.js$/'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
}