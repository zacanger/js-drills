// write a counter that counts up infinitely,
// using a generator. have this counter increment once per second,
// using a second function. have this target a dom element.
// examle html:
// counter : <span id="counter"></span>
// usage: run(counter())

// the counter function
function* counter (start = 0) {
  const span = document.getElementById('#counter')
  while (true) {
    span.textContent = String(start)
    start++
    yield
  }
}

// or, in two functions
function* counter (start = 0) {
  while (true) {
    start++
    yield* updater(start)
  }
}
function* updater (counter) {
  const span = document.getElementById('#counter')
  span.textContent = String(counter)
  yield
}

// and the scheduling function
const run = generatorObject => {
  if (!generatorObject.next().done) {
    setTimeout(() => {
      run(generatorObject)
    }, 1000)
  }
}
