const fb = n => {
  switch(true) {
    case item % 15 === 0:
      console.log('fizbuzz')
      break
    case item % 3 === 0:
      console.log('fizz')
      break
    case item % 5 === 0:
      console.log('buzz')
      break
    default:
      console.log(n)
      break
  }
}

const nums = Array.apply(null, Array(100)).map(() => Math.round(Math.random() * 100) + 1)

nums.map(fb)
