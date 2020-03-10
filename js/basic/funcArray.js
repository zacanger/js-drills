// make this work
funcArray[0]() // 0
funcArray[1]() // 1
funcArray[2]() // 2
funcArray[3]() // 3
funcArray[4]() // 4
funcArray[5]() // 5
//

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
 */

function funcArray(nums) {
  let newArr = []
  for (let i = 0; i < nums; i++) {
    let num = i
    newArr.push(() => num)
  }
  return newArr
}

function funcArray(nums) {
  var newArr = []
  for (var i = 0; i < nums; i++) {
    newArr.push(
      function(num) {
        return num
      }.bind(null, i)
    )
  }
  return newArr
}

function funcArray(nums) {
  var newArr = []
  for (var i = 0; i < nums; i++) {
    newArr.push(
      (function(num) {
        return function() {
          return num
        }
      })(i)
    )
  }
  return newArr
}

function funcArray(nums) {
  return Array.from(Array(nums))
    .map((el, ind) => ind)
    .map((el) => {
      let x = el
      return () => x
    })
}
