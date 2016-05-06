const a = {fizz : 3, buzz : 5}

for (let b = 1; b <= 100; b++) {
  let c = ''
  for (let d in a) {
    c += b % a[d] ? '' : d
  }
  console.log(c ? c : b)
}

// this is nice because you can fizz buzz bing boom zing easily
const a = {
  fizz : 3
, buzz : 5
, bing : 7
, boom : 11
, zing : 13
}

for (let b = 1; b <= 1000; b++) {
  let c = ''
  for (let d in a) {
    c += b % a[d] ? '' : d
  }
  console.log(c ? c : b)
}

