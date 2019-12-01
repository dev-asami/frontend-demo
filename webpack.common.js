const path = require('path');

module.exports = {
  entry: './src/main/frontend/credit-tp.js',
  output: {
    filename: 'credit-tp.js',
    path: path.join(__dirname, 'target/classes/static/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // style-loaderを使って、読み込んだcssを自動で<style>タグとして読み込むようにする
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};