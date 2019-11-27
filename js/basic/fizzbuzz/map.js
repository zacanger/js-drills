const numGen = i => i ? numGen(i - 1).concat(i) : []

console.log(numGen(100).map(n => n % 3 ?
      (n % 5 ? n : 'Buzz') :
      (n % 5 ? 'Fizz' : 'FizzBuzz')))
