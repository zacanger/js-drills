// given an array of objects, flatten into an array of unique values
const original = [
  { a: 'foo', b: 10 },
  { a: 'bar', b: 100 },
  { a: 'foo', b: 101 }
]

// result should be:
[ 'foo', 'bar' ]

// your code here

const res = [...new Set(original.map(({ a }) => a))]
