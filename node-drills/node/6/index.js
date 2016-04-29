// set debug = false to disable logging
var debug = true
var log = function(){
  debug && console && console.log.apply(console, arguments)
}

log('this is a test\n')

