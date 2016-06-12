// Write a function that accepts a function and timeout, x,
// in number of milliseconds. It will return a new function
// that can only be executed on per timeout period - and if
// the function is invoked during the timeout period, the timeout
// period restarts. This is useful for functions that can be
// need to be blocked on subsequent attempts over short period
// of times. Once such is example, is clicks on a button.

// Once written, add a third parameter that will allow the
// function to be executed immediately if set to true. Otherwise
// the function will run at the end of the timeout period.

// test your code
const
  text   = () => 'good'
, inner  = debounce(text, 4000)
, inner2 = debounce(text, 2000, true)
, inner3 = debounce(text, 3000, false)

function debounce(cb, x, execute) {
  var flag = true
  var timeId
  function resetFlag() {
    timeId = setTimeout(function() {
      flag = true
    }, x)
  }

  return function() {
    if (execute) {
      return cb()
    }

    if (flag) {
      flag = false
      resetFlag()
      return cb()
    } else {
      flag = false
      clearTimeout(timeId)
      resetFlag()
      return 'too soon'
    }
  }
}


module.exports = (func, wait, immediate) => {
  let timeout
  return () => {
    const
      context = this
    , args    = arguments
    , later   = () => {
      func.apply(this, args)
    }

    if (immediate) {
      func.apply(context, args)
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
}

