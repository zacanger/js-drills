// write the y combinator in javascript.
// then write a function that calculates the factorial of a
// number using the y combinator.

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

function Y (X) {
  return (function (procedure) {
    return X(function (arg) {
      return procedure(procedure)(arg)
    })
  })(function (procedure) {
    return X(function (arg) {
      return procedure(procedure)(arg)
    })
  })
}

// or
const Y = f => (p => f(a => p(p)(a)))(p => f(a => p(p)(a)))

// or
const Y = function (f) {
  return (function (g) {
    return g(g)
  })(function (h) {
    return function () {
      return f(h(h)).apply(null, arguments)
    }
  })
}

const factorial = Y((a) => (x) => x === 0 ? 1 : x * a(x - 1))

//
const Y = (f) => ((x) => x(x))((x) => f((y) => x(x)(y)))
