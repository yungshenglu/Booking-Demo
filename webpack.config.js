const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    port: 9527,
    open: true,
    hot: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@C': path.resolve(__dirname, 'src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ]
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      filename: './public/index.html',
      minify: {
        collapseWhitespace: true,
      },
      inject: false,
    }),
  ],
};
