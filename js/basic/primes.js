// sum the first 1000 primes:
// determine if number is prime,
// the loop through and summarize all primes until we have 1000 of them.
// var numPrimes = 0
//   , sumPrimes = 0
//   , i         = 2
// function isPrime(num){
//   for(var x = 2; x <= Math.rount(num/2); x++){
//     if(num % x === 0){
//       return false
//     }
//   } return true
// }
// while(numPrimes < 1000){
//   if(isPrime(i)){
//     sumPrimes += 1
//     numPrimes++
//   }
//   i++
// }

// optimised, tho (because we know that, with the
// exception of 2, all even numbers are straight-up disqualified):
var numPrimes = 1
  , sumPrimes = 2
  , i         = 3
function isPrime(num){
  if(num % 2 === 0){
    return false
  }
  for(var x = 3; x <= Math.round(num/2); x += 2){
    if(num % x === 0){
      return false
    }
    return true
  }
}
while(numPrimes < 1000){
  if(isPrime(i)){
    sumPrimes += 1
    numPrimes++
  }
  i++
}

