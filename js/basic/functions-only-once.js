// run a function only once

var something = (function(){
  var executed = false
  return function(){
    if(!executed){
      executed = true
    // do something
    }
  }
})()

var a = (function(){
  var randomValue
  return function(flagForceNewValue){
    if(randomValue === undefined || flagForceNewValue){
      randomValue = Math.floor(Math.random() * (10 - 1) + 1)
    }
    return randomValue
  }
}())

function once(func){
  return function(){
    var f = func
    func = null
    return f.apply(
      this,
      arguments
    )
  }
}

function once(fn, context){
  var result
  return function(){
    if(fn){
      result = fn.apply(context || this, arguments)
      fn = null
    }
    return result
  }
}

