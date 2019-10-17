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
  var _this = this
  var context = arguments[0]
  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
  }

  return function () {
    var innArgs = []
    for (var i = 1; i < arguments.length; i++) {
      innerArgs.push(arguments[i])
    }

    return _this.call(context, args.concat(innerArgs))
  }
}
