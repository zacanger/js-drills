const range = (n) => [...new Array(n).keys()]

const fbTest = (n) => {
  const by3 = n % 3 === 0,
    by5 = n % 5 === 0

  return by3 && by5 ? 'fizz buzz' : by3 ? 'fizz' : by5 ? 'buzz' : n
}

const fizzBuzz = (n) =>
  range(n)
    .map((x) => fbTest(x + 1))
    .join(', ')

console.log(fizzBuzz(100))
