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

// or
const l = f => (p => f(a => p(p)(a)))(p => f(a => p(p)(a)))
