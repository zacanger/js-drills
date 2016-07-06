let
  div = ((n, s) => i => i % n ? '' : s)
, f = div(3,'fizz')
, b = div(5,'buzz')
, loop = fn => i => i > 0 && loop(fn)(i - 1) || fn(i)
, fizzbuzz = loop(i => console.log(f(i) + b(i) || i))
fizzbuzz(100)

// (or)
let
  div = ((n, s) => i => i % n ? '' : s)
, f = div(3,'fizz')
, b = div(5,'buzz')
, fizzbuzz = i => i > 0 && fizzbuzz((i - 1)) || console.log(f(i) + b(i) || i)
fizzbuzz(100)
