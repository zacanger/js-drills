// this may or may not continue to work in firefox
// it may not ever work anywhere else; list comprehensions were
// removed from es2015 drafts.

console.log(
  [for (i of Array(100).keys())
    (++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i]
  .join('\n')
)

