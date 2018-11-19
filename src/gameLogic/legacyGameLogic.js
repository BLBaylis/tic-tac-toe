function restartGame() {
  for (var i = 0; i < innerSquare.length; i++) {
    innerSquare[i].classList.remove("selected");
    innerSquare[i].classList.remove("user-square");
    innerSquare[i].classList.remove("computer-square");
    innerSquare[i].style.backgroundImage = "";
  }
  if (gameObj.outcome !== "") {
    endGame[0].classList.remove(gameObj.outcome);
  }
  gameObj = {
    center: "",
    moves: 0,
    grid: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    outcome: "",
    firstMove: gameObj.firstMove
  };
  if (gameObj.firstMove === "computer" && gameObj.moves === 0) {
    chooseRandomMoveFromGivenArray("computer", gameObj.grid, false);
    gameObj.moves++;
  }
}

function makeMove(whichPlayer, gridNumber) {
  function repatedMakeMoveCode() {
    innerSquare[gridNumber].classList.add(whichPlayer + "-square");
    grid[gridNumber] = whichPlayer;
    lastMove = gridNumber;
  }

  var grid = gameObj.grid;
  if (whichPlayer === "computer") {
    innerSquare[gridNumber].style.backgroundImage =
      "url('icons/" +
      computerIcon.icon +
      "/" +
      computerIcon.icon +
      " " +
      computerIcon.colour +
      ".png')";
    repatedMakeMoveCode();
    return true;
  } else if (whichPlayer === "user") {
    innerSquare[gridNumber].style.backgroundImage =
      "url('icons/" +
      userIcon.icon +
      "/" +
      userIcon.icon +
      " " +
      userIcon.colour +
      ".png')";
    repatedMakeMoveCode();
    return true;
  } else {
    return false;
  }
}

function checkForGameEndingConditions(whichPlayer) {
  if (winChecker(whichPlayer)) {
    for (i = 0; i < innerSquare.length; i++) {
      innerSquare[i].classList.add("selected");
    }
    endGame[0].classList.add(gameObj.outcome);
    return;
  }
  if (gameObj.moves === 9) {
    gameObj.outcome = "draw";
    for (i = 0; i < innerSquare.length; i++) {
      innerSquare[i].classList.add("selected");
    }
    endGame[0].classList.add(gameObj.outcome);
    return;
  }
}

function userMove(event) {
  var eventTarget = event.target,
    gridNumber = Number(eventTarget.classList[1]);
  makeMove("user", gridNumber);
  gameObj.moves++;
  if (checkForGameEndingConditions("user")) {
    return;
  }
  computerMove();
  gameObj.moves++;
  if (checkForGameEndingConditions("computer")) {
    return;
  }
}

function computerMove() {
  var grid = gameObj.grid,
    corners = [grid[0], grid[2], grid[6], grid[8]];
  if (grid[4] !== "user" && grid[4] !== "computer") {
    makeMove("computer", 4);
    gameObj.center = "computer";
    return false;
  }
  //
  //IF CENTER ISN'T TAKEN TAKE CENTER
  //
  if (grid[4] === "computer") {
    //IF CENTER IS TAKEN BY COMPUTER
    if (lineLength2Checker("computer", "user")) {
      return false;
    } else if (lineLength2Checker("user", "computer")) {
      return false;
    } else if (checkAllAdjacentPairsForLength1()) {
      return false;
    } else {
      chooseRandomMoveFromGivenArray("computer", gameObj.grid, false);
      return false;
    }
    return false;
  } else if (grid[4] === "user") {
    gameObj.center = "user";
    if (gameObj.moves === 1) {
      chooseRandomMoveFromGivenArray("computer", corners, false);
      return false;
    } else if (lineLength2Checker("computer", "user")) {
      return false;
    } else if (lineLength2Checker("user", "computer")) {
      return false;
    } else {
      chooseRandomMoveFromGivenArray("computer", gameObj.grid, false);
      return false;
    }
    return false;
  }
}

function winChecker(whichPlayer) {
  var grid = gameObj.grid,
    lineArray = [
      [grid[0], grid[1], grid[2]],
      [grid[3], grid[4], grid[5]],
      [grid[6], grid[7], grid[8]],
      [grid[0], grid[3], grid[6]],
      [grid[1], grid[4], grid[7]],
      [grid[2], grid[5], grid[8]],
      [grid[0], grid[4], grid[8]],
      [grid[6], grid[4], grid[2]]
    ],
    lineLength = 0,
    validLinesArr = [];
  for (var i = 0; i < lineArray.length; i++) {
    for (var j = 0; j < lineArray[i].length; j++) {
      if (lineArray[i][j] === whichPlayer) {
        lineLength++;
      }
    }
    if (lineLength === 3) {
      gameObj.outcome = whichPlayer + "-win";
      return true;
    }
    lineLength = 0;
  }
  return false;
}

function length2Checker(whichPlayer, otherPlayer, arr, lineType) {
  var grid = gameObj.grid,
    lineLength = 3,
    notWhichPlayer;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== whichPlayer) {
        lineLength--;
        notWhichPlayer = arr[i][j];
      }
    }
    if (lineLength === 2) {
      if (notWhichPlayer !== otherPlayer) {
        return makeMove("computer", notWhichPlayer);
      } else if (whichPlayer === "user" && lineType === "diags") {
        if (gameObj.center === "user") {
          var corners = [grid[0], grid[2], grid[6], grid[8]];
          return chooseRandomMoveFromGivenArray("computer", corners, false);
        } else if (gameObj.center === "computer") {
          var edgeMiddle = [grid[1], grid[3], grid[5], grid[7]];
          return chooseRandomMoveFromGivenArray("computer", edgeMiddle, false);
        }
      }
    }
    lineLength = 3;
  }
  return false;
}

function lineLength2Checker(whichPlayer, otherPlayer) {
  var grid = gameObj.grid,
    rows = [
      [grid[0], grid[1], grid[2]],
      [grid[3], grid[4], grid[5]],
      [grid[6], grid[7], grid[8]]
    ],
    cols = [
      [grid[0], grid[3], grid[6]],
      [grid[1], grid[4], grid[7]],
      [grid[2], grid[5], grid[8]]
    ],
    diags = [[grid[0], grid[4], grid[8]], [grid[2], grid[4], grid[6]]];
  if (length2Checker(whichPlayer, otherPlayer, rows, "rows")) {
    return true;
  } else if (length2Checker(whichPlayer, otherPlayer, cols, "cols")) {
    return true;
  } else if (length2Checker(whichPlayer, otherPlayer, diags, "diags")) {
    return true;
  } else {
    return false;
  }
}

function chooseRandomMoveFromGivenArray(
  whichPlayer,
  arr,
  isThisFunctionRecurring
) {
  arr = arr.filter(function(curr) {
    return !isNaN(curr);
  });
  if (isThisFunctionRecurring) {
    return false;
  }
  if (arr.length < 1) {
    return chooseRandomMoveFromGivenArray(whichPlayer, gameObj.grid, true);
  }
  var random = Math.floor(Math.random() * arr.length);
  return makeMove(whichPlayer, arr[random]);
}

function workOutGridNumberFromEdgeIndex(arr, index) {
  if (index === 0) {
    square = arr[1] - (arr[2] - arr[1]);
  } else if (index === 1) {
    square = arr[2] - (arr[2] - arr[0]) / 2;
  } else if (index === 2) {
    square = arr[1] + (arr[1] - arr[0]);
  }
  return square;
}

//lineLength1Checker()
//Checks if a line has 1 user square and 0 comp squares.  If this is the case, returns the square.
//

function lineLength1Checker(arr) {
  var square,
    lineLength = 0,
    grid = gameObj.grid;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "user") {
      lineLength++;
      square = workOutGridNumberFromEdgeIndex(arr, i);
    } else if (arr[i] === "computer") {
      return true;
    }
  }
  if (lineLength === 1) {
    return square;
  }
  return true;
}

//adjacentLinesPairChecker()
/*Runs LineLengthChecker1 on two lines.  If a square is returned for both and they aren't the same square 
returns true.*/
//

function adjacentLinesPairChecker(arr) {
  var grid = gameObj.grid,
    square1,
    square2;
  square1 = lineLength1Checker(arr[0]);
  if (square1 !== true) {
    square2 = lineLength1Checker(arr[1]);
    if (square2 !== true && square1 !== square2) {
      return true;
    }
  }
  return false;
}

//checkAllAdjacentPairsFroLength1()
/*Cycles through an array of pairs of adjacent lines.  Runs adjacentLinesPairsChecker() on each pair if both 
lines have 1 user square and 0 comp squares.  Records all cases of this, then pushes all empty squares from 
lines that fit these conditions into their own arr.  Removes repeats then picks a random one to be blocked 
by computer*/
//

function checkAllAdjacentPairsForLength1() {
  var grid = gameObj.grid,
    adjacentEdges = [
      [[grid[0], grid[1], grid[2]], [grid[0], grid[3], grid[6]]],
      [[grid[0], grid[1], grid[2]], [grid[2], grid[5], grid[8]]],
      [[grid[6], grid[7], grid[8]], [grid[0], grid[3], grid[6]]],
      [[grid[6], grid[7], grid[8]], [grid[2], grid[5], grid[8]]]
    ],
    length1AdjacentEdges = [];
  for (var i = 0; i < adjacentEdges.length; i++) {
    if (adjacentLinesPairChecker(adjacentEdges[i])) {
      for (var j = 0; j < adjacentEdges[i].length; j++) {
        for (var k = 0; k < adjacentEdges[i][j].length; k++) {
          if (adjacentEdges[i][j][k] !== "user") {
            length1AdjacentEdges.push(adjacentEdges[i][j][k]);
          }
        }
      }
      length1AdjacentEdges = removeRepeatsInArray(length1AdjacentEdges);
      chooseRandomMoveFromGivenArray("computer", length1AdjacentEdges, false);
      return true;
    }
  }
  return false;
}

function removeRepeatsInArray(arr) {
  var counter;
  arr = arr.filter(function(curr, index) {
    counter = 0;
    for (var i = index + 1; i < arr.length; i++) {
      if (curr !== arr[i]) {
        counter++;
      }
    }
    if (counter === arr.length - index - 1) {
      return curr;
    }
  });
  return arr;
}
