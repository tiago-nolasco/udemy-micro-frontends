const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@./marketing/remoteEntry.js?v=" + Math.random(),
        auth: "auth@./auth/remoteEntry.js?v=" + Math.random(),
        dashboard: "dashboard@./dashboard/remoteEntry.js?v=" + Math.random(),
      },
      shared: packageJson.dependencies
    }),
  ]
};

module.exports = merge(commonConfig, prodConfig);
