// set debug = false to disable logging

module.exports = function log () {
  if (typeof debug !== 'undefined' && !!debug && console) {
    console.log(...arguments)
  }
}

// test
const debug = true
log('this is a test\n')
