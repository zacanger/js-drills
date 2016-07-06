let f, b, fb, n

for (n = 1; n <= 100; n++) {
  f  = !(n % 3)
  b  = !(n % 5)
  fb = f && b
  console.log(
    fb ? 'fizzbuzz' :
   (f  ? 'fizz'     :
    b  ? 'buzz'     :
    n))
}
