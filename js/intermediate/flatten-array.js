// write a function that flattens nested arrays! example:
// flatten([1, [2], 2, [3, [[4]]]]) // => [1, 2, 2, 3, 4]

function flatten (arr) {
  var flatArr = [], i
  function nestedCheck (arr1) {
    for (var j = 0;j < arr1.length;j++) {
      if (!Array.isArray(arr1[j]))
        flatArr.push(arr1[j])
      else nestedCheck(arr1[j])
    }
  }
  for (i = 0;i < arr.length;i++) {
    if (!Array.isArray(arr[i]))
      flatArr.push(arr[i])
    else nestedCheck(arr[i])
  }
  return flatArr
}


function flatten (array) {
  var flatArray = []
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      var newArray = flatten(array[i])
      for (var j = 0; j < newArray.length; j++) {
        flatArray.push(newArray[j])
      }
    } else {
      flatArray.push(array[i])
    }
  }
  return flatArray
}

console.log(flatten([1, 2, [3, [4, 5, 5, 8, 7, [6, 5, 4]], 5, 6], 7]))
