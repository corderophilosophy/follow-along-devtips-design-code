var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './webpack/entry.js',
  output: {
    path: __dirname + '/src/assets/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
      	presets: ['es2015']
      }
    }, {
      test: /\.scss/,
      loader: ['style', 'css', 'sass', 'postcss']
    }, {
      test: /\.pug/,
      loader: 'pug-html-loader'
    }]
  },
  postcss: function() {
    return [precss, autoprefixer];
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      }
    }),
  ]
};
