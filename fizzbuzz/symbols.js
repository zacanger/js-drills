const NumbersFromOne = {
  *[Symbol.iterator] () {
    for (let i = 1;; ++i) {
      yield i
    }
  }
}

const take = function* (numberToTake, iterable) {
  let remaining = numberToTake

  for (let value of iterable) {
    if (remaining-- <= 0) {
      break
    }
    yield value
  }
}

const replaceEvery = function* (period, replacement, iterable) {
  let count = period

  for (let value of iterable) {
    if (--count === 0) {
      yield replacement
      count = period
    }
    else yield value
  }
}

const
  oneTo100 = take(100, NumbersFromOne)
, fizz     = replaceEvery(3, 'fizz', oneTo100)
, buzz     = replaceEvery(5, 'buzz', fizz)
, fizzbuzz = replaceEvery(15, 'fizzbuzz', buzz)

console.log(...fizzbuzz)

