// takes an array, sorts it using quicksort algorithm
// outputs to console
// running time O(nlog(n))

function quicksort(arr){
  sort(arr, 0, arr.length -1)
  function swap(arr, a, b){
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  function partition(arr, l, r){
    var p = arr[r]
      , i = l - 1
      , j = l
    while(j < r){
      if(arr[j] <= p){
        swap(arr, ++i, j)
      }
      j++
    }
    swap(arr, i + 1, r)
    return i + 1
  }
  function sort(arr, 1, r){
    var p
    if(l < r){
      p = partition(arr, l, r)
      sort(arr, l, p - 1)
      sort(arr, p + 1, r)
    } else if(l === arr.length){
      console.log(arr)
    }
  }
}

// or, much more concisely, from le wikipedia:
function quickersort(a){
  var left  = []
    , right = []
    , pivot = a[0]
  if(a.length == 0){
    return []
  }
  for(var i = 1; i < a.length; i++){
    a[i] < pivot ? left.push(a[i]) : right.push(a[i])
  }
  return quickersort(left).concat(pivot, quickersort(right))
}

