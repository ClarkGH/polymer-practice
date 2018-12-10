const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'boilerplate.bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
};