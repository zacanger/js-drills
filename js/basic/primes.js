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

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

let numPrimes = 1
let sumPrimes = 2
let i = 3
function isPrime(num) {
  if (num % 2 === 0) {
    return false
  }
  for (let x = 3; x <= Math.round(num / 2); x += 2) {
    if (num % x === 0) {
      return false
    }
    return true
  }
}
while (numPrimes < 1000) {
  if (isPrime(i)) {
    sumPrimes += 1
    numPrimes++
  }
  i++
}
