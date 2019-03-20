export const countSquaresInLine = (line, squareValue, gameBoard) => {
  return line.filter(squareIndex => gameBoard[squareIndex] === squareValue)
    .length;
};

export const findAllIndicesWithSquareValue = (line, squareValue, gameBoard) => {
  return line.filter(squareIndex => gameBoard[squareIndex] === squareValue);
};

export const generateIndexArr = length => {
  return Array(length)
    .fill()
    .map((curr, index) => index);
};

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
