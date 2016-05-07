Object.keys(new Int8Array(100))
.map(x      => ((++x % 3  ==  0) ? f = 'fizz' : x))
.map((x, i) => ((++i % 5  ==  0) ? b = 'buzz' : x))
.map((x, i) => ((++i % 15 === 0) ? f + b : x))

