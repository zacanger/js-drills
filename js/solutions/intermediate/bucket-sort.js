// implement a bucket sort

var randomArray = function (size) {
  var array = []
  for (var i = 0; i < size; i++) {
    array.push(parseInt(Math.random() * 100))
  }
  return array
}
var bucketSort = function (array) {
  var buckets = []
  for (var i = 0; i < 100; i++) {
    buckets[i] = 0
  }
  for (var i = 0; i < array.length; i++) {
    buckets[number]++
  }
  var currentIndex = 0
  for (var number = 0; number < buckets.length; number++) {
    var count = buckets[number]
    for (var j = 0; j < count; j++) {
      array[currentIndex] = number
      currentIndex++
    }
  }
  return array
}
var array = randomArray(5000)
console.log(array)
console.log('\n#########################################\n')
bucketSort(array)
console.log(array)
console.log('\n#########################################\n')
console.time('bucketSort')
console.timeEnd('bucketSort')
