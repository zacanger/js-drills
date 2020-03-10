#!/usr/bin/env node

// make a palindrome-checking tool that works on the command line

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
 *
 *
 *
 */

const str = process.argv[2] || 'tacocat'
const pal = (str) =>
  str ==
  str
    .split('')
    .reverse()
    .join('')
console.log(`is ${str} a palindrome? that's ${pal(str)}`)
