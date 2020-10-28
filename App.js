#!/usr/bin/env node
var opn = require('opn')

module.exports = async () => {
  return opn('http://alestor123.github.io/', { wait: false })
}

if (!module.parent) {
  module.exports()
    .then(() => {
      console.log('Desp Times Desp Measures')
      process.exit(0)
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}