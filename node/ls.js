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
  for (let i = 0; i < list.length; i++) {
    console.log(list[i])
    files.push[i]
  }
})
