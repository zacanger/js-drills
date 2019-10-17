// I have an array of 24 stock prices for each out tomorrow, e.g.
// [20, 15, 1, 10, 15, 8, 16, 17, 8, 13, 10, 11, 19, 7, 6, 12, 6, 6, 6, 2, 11, 5, 1, 5]
// I start with no stock and can only buy and sell once, otherwise the time police will get me.
// Write a function that lets me know which hour to buy and which hour to sell to maximize my profit.

// For the above array, your function should return [2, 12].

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
 *
 *
 *
 *
 *
 *
 */

// easy solution
const ticker = arr => {
  let buy = 0
  let sell = 1
  let diff = arr[sell] - arr[buy]

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const check = arr[j] - arr[i]
      if (check > diff) {
        buy = i
        sell = j
        diff = check
      }
    }
  }
  return [buy, sell]
}

console.log(ticker([16, 7, 13, 8, 3, 9, 12, 3, 14, 3, 16, 13, 2, 3, 14, 2, 5, 4, 17, 13, 11, 2, 20, 1]))

// harder solution
const ticker2 = (arr) => {
  let buy = 0
  let sell = 0
  let maxDiff = 0
  let min = 0
  let diff

  for (let i = 1; i < arr.length; i++) {
    // if current value is less than current minimum, update minimum
    if (arr[i] < arr[min]) {
      min = i
    }
    // find difference between current value and min value
    diff = arr[i] - arr[min]
    // if current difference is higher than max, we've found a better combination than the current one
    // update our choices accordingly
    if (diff > maxDiff) {
      buy = min
      sell = i
      maxDiff = diff
    }
  }
  return [buy, sell]
}

console.log(ticker2([20, 15, 1, 10, 15, 8, 16, 17, 8, 13, 10, 11, 19, 7, 6, 12, 6, 6, 6, 2, 11, 5, 1, 5]))
