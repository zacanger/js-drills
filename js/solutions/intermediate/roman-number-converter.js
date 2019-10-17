function convert (num) {
  var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  var decimal = [1, 5, 10, 50, 100, 500, 1000]
  var closest = 1
  var counter = 0
  var temp = ''
  console.log('Converting ' + num)
  if (decimal.indexOf(num) > 0) {
    return roman[decimal.indexOf(num)]
  }

  for (var i = decimal.length - 1; i >= 0; i--) {
    if (num >= decimal[i] - 1) {
      closest = decimal[i]
      break
    }
  }

  if (num == closest - 1) {
    return 'I' + roman[decimal.indexOf(closest)]
  }
  while (num % closest !== 0) {
    num--
    counter++
  }
  var amount = num / closest
  for (var j = 0; j < amount; j++) {
    temp += roman[decimal.indexOf(closest)]
  }
  if (counter !== 0) {
    return temp + convert(counter)
  } else {
    return temp
  }
}

console.log(convert(29))
