for (let i = 1; i < 101; i++) {
  console.log(
    [i, 'fizz', 'buzz', 'fizzbuzz'][(i % 3 === 0) + 2 * (i % 5 === 0)]
  )
}
