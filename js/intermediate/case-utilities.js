// convert camelCase to lisp-case
// convert camelCase to snake_case
// convert lisp-case to camelCase
// convert snake_case to camelCase

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
 */

export const camelToLisp = str => (
  str.replace(/[A-Z]/g, match => (
    '-' + match.toLowerCase())).toLowerCase()
)

export const camelToSnake = str => (
  str.replace(/[A-Z]/g, match => (
    '_' + match.toLowerCase())).toLowerCase()
)

export const lispToCamel = str => (
  str.toLowerCase().replace(/-[a-z]/g, match => (
    match.slice(1).toUpperCase()
  ))
)

export const snakeToCamel = str => (
  str.replace(/(\_\w)/g, match => (
    match[1].toUpperCase())
  )
)
