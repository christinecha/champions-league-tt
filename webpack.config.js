const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pages = require('./pages-config')

const PUBLIC_DIR = path.resolve(__dirname, 'public')

const shared = {
  entry: {
    'index.js': './client/src/index.js',
  },
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
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
      }
    ]
  }
}

const production = {
  ...shared,
  mode: 'production',
  plugins: [
    ...pages.map(page => (
      new HtmlWebpackPlugin(page)
    )),
  ],
}

const development = {
  ...shared,
  mode: 'development',
  devServer: {
    port: 8000,
    proxy: {
      '/styles/*': {
        target: 'http://localhost:8000/public',
        secure: false
      },
      '/scripts/*': {
        target: 'http://localhost:8000/public',
        secure: false
      },
      '/assets/*': {
        target: 'http://localhost:8000/assets',
        secure: false
      }
    }
  },
  plugins: [
    ...pages
    .filter((p, i) => i < 2)
    .map(page => (
      new HtmlWebpackPlugin(page)
    )),
  ],
}

module.exports = process.env.NODE_ENV === 'production'
  ? production
  : development