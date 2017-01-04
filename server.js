/* eslint no-console: 0 */
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');

const ADDR = 'localhost';
const PORT = process.env.PORT || 3000;

//
const app = express();
const compiler = webpack(webpackConfig);

// app.use(express.static('public/dist'));
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    color: true,
  },
}));

app.use(webpackHotMiddleware(compiler));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, ADDR, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server fires up at ${ADDR}:${PORT}`);
});
