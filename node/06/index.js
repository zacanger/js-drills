// set debug = false to disable logging

module.exports = function log() {
  if (debug && console) {
    console.log(...arguments)
  }
}

const log = () => {
  debug && console && console.log.apply(console, arguments)
}
module.exports = log

// test
let debug = true
log('this is a test\n')
