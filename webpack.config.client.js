const path = require("path");
const { moduleFileExtensions } = require("./extensions");
const { ProgressPlugin, EnvironmentPlugin } = require("webpack");

/** @type {import('webpack').Configuration} */
const webpackClientConfig = {
  mode: "development",
  bail: false,
  stats: "normal",
  devtool: "source-map",
  resolve: {
    extensions: moduleFileExtensions.map((extension) => `.${extension}`),
  },
  entry: {
    index: path.resolve(__dirname, "client", "index"),
    externals: path.resolve(__dirname, "client", "externals"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    sourceMapFilename: "[name].js.map",
    library: ["hydrator", "[name]"],
    libraryTarget: "umd",
    globalObject: "(typeof self != 'undefined' ? self : this)",
  },
  externals: {
    react: {
      root: ["externals", "React"],
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
    },
    "react-dom": {
      root: ["externals", "ReactDOM"],
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
    },
    "react/jsx-runtime": {
      root: ["externals", "jsx"],
      commonjs: "react/jsx-runtime",
      commonjs2: "react/jsx-runtime",
      amd: "react/jsx-runtime",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/u,
        use: {
          loader: "swc-loader",
          options: {
            sourceMap: true,
            jsc: {
              target: "es2020",
              parser: {
                syntax: "typescript",
                jsx: true,
              },
              externalHelpers: true,
              preserveAllComments: false,
              transform: {
                react: {
                  runtime: "automatic",
                  throwIfNamespace: true,
                  useBuiltins: false,
                },
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

module.exports = webpackClientConfig;
