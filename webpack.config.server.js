const path = require("path");
const { moduleFileExtensions } = require("./extensions");
const { ProgressPlugin, EnvironmentPlugin } = require("webpack");
const nodeExternals = require("webpack-node-externals");

/** @type {import('webpack').Configuration} */
const webpackServerConfig = {
  mode: "development",
  bail: false,
  stats: "normal",
  target: "node",
  entry: {
    server: path.resolve(__dirname, "server"),
  },
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
    filename: "server/index.js",
    publicPath: "/",
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: moduleFileExtensions.map((extension) => `.${extension}`),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/u,
        use: {
          loader: "swc-loader", // Use swc-loader for Webpack
          options: {
            sourceMap: true,
            jsc: {
              target: "es2020",
              parser: {
                syntax: "typescript",
                jsx: false,
              },
            },
          },
        },
        type: "javascript/auto",
      },
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new EnvironmentPlugin(Object.keys(process.env)),
  ],
};

module.exports = webpackServerConfig;
