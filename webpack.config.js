var path = require('path');

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
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }
}
