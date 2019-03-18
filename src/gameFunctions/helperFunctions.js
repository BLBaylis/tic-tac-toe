export const countSquaresInLine = (line, player, board) => {
  return line.filter(squareIndex => board[squareIndex] === player).length;
};

export const getCenterSquareIndex = gridSize => {
  const n = (gridSize - 1) / 2;
  return gridSize * n + n;
};

export const findAllEmptySquares = (arr, board) => {
  return arr.filter(squareIndex => board[squareIndex] === null);
};

export const generateIndexArr = length => {
  return Array(length)
    .fill()
    .map((curr, index) => index);
};

export const chooseRandom = (arr, board) => {
  let emptySpaces = findAllEmptySquares(arr, board);
  if (!emptySpaces.length) {
    throw new Error(
      `chooseRandom couldn't find empty square, arr: ${[arr]}, board: ${[
        board
      ]}, emptySpaces : ${emptySpaces}`
    );
  }
  let randomIndex = Math.floor(Math.random() * emptySpaces.length);
  return emptySpaces[randomIndex];
};
