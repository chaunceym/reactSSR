const path = require("path");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const config = require("./webpack.base");

const serverConfig = {
  mode: "development",
  target: "node",
  entry: "./src/server/index.js",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              esModule: false, // 解决 _getCss 输出为 object module
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
};

module.exports = merge(config, serverConfig);
