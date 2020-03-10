#!/usr/bin/env node

// write ls(1) in node!

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
 */

const fs = require('fs')
const path = require('path')
const dirPath = process.argv[2] || '.'
const files = []

fs.readdir(dirPath, (err, list) => {
  if (err) {
    throw err
  }
  for (const [i, element] of list.entries()) {
    console.log(element)
    files.push[i]
  }
})
