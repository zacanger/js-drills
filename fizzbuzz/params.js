function fizzbuzz(num, fizz, buzz) {
  for (var i = 1; i <= num; i++) {
    if (i % (fizz * buzz) === 0) {
      console.log('FizzBuzz')
    } else if (i % buzz === 0) {
      console.log('Buzz')
    } else if (i % fizz === 0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(100, 3, 5)

