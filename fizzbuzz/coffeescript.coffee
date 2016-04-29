for i in [1..100]
  str = ''
  str += 'Fizz' if i % 3 is 0
  str += 'Buzz' if i % 5 is 0
  console.log (if str.length is 0 then i else str)

