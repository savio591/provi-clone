const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.resolve(__dirname, "src", "index"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".svg", ".png"],
  },

  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
    port: 9000,
  },

  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.(cs|scs)s?$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        exclude: /node_modules/,
        dependency: { not: ["url"] },
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
        type: "javascript/auto",
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
