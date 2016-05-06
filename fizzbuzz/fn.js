const word = x => {
  if (!(x % 15)) {
    return 'fizzbuzz'
  } else if (!(x % 3)) {
    return 'fiz'
  } else if (!(x % 5)) {
    return 'buzz'
  } else {
    return x
  }
}

const fb = max => Array
  .apply(null, {length : max + 1})
  .map(Number.call, Number)
  .splice(1)
  .map(word)

