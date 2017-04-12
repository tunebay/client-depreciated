const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const VENDOR_LIBS = [
  'axios',
  'classnames',
  'history',
  'lodash',
  'moment',
  'node-uuid',
  'rc-progress',
  'react',
  'react-addons-css-transition-group',
  'react-datepicker',
  'redux',
  'react-dropzone',
  'react-router-dom',
  'react-select',
  'react-sortable-hoc',
  'react-sound',
  'react-redux',
  'react-spinner',
  'react-tooltip',
  'react-router',
  'react-dom',
  'redux-thunk',
  'redux-form',
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
        test: /\.(scss|css)$/
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|woff|ttf)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: { limit: 40000 }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new FaviconsWebpackPlugin('./assets/images/logo.png'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
