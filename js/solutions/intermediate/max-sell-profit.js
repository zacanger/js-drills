// given a list of stock prices for n  days,
// find the max profit with a single buy/sell activity
// if you can't maximize buy/sell profit and can't make
// a profit, minimize loss

const maxProfit = arr => {
  if (!arr || arr.length < 2) {
    console.error('Please give a valid list.')
  }

  let currentBuy = arr[0]
  let globalSell = arr[1]
  let globalProfit = globalSell - currentBuy
  let currentProfit = 0

  for (let i = 1; i < arr.length; i++) {
    currentProfit = arr[i] - currentBuy

    if (currentProfit > globalProfit) {
      globalSell = arr[i]
      globalProfit = currentProfit
    }

    if (currentBuy > arr[i]) {
      currentBuy = arr[i]
    }
  }

  return globalProfit
}
