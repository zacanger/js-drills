// make this work
var count = counter()
count() // 1
count() // 2
count() // 3
count() // 4

// bonus: log the iterator after that many seconds
var count = counter()
count()
count()
count()
count()
// 1 (after 1 second)
// 2 (after 2 seconds)
// 3 (after 3 seconds)
// 4 (after 4 seconds)

function counter() {
  var x = 0
  return function() {
    return ++x
  }
}

function counter() {
  var count = 0
  return function() {
    count++
    var delay = count * 1000
    setTimeout(function() {
      console.log(count)
      console.log('delay: ' + delay + ' ms')
    }, delay)
  }
}

function counter() {
  var count = 0
  return function() {
    count++
    setTimeout(
      function(i) {
        console.log(i)
      },
      count * 1000,
      count
    )
  }
}

function counter() {
  var count = 0
  return function() {
    count++
    setTimeout(
      function(i) {
        console.log(i)
      }.bind(null, count),
      count * 1000
    )
  }
}
