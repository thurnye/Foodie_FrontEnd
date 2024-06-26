const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");


module.exports = {
  output: {
    publicPath: '/',
    path: path.join(__dirname, "/build"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
    libraryTarget: 'umd', 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin(), 
  ],
  devServer: {
    port: '4000',
    historyApiFallback: true, // you can change the port
    hot: true, 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|woff|woff2|ttf|eot)$/,
        type: 'asset/resource'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.mjs'],
  },
};