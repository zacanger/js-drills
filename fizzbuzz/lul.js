(function (window) {
  'use strict'
  var
    counter = 1
  , limit   = 100
  , options = {
    3         : 'Fizz'
  , 5         : 'Buzz'
  , 'default' : function (input) {
      return input
    }
  }

  var noop = function () {
    return
  }

  var print = function (input) {
    var output = []
    Object.keys(options).map(
      function (key) {
        (((typeof options[key] !== 'function') && ((parseInt(input, 10) % parseInt(key, 10)) === 0)) ? Array.prototype.push : noop).call(output, options[key])
      }
    )
    return console.log.call(console, output.length ? output.join('') : options.default.call(this, input))
  }

  for (; counter <= limit; counter += 1) {
    print.call(this, counter)
  }
})(this)

