// Write a function that takes in an array of stock prices, as numbers, and
// determine what the maximum possible profit from that day. Remember that you
// cannot sell before you buy. The function should return an object containing the
// maximum profit, and the buy and sell indices

// usage : maxProfit([10, 7, 5, 8, 11, 9]) // {buyIndex : 2, sellIndex : 4, profit : 6}

const maxProf = arr => {
  let
    buy = 0
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
  return { buy, sell, maxDiff }
}
console.log(maxProf([10, 7, 5, 8, 11, 9]))

//
function maxProfit (arg) {
  const maxProfit = {
    buyIndex: null,
    sellIndex: null,
    profit: 0
  }

  for (let i = 0; i < arg.length; i++) {
    for (let j = i + 1; j < arg.length; j++) {
      if ((arg[j] - arg[i]) > maxProfit.profit) {
        maxProfit.buyIndex = i
        maxProfit.sellIndex = j
        maxProfit.profit = arg[j] - arg[i]
      }
    }
  }
  return maxProfit
}
console.log(maxProf([10, 7, 5, 8, 11, 9]))
