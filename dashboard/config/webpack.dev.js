const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8103/'
  },
  devServer: {
    port: 8103,
    historyApiFallback: {
      index: '/index.html'
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}

module.exports = merge(commonConfig, devConfig);