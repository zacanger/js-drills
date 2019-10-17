// Write a function that accepts an array of integers in
// random order of unknown length, but with one number
// missing. Return the missing number.

const oneMissingNumber = (arr) => {
  const sorted = arr.slice(0).sort((a, b) => a - b)
  return sorted.filter((num, i) => sorted[i + 1] - num > 1
  ).map((a) => a + 1)
}

// More complex, handles multiple missing numbers.
function missingNumber (arr) {
  var counter
  var hash = {}
  for (var i = 0; i < arr.length; i++) {
    if (!counter) {
      counter = arr[i]
    }
    if (counter > arr[i]) {
      counter = arr[i]
    }
    hash[arr[i]] = true
  }

  for (var i = 0; i < arr.length; i++) {
    if (!hash[counter]) {
      return counter
    }
    counter++
  }

  return 'The missing number is either ' + (counter - arr.length - 1) + ' or ' + (counter)
}

// to test your function:
var set1 = [20, 18]
var set2 = [1115, 1119, 1114, 1112, 1121, 1113, 1118, 1116, 1120]
var set3 = [93, 95, 101, 96, 102, 100, 97, 90, 92, 105, 106, 103, 88, 91, 94, 104, 89, 98]
var set4 = [8, 4, 5, 9, 2, 6, 1, 10, 7]
var set5 = [93, 95, 101, 96, 102, 100, 97, 90, 92, 105, 106, 103, 88, 91, 94, 104, 89, 98, 99]

missingNumber(set1) // returns 19
missingNumber(set2) // returns 1117
missingNumber(set3) // returns 99
missingNumber(set4) // returns 3
missingNumber(set5) // returns '87 or 107'
