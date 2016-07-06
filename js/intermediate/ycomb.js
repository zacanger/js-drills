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

// this might be right?
const a = b => (p => b(x => (p(p)(x)))(p => b(x => (p(p)(x)))))
