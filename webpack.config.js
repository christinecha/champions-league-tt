const path = require('path')

const PUBLIC_DIR = path.resolve(__dirname, 'public')

module.exports = {
  entry: {
    'index.js': './client/src/index.js',
  },
  mode: 'production',
  output: {
    path: path.resolve(PUBLIC_DIR),
    publicPath: '/',
    filename: 'scripts/[name]',
    chunkFilename: 'scripts/[name]',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ]
  }
}