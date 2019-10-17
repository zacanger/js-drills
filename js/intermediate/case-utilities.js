// convert camelCase to lisp-case
export const c2lc = str => (
str.replace(/[A-Z]/g, match => (
  '-' + match.toLowerCase())).toLowerCase()
)

// convert camelCase to snake_case
export const c2sc = str => (
str.replace(/[A-Z]/g, match => (
  '_' + match.toLowerCase())).toLowerCase()
)

// convert lisp-case to camelCase
export const l2cc = str => (
str.toLowerCase().replace(/-[a-z]/g, match => (
match.slice(1).toUpperCase()
))
)

// convert snake_case to camelCase
export const s2cc = str => (
str.replace(/(\_\w)/g, match => (
match[1].toUpperCase())
)
)
