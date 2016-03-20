#!/usr/bin/env node

// make a palindrome-checking tool that works on the command line

var str = process.argv[2]

function palindrome(str){
  return str == str.split('').reverse().join('')
}

console.log('is ' + str + ' a palindrome? that\'s ' + palindrome(str))

