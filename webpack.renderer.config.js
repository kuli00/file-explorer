const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    alias: {
      Components: path.join(__dirname, './src/components'),
      Styles: path.join(__dirname, './src/styles/index.ts'),
      Contexts: path.join(__dirname, './src/context'),
      Main: path.join(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
