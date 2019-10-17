const contains = (parent, child) => {
  const parentNode = child.parentNode

  if (parentNode === parent) {
    return true
  }

  child = parentNode

  if (child.parentNode) {
    return contains(parent, child)
  }

  return false
}

module.exports = contains
