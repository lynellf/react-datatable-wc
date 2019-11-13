const merge = require('webpack-merge')
const common = require('./webpack.config.common')

module.exports = merge(
  {
    mode: 'production',
    watch: false,
    output: {
      path: `${__dirname}/dist`,
      filename: 'react-table-wc-dist.js'
    }
  },
  common
)
