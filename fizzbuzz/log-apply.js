console.log(Array.apply(null, {length : 100}).map((val, index) => (++index % 3 ?'' : 'Fizz') + (index % 5 ? '' : 'Buzz') || index).join('\n'))

