const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeEnv = process.env.NODE_ENV || "development";
const isProd = nodeEnv === "production";

const plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new HtmlWebpackPlugin({
    title: "Bài tập Typescript",
    template: "!!ejs-loader!src/index.html",
    chunks: ['app']
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      tslint: {
        emitErrors: true,
        failOnHint: true
      }
    }
  }),
  new MiniCssExtractPlugin({
    filename: isProd ? "[name].[hash].css" : "[name].css",
    chunkFilename: isProd ? "[id].[hash].css" : "[id].css"
  })
];

const config = {
  devtool: isProd ? false : "source-map",
  context: path.resolve("./src"),
  entry: {
    app: "./index.ts"
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: ["awesome-typescript-loader", "source-map-loader"]
      },
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ].filter(Boolean)
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, "src/"),
    compress: true,
    port: 3000,
    hot: true,
    watchContentBase: true
  }
};

module.exports = config;
