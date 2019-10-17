// implement that nifty little typwriter effect you see
// on so many websites these days

// usage:
// create empty span, wrap with whatever element needed
// span needs an id
// call the function: `typer(id, text, time)`

// example usage:
// <h2><span id="hspan"></span></h1>
// <p><span="pspan"></span></p>
// (include the script here, and assume opening and closing script tags)
// typer('hspan', 'this is a heading, slowly', 1000)
// typer('pspan', 'this is a paragraph and stuff, much quicker this time, huh?', 100)

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
 *
 *
 *
 *
 *
 */

function typer (el, txt, speed) {
  var txtBox = document.getElementById(el)
  var cursorTxt = document.createTextNode('_')
  var cursorEl = document.createElement('span')
  var count = 0
  var opacity = 0
  cursorEl.appendChild(cursorTxt)
  txtBox.parentNode.insertBefore(cursorEl, txtBox.nextSibling)
  var timerId = setInterval(function () {
    txtBox.innerHTML += txt[count]
    count++
    if (count >= txt.length) {
      clearInterval(timerId)
    }
  }, speed)
  setInterval(function () {
    if (opacity === 0) {
      cursorEl.style.opacity = 1
      opacity = 1
    } else {
      cursorEl.style.opacity = 0
      opacity = 0
    }
  }, 300)
}

