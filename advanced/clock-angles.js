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

const timeAngle = function (time) {
  time = time.split(':')
  const hour = Number(time[0])
  const minute = Number(time[1])
  let hourAngle = hour * 30 + minute * 0.5
  let minuteAngle = minute * 6
  if (hourAngle >= 360) {
    hourAngle -= 360
  }
  if (minuteAngle >= 360) {
    minuteAngle -= 360
  }
  if (hourAngle - minuteAngle > 180 || minuteAngle - hourAngle > 180) {
    if (hourAngle >= minuteAngle) {
      return 180 - (hourAngle - minuteAngle - 180)
    }
    if (minuteAngle > hourAngle) {
      return 180 - (minuteAngle - hourAngle - 180)
    }
  }
  if (hourAngle >= minuteAngle) {
    return hourAngle - minuteAngle
  }
  if (minuteAngle > hourAngle) {
    return minuteAngle - hourAngle
  }
}

function clockFace(time) {
  time = time.split(':')
  const hour = Number(time[0])
  const min = Number(time[1])
  let hrAng = hour * 30 + min * 0.5
  let minAng = min * 6
  if (hrAng >= 360) {
    hrAng -= 360
  }
  if (minAng >= 360) {
    minAng -= 360
  }
  if (hrAng - minAng > 180 || minAng - hrAng > 180) {
    if (hrAng >= minAng) {
      return 180 - (hrAng - minAng - 180)
    }
    if (minAng > hrAng) {
      return 180 - (minAng - hrAng - 180)
    }
  }
  if (hrAng >= minAng) {
    return hrAng - minAng
  }
  if (minANg > hrAng) {
    return minAng - hrAng
  }
}
