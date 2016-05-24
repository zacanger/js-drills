var FIZZ = 'FIZZ'
var BUZZ = 'BUZZ'

var PRINTFIZZ = function(){console.log(FIZZ)}
var PRINTBUZZ = function(){console.log(BUZZ)}
var PRINTFIZZBUZZ = function(){console.log(FIZZ + BUZZ)}
var PRINTNUM = function(i){console.log(i)}

var ISMULTIPLEOFTHREE = function(i){return i%3==0}
var ISMULTIPLEOFFIVE = function(i){return i%5==0}
var ISMULTIPLEOFTHREEANDFIVE = function(i){return (i%3==0 && i%5==0)}

var LOOP = function(times){for(var i = 1; i<times; i++)BODY(i)}
var BODY = function(i){
  if (ISMULTIPLEOFTHREEANDFIVE(i)) {
    PRINTFIZZBUZZ()
  } else if (ISMULTIPLEOFTHREE(i)) {
    PRINTFIZZ()
  } else if (ISMULTIPLEOFFIVE(i)) {
    PRINTBUZZ()
  } else {
    PRINTNUM(i)
  }
}

LOOP(100)

