//countSquareIndex([0, 1, 2], "user", [null, null, "user"]) returns 1
export const countSquaresInLine = (line, squareValue, gameBoard) => {
  return line.filter(squareIndex => gameBoard[squareIndex] === squareValue)
    .length;
};

//countSquareIndex([0, 1, 2], "user", [null, null, "user"]) returns [2]
export const findAllIndicesWithSquareValue = (line, squareValue, gameBoard) => {
  return line.filter(squareIndex => gameBoard[squareIndex] === squareValue);
};

//generateIndexArr(9) returns [0, 1, 2, 3, 4, 5, 6, 7, 8]
export const generateIndexArr = length => {
  return Array(length)
    .fill()
    .map((curr, index) => index);
};

//chooserRandom([0, 1, 2, 3, 4], [null, null, "user", "comp", null]) returns
//either 0, 1 or 4 at random
export const chooseRandom = (moveChoices, gameBoard) => {
  let emptySpaces = findAllIndicesWithSquareValue(moveChoices, null, gameBoard);
  if (!emptySpaces.length) {
    throw new Error(
      `chooseRandom couldn't find empty square, moveChoices: ${
        moveChoices.length ? `[${moveChoices}]` : "[]"
      }, gameBoard: [${gameBoard.map(element =>
        element === null ? "null" : element
      )}]`
    );
  }
  let randomIndex = Math.floor(Math.random() * emptySpaces.length);
  return emptySpaces[randomIndex];
};
