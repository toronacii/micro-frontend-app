const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const { dependencies } = require('../package.json');

const { MARKETING_DOMAIN_NAME, AUTH_DOMAIN_NAME, DASHBOARD_DOMAIN_NAME } = process.env;

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
        '@marketing': `marketing@https://${MARKETING_DOMAIN_NAME}/remoteEntry.js`,
        '@auth': `auth@https://${AUTH_DOMAIN_NAME}/remoteEntry.js`,
        '@dashboard': `dashboard@https://${DASHBOARD_DOMAIN_NAME}/remoteEntry.js`,
      },
      shared: dependencies
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig);