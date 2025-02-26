const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  target: "web",
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
    gallery: "./src/gallery.js",
    contact: "./src/contact.js",
  },
  output: {
    filename: "[name].bundle.js",
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
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html",
      chunks: ["about"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "gallery.html",
      template: "./src/gallery.html",
      chunks: ["gallery"],
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
      chunks: ["contact"],
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|avif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
