for (let i = 1; i <= 100; i++) {
  let
    mod3   = i % 3 === 0
  , mod5   = i % 5 === 0
  , result = mod3 && mod5 ? 'fizzbuzz' : mod3 ? 'fizz' : mod5 ? 'buzz' : i

  console.log(result)
}
