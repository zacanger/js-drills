for (let i = 1; i <= 100; i++) {
  const fizz = !(i % 3) ? 'Fizz' : ''
  const buzz = !(i % 5) ? fizz + 'Buzz' : fizz
  console.log(buzz || i)
}
