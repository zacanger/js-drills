console.log(
  ((n) =>
    [...new Array(n)]
      .map((_, n) => {
        const i = n + 1
        return i % 15 === 0
          ? 'FizzBuzz'
          : i % 5 === 0
          ? 'Buzz'
          : i % 3 === 0
          ? 'Fizz'
          : i
      })
      .join('\n'))(100)
)
