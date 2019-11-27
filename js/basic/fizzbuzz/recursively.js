const fizzBuzz = num => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz')
  } else if (num % 3 === 0) {
    console.log('Fizz')
  } else if (num % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(num)
  }

  if (num < 100) {
    let newNum = num + 1
    fizzBuzz(newNum)
  }
}

fizzBuzz(1)
