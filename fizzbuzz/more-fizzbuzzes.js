var fizzBuzz = function () {
  var i, output
  for (i = 1; i < 101; i += 1) {
    output = ''
    if (!(i % 3)) { output += 'Fizz' }
    if (!(i % 5)) { output += 'Buzz' }
    console.log(output || i)
  }
}

// Alternate version with ghetto pattern matching
for (var i = 1; i <= 100; i++) {
  console.log({
    truefalse: 'Fizz'
  , falsetrue: 'Buzz'
  , truetrue: 'FizzBuzz'
  }[(i%3==0) + '' + (i%5==0)] || i)
}

//Or very tersely:
for(i=1;i<101;i++)console.log((x=(i%3?'':'Fizz')+(i%5?'':'Buzz'))?x:i)

// or, in a more functional style, without mutations
(function rng(i){
  return i ? rng(i - 1).concat(i) : []
})(100).map(
  function(n){
    return n % 3 ?
      (n % 5 ? n : "Buzz") :
      (n % 5 ? "Fizz" : "FizzBuzz")
  }).join(' ')
