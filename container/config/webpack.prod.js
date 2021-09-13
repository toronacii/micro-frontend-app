const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const { dependencies } = require('../package.json');

const { AWS_DOMAIN_NAME } = process.env;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        '@marketing': `marketing@https://${AWS_DOMAIN_NAME}/marketing/latest/remoteEntry.js`,
        '@auth': `auth@https://${AWS_DOMAIN_NAME}/auth/latest/remoteEntry.js`,
        '@dashboard': `dashboard@https://${AWS_DOMAIN_NAME}/dashboard/latest/remoteEntry.js`,
      },
      shared: dependencies
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig);