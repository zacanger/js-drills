// write functions for debounce and throttle

function debounce (fn, delay) {
  var timer = null
  return function () {
    var context = this, args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

function throttle (fn, threshhold) {
  threshhold || (threshhold = 250)
  var last, deferTimer

  return function () {
    var context = this
      , now     = +new Date
      , args    = arguments

    if (last && now < last + threshhold) { //within threshold, set to threshold
      // hold on to it
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else { //outside threshold, execute it
      last = now
      fn.apply(context, args)
    }
  }
}

function throttle (fn, ms) {
  let
    lastCalled
  , timeout
  , ctx
  , args

  return function () {
    if (!lastCalled || (new Date() - lastCalled > ms && !timeout)) {
      lastCalled = new Date()
      return fn.apply(this, arguments)
    } else {
      ctx = this
      args = [].slice.call(arguments)
      if (!timeout) {
        timeout = setTimeout(() => {
          lastCalled = new Date()
          fn.apply(ctx, args)
          timeout = null
        }, ms)
      }
    }
  }
}
