const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    common: "./src/ts/index.ts",
    main: "./src/ts/main.ts",
    pets: "./src/ts/pets.ts",
  }, 
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: "ts-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.json$/i,
        type: "json"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.html$/i,
        use: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./public")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/main.html",
      filename: "main.html",
      chunks: ["common", "main"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/pets.html",
      filename: "pets.html",
      chunks: ["common", "pets"]
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets/images", to: "assets/images" },
        { from: "src/assets/pets.json", to: "assets/pets.json" },
      ],
    }), 
  ]
}