const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  target: "web",  // Ensures Webpack runs in a browser environment
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: true,
  },
  devtool: "eval-source-map",
  plugins: [
    new ESLintPlugin({ extensions: ["js"] }),
    new CleanWebpackPlugin({ verbose: true }),
    new HtmlWebpackPlugin({
      title: "Shape Tracker",
      template: "./src/index.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Ensure styles are properly loaded
      },
      {
        test: /\.(gif|png|jpe?g|avif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
