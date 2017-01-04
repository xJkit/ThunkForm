/* eslint no-console: 0 */
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');

const ADDR = 'localhost';
const PORT = process.env.PORT || 3000;
// fake data
const economy = require('./roomdata/economy.json');
const normal = require('./roomdata/normal.json');
const premium = require('./roomdata/premium.json');
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

app.get('/api/economy', (req, res) => {
  res.json(economy);
});

app.get('/api/normal', (req, res) => {
  res.json(normal);
});

app.get('/api/premium', (req, res) => {
  res.json(premium);
});

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
