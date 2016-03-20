// ycombinator. do it.

function Y(X){
  return (function(procedure){
    return X(function(arg){
      return procedure(procedure)(arg)
    })
  })(function(procedure){
    return X(function(arg){
      return procedure(procedure)(arg)
    })
  })
}

