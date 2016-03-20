var Board = function () {
  this.turn = 0
  this.grid = [
    [0, 0, 0]
  , [0, 0, 0]
  , [0, 0, 0]
  ]

  this.boardFull = function () {
    var isTrue = true
    this.grid.forEach(function (line) {
      line.forEach(function (position) {
        if (position === 0 || this.turn === 0) { isTrue = false; }
      })
    })
    return isTrue
  }

  this.boardEmpty = function () {
    var isTrue = true
    this.grid.forEach(function (line) {
      line.forEach(function (position) {
        if (position !== 0) { isTrue = false; }
      })
    })
    return isTrue
  }

  this.randomGen = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  this.randomCorner = function () {
    var corner, randomCorner
    do {
      corner = this.randomGen(1, 4)
      switch (corner) {
        case 1:
          randomCorner = { x: 0, y: 0 }
          break
        case 2:
          randomCorner = { x: 0, y: 2 }
          break
        case 3:
          randomCorner = { x: 2, y: 0 }
          break
        case 4:
          randomCorner = { x: 2, y: 2 }
          break
      }
    } while (this.grid[randomCorner.y][randomCorner.x] !== 0)
      return randomCorner
  }

  this.getOpposite = function (position) {
    var x = Math.abs(position.x - 2)
    var y = Math.abs(position.y - 2)
    return { x: x, y: y }
  }

  this.possibleWin = function (symbol) {
    var good, empty, move

    // Check horizontals.
    for (var i = 0; i < 3; i++) {
      good = 0
      empty = 0
      move = {}
      for (var j = 0; j < 3; j++) {
        if (this.grid[i][j] === symbol) {
          good++
        } else if (this.grid[i][j] === 0) {
          move = { y: i, x: j }
          empty++
        }
      }
      if (good === 2 && empty === 1) {
        return move
      }
    }

    // Check verticals.
    for (var i = 0; i < 3; i++) {
      good = 0
      empty = 0
      move = {}
      for (var j = 0; j < 3; j++) {
        if (this.grid[j][i] === symbol) {
          good++
        } else if (this.grid[j][i] === 0) {
          move = { y: j, x: i }
          empty++
        }
      }
      if (good === 2 && empty === 1) {
        return move
      }
    }

    // Check diagonals.
    // Diag. 1
    good = 0
    empty = 0
    move = {}
    for (var i = 0; i < 3; i++) {
      if (this.grid[i][i] === symbol) {
        good++
      } else if (this.grid[i][i] === 0) {
        move = { y: i, x: i }
        empty++
      }
      if (good === 2 && empty === 1) {
        return move
      }
    }
    // Diag. 2
    good = 0
    empty = 0
    move = {}
    for (var i = 0; i < 3; i++) {
      if (this.grid[2 - i][i] === symbol) {
        good++
      } else if (this.grid[2 - i][i] === 0) {
        move = { y: 2 - i, x: i }
        empty++
      }
      if (good === 2 && empty === 1) {
        return move
      }
    }
    return 0
  }

  this.checkWin = function () {
    /*   Returns either:
         0 - No winner yet.
         -1 - Tie.
         1 - X wins.
         2 - O wins.			  */

    if (this.grid[0][0] === this.grid[0][1] && this.grid[0][0] === this.grid[0][2] && this.grid[0][0] !== 0) {
      return this.grid[0][0]
    } else if (this.grid[1][0] === this.grid[1][1] && this.grid[1][0] === this.grid[1][2] && this.grid[1][0] !== 0) {
      return this.grid[1][0]
    } else if (this.grid[2][0] === this.grid[2][1] && this.grid[2][0] === this.grid[2][2] && this.grid[2][0] !== 0) {
      return this.grid[2][0]
    } else if (this.grid[0][0] === this.grid[1][0] && this.grid[1][0] === this.grid[2][0] && this.grid[0][0] !== 0) {
      return this.grid[0][0]
    } else if (this.grid[0][1] === this.grid[1][1] && this.grid[1][1] === this.grid[2][1] && this.grid[0][1] !== 0) {
      return this.grid[0][1]
    } else if (this.grid[0][2] === this.grid[1][2] && this.grid[1][2] === this.grid[2][2] && this.grid[0][2] !== 0) {
      return this.grid[0][2]
    } else if (this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2] && this.grid[0][0] !== 0) {
      return this.grid[0][0]
    } else if (this.grid[0][2] === this.grid[1][1] && this.grid[1][1] === this.grid[2][0] && this.grid[0][2] !== 0) {
      return this.grid[0][2]
    } else if (this.boardFull()) {
      console.log('Game ends in a tie.')
      return -1
    } else {
      console.log('No winner yet.')
      return 0
    }
  }
}

var AI = function (symbol) {
  this.name = 'TicAI'
  this.symbol = symbol
  this.makeMove = function (symbol, pos, board) {
    board.grid[pos.y][pos.x] = symbol
    var elementDataAtt = '[data-position="' + String(pos.y) + String(pos.x) + '"]'
    document.querySelector(elementDataAtt).firstChild.innerHTML = 'X'
  }

  this.decideMove = function (board) {
    console.log('AI is thinking...')
    var nextPosition = { x: 0, y: 0 }
    if (this.symbol === 1) {
      if (board.boardEmpty()) {
        // AI starts. Places X in a random corner always.
        nextPosition = board.randomCorner()
      } else if (board.turn === 1) {
        // Turn 2:
        // AI will place X in the corner opposite to it's original X unless
        // human places O there.
        nextPosition = board.getOpposite(this.lastMove)
        if (board.grid[nextPosition.y][nextPosition.x] !== 0) {
          nextPosition = board.randomCorner(board)
        }
      } else if (board.possibleWin(this.symbol)) {
        console.log(board.possibleWin(this.symbol))
        nextPosition = board.possibleWin(this.symbol)
      }
    } else if (this.symbol === 2) {
      if (board.turn === 0) {
      }
    }
    console.log('AI picks position: ' + nextPosition.y + ', ' + nextPosition.x)
    this.makeMove(this.symbol, nextPosition, board)
    this.lastMove = nextPosition
  }
}

var Human = function (name, symbol) {
  var lastMove = { x: 0, y: 0 }
  this.name = name
  this.symbol = symbol
  this.makeMove = function (element, board) {
    element.firstChild.innerHTML = 'O'
    lastMove.y = Number(element.getAttribute('data-position').substr(0, 1))
    lastMove.x = Number(element.getAttribute('data-position').substr(1, 1))
    board.grid[lastMove.y][lastMove.x] = 2
  }
}

var humanSymbol     = 2
  , playerName      = 'John Doe'
  , aiSymbol        = 1
  , gameBoard       = new Board()
  , ticTacToePlayer = new AI(aiSymbol)
  , humanPlayer     = new Human(playerName, humanSymbol)

function gameRound (element) {
  if (gameBoard.checkWin() === 0) {
    humanPlayer.makeMove(element, gameBoard)
    gameBoard.turn++
      ticTacToePlayer.decideMove(gameBoard)
  }
}

// Helper functions
function symbolString (symbolNum) {
  // 0 - empty
  // 1 - X
  // 2 - O
  return symbolNum === 1 ? 'X' : symbolNum === 2 ? 'O' : ''
}

function symbolNum (symbolString) {
  return symbolString === 'X' ? 1 : symbolString === 'O' ? 2 : 0
}

$(document).ready(function () {
  ticTacToePlayer.decideMove(gameBoard)
  $('.square').click(function () {
    gameRound(this)
  })
})

