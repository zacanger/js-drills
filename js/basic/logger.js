// create an object (call it logger) with two methods
// method one: logs out msg with word INFO: prefixed
// method two: logs err to console with ERROR: prefixed

const logger = {
  info (msg) {
    console.log(`INFO: ${msg}`)
  }
, error (err) {
    console.error(`ERROR: ${err}`)
  }
}

var logger = {
  info  : function (msg) {
    console.log('INFO: ' + msg)
  },
, error : function (err) {
    console.error('ERROR: ' + err)
  }
}

