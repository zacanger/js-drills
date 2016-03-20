// write a way of working with javascript modules that'll work
// in node, the browser, and with AMD (requirejs)

((namespace) => {
  if(typeof define === 'undefined'){
    define = (fn) => {
      var res = fn()
      if(typeof exports == 'undefined'){
        window[namespace] = res
      } else {
        module.exports = res
      }
    }
  }
  define(() => {
    // return the things from the module here!
    return { greets : 'howdy' }
  })
})('someModule')

// example node usage:
const someModule = require('some-module')
console.log(someModule.greets) // => 'howdy'

// example browser usage:
// <script type="text/javascript" src="./someModule.js"></script>
// <script type="text/javascript">someModule.greets()</script>

// example requirejs usage:
define(['somemodule'], function(someModule){
  console.log(someModule.greets) // => 'howdy'
  // source code all in here i guess
})

