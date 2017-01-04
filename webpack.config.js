const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'proess.env': {
        NODE_ENV: JSON.stringify('deployment'),
      },
    }),
  ],
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.jsx'],
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
