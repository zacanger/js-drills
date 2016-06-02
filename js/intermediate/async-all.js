// write fn that takes multple fns as args
// last will be a cb that needs to be executed
// after all the others are done

const async = require('async')

const promisify = (...args) => {
  const callback = args.pop()
  const promiseArray = args.map(func => {
    return new Promise(resolve => {
      func(resolve)
    })
  })
  Promise.all(promiseArray)
  .then(callback)
}

const asyncify = (...args) => {
  const callback = args.pop()

  async.parallel(
    args
  , callback
  )
}

const oldschoolify = (...args) => {
  const callback = args.pop()
  args.forEach(func => func(callback))
}

module.exports = {
, promisify
, asyncify
  oldschoolify
}

