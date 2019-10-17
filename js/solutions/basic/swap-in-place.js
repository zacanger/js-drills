// given two variables, swap them in place
// this means swap their values, without creating a
// third temp variable

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
 */

let a = 1
let b = 2

// your code here

a = b - a
b = b - a
a = a + b

// alternatively
a = a + b
b = a - b
a = a - b

// or with es2015
[ b, a ] = [ a, b ]
