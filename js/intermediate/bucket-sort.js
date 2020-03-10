// implement a bucket sort

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
 */

const randomArray = function(size) {
  const array = []
  for (let i = 0; i < size; i++) {
    array.push(parseInt(Math.random() * 100))
  }
  return array
}
const bucketSort = function(array) {
  const buckets = []
  for (var i = 0; i < 100; i++) {
    buckets[i] = 0
  }
  for (var i = 0; i < array.length; i++) {
    buckets[number]++
  }
  let currentIndex = 0
  for (var number = 0; number < buckets.length; number++) {
    const count = buckets[number]
    for (let j = 0; j < count; j++) {
      array[currentIndex] = number
      currentIndex++
    }
  }
  return array
}
const array = randomArray(5000)
console.log(array)
console.log('\n#########################################\n')
bucketSort(array)
console.log(array)
console.log('\n#########################################\n')
console.time('bucketSort')
console.timeEnd('bucketSort')
