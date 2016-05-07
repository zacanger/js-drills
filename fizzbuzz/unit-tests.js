function fizzbuzz(value) {
  if (value % 15 == 0) {
    return 'fizzbuzz'
  } else if (value % 3 == 0) {
    return 'fizz'
  } else if (value % 5 == 0) {
    return 'buzz'
  }

  return value
}

function assertEquals(expected, actual) {
  if (expected !== actual) {
    console.error('Expected ' + actual + ' to equal ' + expected)
  }
}

;[15, 30, 45, 60].forEach(value => {
  assertEquals('fizzbuzz', fizzbuzz(value))
})

;[3, 6, 9, 12, 18, 21, 24, 27, 33].forEach(value => {
  assertEquals('fizz', fizzbuzz(value))
})

;[5, 10, 20, 25, 35, 40].forEach(value => {
  assertEquals('buzz', fizzbuzz(value))
})

;[1, 2, 4, 7, 8, 11].forEach(value => {
  assertEquals(value, fizzbuzz(value))
})

for (let i = 1; i <= 100; i++) {
  console.log(fizzbuzz(i))
}

