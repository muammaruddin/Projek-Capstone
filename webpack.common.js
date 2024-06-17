/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/destination-api\.dicoding\.dev\/list/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'destination-list-cache',
          },
        },
        {
          urlPattern: /^https:\/\/destination-api\.dicoding\.dev\/detail/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'destination-detail-cache',
          },
        },
        {
          urlPattern: /^https:\/\/destination-api\.dicoding\.dev\/search/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'destination-search-cache',
          },
        },
        {
          urlPattern: /^https:\/\/destination-api\.dicoding\.dev\/review/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'destination-review-cache',
          },
        },
        {
          urlPattern: /^https:\/\/destination-api\.dicoding\.dev\/images/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'destination-image-cache',
          },
        },
      ],
    }),
  ],
};
