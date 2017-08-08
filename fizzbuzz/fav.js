const fizzbuzz = (n) =>
  Array(n).fill().map((_, i) =>
    i + 1).map((n) =>
      n % 15 === 0
        ? 'fizzbuzz'
        : n % 3 === 0
          ? 'fizz'
          : n % 5 === 0
            ? 'buzz'
            : n)
