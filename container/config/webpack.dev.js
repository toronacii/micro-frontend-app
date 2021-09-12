const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const { dependencies } = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8100/'
  },
  devServer: {
    port: 8100,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        '@marketing': 'marketing@http://localhost:8101/remoteEntry.js',
        '@auth': 'auth@http://localhost:8102/remoteEntry.js',
      },
      shared: dependencies
    })
  ]
}

module.exports = merge(commonConfig, devConfig);