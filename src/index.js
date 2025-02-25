const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  target: "web",  // ✅ Fix: Ensures Webpack runs in the browser
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
      title: "Rogue-spark",
      template: "./src/index.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },  // ✅ Fix: Ensures styles are injected in the browser
          { loader: "css-loader" }
        ],
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
