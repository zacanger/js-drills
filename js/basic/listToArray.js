function prepend(elem, list){
  var tList = {}
  tList.value = elem
  tList.rest = list
  return tList
}

function nth(list, number){
  var array = listToArray(list)
  if (array[number] !== 'undefined') {
    return array[number]
  } else {
    return null
  }
}

function nthRecursive(list, number){
  if(list.rest === null){
    return list.value
  } else {
    if(number === 0){
      return list.value
    }
    return nthRecursive(list.rest, number - 1)
  }
}

function arrayToList(array){
  var list = null
  for(var i = array.length - 1; i >= 0; i--){
    var temp = {
      value: array[i],
      rest: list
    }
    list = temp
  }
  return list
}

function listToArray(list){
  var array = []
  for(var node = list; node; node = node.rest){
    array.push(node.value)
  }
  return array
}

console.log(arrayToList([10, 20]))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])))
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1))
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 1))
// → 20

