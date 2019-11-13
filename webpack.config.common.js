const path = require('path')

module.exports = {
  entry: `${__dirname}/src/react-table.js`,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, '/node_modules')],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  devServer: {
    contentBase: `${__dirname}/public`,
    compress: true,
    port: 9000,
    liveReload: true,
    open: true
  }
}
