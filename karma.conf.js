const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    singleRun: false,
    frameworks: ['mocha', 'chai'],
    files: [
      'app/tests/**/*.spec.js',
    ],
    preprocessors: {
      'app/tests/**/*.spec.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000',
      },
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
  });
};
