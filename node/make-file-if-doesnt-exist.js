#!/usr/bin/env node

// write a little cli tool to create a file
// if it doesn't already exist.
// assume it'll be a js file, and if it doesn't
// already exist you want it to just contain 'use strict'

const
  fs    = require('fs')
, file  = process.argv[2] || 'something.js'

try {
  fs.statSync(file)
} catch (e) {
  fs.writeFileSync(file, `'use strict'`)
}
