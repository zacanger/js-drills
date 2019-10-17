// delete stuff from an object (the hard way, i guess)

function getRidOfThat (obj, removed) {
  var key
  for (key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === removed) {
      delete obj[key]
    }
  }
}
