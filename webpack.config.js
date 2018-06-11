const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const WEB_PAGE_TITLE = 'Seenit';

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  plugins: [
    new HtmlPlugin({
      title: WEB_PAGE_TITLE,
    }),
  ]
};