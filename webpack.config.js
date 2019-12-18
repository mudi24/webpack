const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const base = require('./webpack.config.base.js')

module.exports = {
  ...base, // 引入base的所有属性 
  // mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "webpack",
  //     template: "src/assets/index.html"
  //   })
  // ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};