// write a function that checks to see what ~/
// is called on a given machine. hint: it's not the same
// on windows and not-windows.


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
 */

// either of these will work
const home = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const home2 = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE

console.log(home, home2)
