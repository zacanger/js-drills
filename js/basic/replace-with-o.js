// Replace all the odd numbers with the letter "O"

function replace(arr) {
  return arr.map(function(item, index){
    return typeof item === "number" && item % 2 !== 0 ? "0" : item
  })
}
