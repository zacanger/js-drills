// es6
// returns maximum depth of an array
// returns 0 if passed int
f = a => a[0] ? Math.max(...a.map(f)) + 1 : 0
// if a is an array, return max depth
// of each element in array
// add 1 to increase depth
// if a is int, return 0
