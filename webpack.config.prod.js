const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: './public',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'proess.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'airbnb', 'stage-0'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
      }, {
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
        test: /\.scss$/,
        exclude: /node_modules/,
      }, {
        test: /\.(png|jpg|svg|gif|otf|ttf|woff|eot)$/,
        loaders: ['file'],
        exclude: /node_modules/,
      },
    ],
  },
};
