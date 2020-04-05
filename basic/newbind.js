// Recreate the `.bind` method on the Function prototype.

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
 */

Function.prototype.newBind = function () {
  const _this = this
  const context = arguments[0]
  const args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
  }

  return function () {
    const innArgs = []
    for (let i = 1; i < arguments.length; i++) {
      innerArgs.push(arguments[i])
    }

    return _this.call(context, args.concat(innerArgs))
  }
}
