// write a memoizing function

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

export const memoizeSimple = fn => {
  let cachedArg
  let cachedRes
  return arg => {
    if (cachedArg === arg) {
      return cachedRes
    }
    cachedArg = arg
    cachedRes = fn(arg)
    return cachedRes
  }
}

export const memoizeWithCache = fn => (arg, memoCache) => {
  if (memoCache.arg === arg) {
    return memoCache.res
  }
  const res = fn(arg)
  memoCache.arg = arg
  memoCache.res = res
  return res
}

export function memoize (fn) {
  const cache = {}
  const fnVal = function (val) {
    return val
  }
  return function () {
    const key = fnVal.apply(this, arguments)
    if (key in cache) {
      return cache[key]
    } else {
      const v = fn.apply(this, arguments)
      cache[key] = v
      return v
    }
  }
}

function memoize (fn) {
  var cache = {}
  return function (n) {
    var key = JSON.stringify([].slice.call(arguments))
    if (!(key in cache)) {
      cache[key] = fn.apply(null, arguments)
    }

    return cache[key]
  }
}
