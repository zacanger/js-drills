// implement a binary search
// (simple solution)

function binSearch(key, arr){
  var low = 0
    , hi  = arr.length - 1

  while(low <= hi){

    var mid = ~~((low + hi) / 2)
      , val = arr[mid]

    if(val < key){
      low = mid + 1
    } else if(val > key){
      hi = mid - 1
    } else {
      return mid
    }
  }
  return null
}

