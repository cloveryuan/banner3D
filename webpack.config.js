const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    "src/index": "./src/index.js",
  },
  output: {
    publicPath: "./",
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      //  {
      //     test: /\.css$/,  // 用正则去匹配要用该 loader 转换的 CSS 文件
      //     use: ['style-loader', 'css-loader'],
      //   },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../", // 在这里配置publicPath，不然CSS里面的图片路径是以CSS目录为根目录的
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(js|jsx)/,
        use: ["babel-loader"],
      },
      //   {
      //   test:/\.(jpg|png|jpeg|gif)$/,
      //   use:['url-loader'],

      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[ext]",
              // publicPath: "./img/",
              outputPath: "img/",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-withimg-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/index.css", // 从 .js 文件中提取出来的 .css 文件的名称
    }),
    new HtmlWebpackPlugin({
      template: "./list.html",
      filename: "list.html",
    }),
    new HtmlWebpackPlugin({
      template: "./3D.html",
      filename: "3D.html",
    }),
  ],
  devServer: {
    contentBase: "./dist",
    inline: true,
    port: 3001,
    open: true,
  },
  mode: "production", // 设置mode
};
module.exports = config;
