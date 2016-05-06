function* FizzBuzz() {
  let idx = 0
  while (true) {
    let val = ''
    idx++
    if (idx % 3 === 0) {
      val += 'Fizz'
    }
    if (idx % 5 === 0) {
      val += 'Buzz'
    }
    yield val || idx
  }
}

let fb = FizzBuzz()

for (let i = 0; i < 100; i++) {
  console.log(fb.next().val)
}

