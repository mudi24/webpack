var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");

const base = require('./webpack.config.base.js')

module.exports = {
  ...base, // 引入base的所有属性
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/i,
      use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "../"
          }
        },
        "css-loader"
      ]
    }]
  }
};