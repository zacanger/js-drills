// Write a function that takes a list of valid users and returns
// a function that returns true if all of the list of users matches
// a list of supplied users.
// Use Array.some and Array.every
// Do not use any for, while, or forEach loops.
// Do not create any extra helper functions.

// This is the array of known good users
const goodUsers = [
  { id: 1 }
, { id: 4 }
, { id: 12 }
, { id: 9 }
, { id: 123 }
]

// Your function here.


// Test it
const checkIfValid = checkUsers(goodUsers) // checkUsers is your function
console.log('Should return true:', checkIfValid([
  { id: 1 }
, { id: 123 }
]))

console.log('Should return false:', checkIfValid([
  { id: 5 }
, { id: 999 }
]))
