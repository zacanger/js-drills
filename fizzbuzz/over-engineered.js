function fizzbuzz() {
  let
    i      = 1
  , result = []

  ;(function loop() {
    let str = ''
    str += fizz(i)
    str += buzz(i)
    result.push(ifFalsy(str, i))
    if (isLt100(i++)) {
      loop()
    }
  })()
  print(result.join(', '))
}

function fizz(num) {
  return isDivBy3(num) ? 'fizz' : ''
}

function buzz(num) {
  return isDivBy5(num) ? 'buzz' : ''
}

function isDivBy3(num) {
  return num % 3 === 0
}

function isDivBy5(num) {
  return num % 5 === 0
}

function isLt100(num) {
  return num < 100
}

function ifFalsy(value, fallback) {
  return !value ? fallback : value
}

function print(str) {
  console.log(str)
}

fizzbuzz()
