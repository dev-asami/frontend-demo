const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main/frontend/js/credit-tp.js',
  output: {
    filename: 'credit-tp.js',
    path: path.join(__dirname, 'target/classes/static/js')
  }
};
