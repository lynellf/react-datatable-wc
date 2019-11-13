const path = require('path')

module.exports = {
  entry: './src/react-table.js',
  mode: 'development',
  watch: true,
  output: {
    path: `${__dirname}/dev`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      }
    ]
  }
}
