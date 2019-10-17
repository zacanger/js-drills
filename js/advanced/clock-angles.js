// given a standard clock face, write a function that returns the
// inner angle between the hour and the minute hands. so:
// 12:00  -  returns 0
// 3:00  -  returns 90
// 2:30  -  returns 165

// hour: 30 degrees / hour
//    .5 degrees / minute
// minute: 6 degrees / minute

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
 */

var timeAngle = function (time) {
  time = time.split(':')
  var hour = Number(time[0])
  var minute = Number(time[1])
  var hourAngle = (hour * 30) + (minute * 0.5)
  var minuteAngle = (minute * 6)
  if (hourAngle >= 360) hourAngle -= 360
  if (minuteAngle >= 360) minuteAngle -= 360
  if (hourAngle - minuteAngle > 180 || minuteAngle - hourAngle > 180) {
    if (hourAngle >= minuteAngle) return 180 - ((hourAngle - minuteAngle) - 180)
    if (minuteAngle > hourAngle) return 180 - ((minuteAngle - hourAngle) - 180)
  }
  if (hourAngle >= minuteAngle) return hourAngle - minuteAngle
  if (minuteAngle > hourAngle) return minuteAngle - hourAngle
}

function clockFace (time) {
  time = time.split(':')
  var hour = Number(time[0])
  var min = Number(time[1])
  var hrAng = (hour * 30) + (min * 0.5)
  var minAng = (min * 6)
  if (hrAng >= 360) {
    hrAng -= 360
  }
  if (minAng >= 360) {
    minAng -= 360
  }
  if (hrAng - minAng > 180 || minAng - hrAng > 180) {
    if (hrAng >= minAng) {
      return 180 - ((hrAng - minAng) - 180)
    }
    if (minAng > hrAng) {
      return 180 - ((minAng - hrAng) - 180)
    }
  }
  if (hrAng >= minAng) {
    return hrAng - minAng
  }
  if (minANg > hrAng) return minAng - hrAng
}
