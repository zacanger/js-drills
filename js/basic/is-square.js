// write a function that determines if an argument is a square
// you can assume you're passed a number


const isSquare = n => Number.isInteger(Math.sqrt(n))

const isSquare = n => n > 0 && Math.sqrt(n) % 1 === 0
