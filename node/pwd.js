#!/usr/bin/env node

// rewrite pwd(1) in node!

// this will log out the directory _of the script_,
// so is only correct if you're running from the same directory
console.log(__dirname)

// or
console.log(process.cwd())
