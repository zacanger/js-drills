// write a function that returns the months
// of the last year from the current date

function lastMonths () {
  var dates = []
  var d = new Date()
  var y = d.getFullYear()
  var m = d.getMonth()
  function padMonth (month) {
    if (month < 10) {
      return '0' + month
    } else {
      return month
    }
  }
  if (m === 11) {
    for (var i = 1; i < 13; i++) {
      dates.push(y + '.' + padMonth(i) + '.01')
    }
  } else {
    for (var i = m + 1; i < m + 13; i++) {
      if ((i % 12) > m) {
        dates.push((y - 1) + '.' + padMonth(i + 1) + '.01')
      } else {
        dates.push(y + '.' + padMonth((i % 12) + 1) + '.01')
      }
    }
  }
  return dates
}

console.log(lastMonths())
