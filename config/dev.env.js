'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_PATH: '"/data/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL"'
})
