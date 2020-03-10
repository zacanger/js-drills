// convert long numbers to friendly, readable sizes

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
 */

function bytesToSize(bytes) {
  const size = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) {
    return '0 Bytes'
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes
}

function formatBytes(bytes, decimals) {
  if (bytes === 0) {
    return '0 Bytes'
  }
  const k = 1000
  const dm = decimals + 1 || 3
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toPrecision(dm) + ' ' + sizes[i]
}

function convertBytes(input, precision) {
  const suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let index = 0
  const factor = Math.pow(10, precision > 0 ? precision : 2)

  while (input >= 1024 && suffixes[++index]) {
    input /= 1024
  }
  return Math.round(input * factor) / factor + ' ' + suffixes[index]
}
