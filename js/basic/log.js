// make console.log not annoying

const doLog = true

function log(){
  if(doLog && console){
    console.log.apply(console, arguments)
  }
}

// example usage
function ex(ample){
  log(ample)
}
ex('testing from inside a function, here\n')
log('testing directly, here\n')

// or, put another way:
// var doLog = true
// var log = function(){
//   doLog && console && console.log.apply(console, arguments)
// }

