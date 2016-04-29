for (let i = 1; i <= 100; i++) {
  let
    fizz = (!(i%3)) ? 'Fizz' : ''
  , buzz = (!(i%5)) ? fizz + 'Buzz' : fizz
  console.log((buzz) ? buzz : i)
}

