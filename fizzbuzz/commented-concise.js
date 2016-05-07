// concise

var f = 'Fizz', b = 'Buzz', i = 0, d3, d5
for (i; ++i <= 100; d3 = !(i % 3), d5 = !(i % 5), console.log(d3 ? d5 ? f+b : f : d5 ? b : i))

// commented
var             // declare vars first
  f = 'Fizz'
, b = 'Buzz'
, i = 0         // our counter
, d3            // divisible by 3
, d5            // divisible by 5
for (           // open our loop (which will have no body)
  i; i++ <=100; // starting with our i, incrementing, stopping at 100
  d3 = !(i % 3) // testing to see if i % 3 is true, but by testing 0 (false); ! is to coerce
, d5 = !(i % 5) // same as above, but with 5
, console.log(  // we're going to log stuff out
    d3        ? // divisible by 3?
      d5      ? // and 5?
        f + b : // return 'FizzBuzz' if they're both true!
      f       : // if just three, 'Fizz'
    d5        ? // what about just 5?
      b       : // okay, then 'Buzz'
    i           // no? just return i, then
  )             // end log
)               // end loop

