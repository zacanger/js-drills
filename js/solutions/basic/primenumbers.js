// write a function that accepts a number and returns a boolean based on whether it's a prime number

function primeFinder (num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0 && i !== num) {
      return false
    }
  }
  return true
}

function primeFinder (num) {
  if (num % 2 === 0) {
    return false
  }
  let middle = ~~Math.sqrt(num)
  for (let i = 3; i <= middle; i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function primeFinder (num) {
  if (num === 2) {
    return true
  }
  if (num < 2 || !(num & 1)) {
    return false
  }
  for (let i = 3, l = Math.floor(Math.pow(num, 0.5)); i <= l; i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
