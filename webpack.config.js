const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
   './src/index.js'
  ],
  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
      
    ]
  }
}

  // entry: {
  //   app: './src/index.js'
  // },