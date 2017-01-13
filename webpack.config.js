const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const VENDOR_LIBS = [
//   'react', 'redux', 'react-redux', 'redux-form',
//   'react-dom', 'redux-thunk'
// ];

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}
