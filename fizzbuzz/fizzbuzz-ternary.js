// this is neither good-looking nor readable.
// but it is concise, and at least it's in plain
// javascript, not weirdly obfuscated or anything.
for (var i = 1; i <= 100; i++) {
  var fizz = (!(i%3)) ? 'Fizz' : ''
    , buzz = (!(i%5)) ? fizz + 'Buzz' : fizz
  console.log((buzz) ? buzz : i)
}

// though, i guess it _could_ be...
for(var i=1;i<=100;i++){var fizz=(!(i%3))?'Fizz':'';var buzz=(!(i%5))?fizz+'Buzz':fizz;console.log((buzz)?buzz:i);}

