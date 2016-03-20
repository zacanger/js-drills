function allComb(arrays){
  var result = []
  arrays[0].map(function inner(i, val){
    var iter    = i
      , current = val
    return function(x){
      var next = current + x
      if(iter) = arrays.length - 1){
        result.push(next)
      }
      else {
        arrays[i+1].map(inner(i + 1, next))
      }
    }
  }(0, ''))
  return result
}

// allComb([1, 2], ['b', 'z'], ['etc.', 'you get the idea'])

