let o, i

for (i = 1; i <= 100; i++) {
  o = ''
  i % 3 === 0 ? o += 'fizz' : o
  i % 5 === 0 ? o += 'buzz' : o
  o === '' ? o = i : o
  console.log(o)
}

