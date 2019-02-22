export const findAllEmptySquares = (arr, board) => {
  return arr.filter(squareIndex => board[squareIndex] === null);
};

export const generateIndexBoard = board => {
  return Array(board.length).fill().map((curr, index) => index);
}

export const chooseRandom = (arr, board) => {
  let emptySpaces = findAllEmptySquares(arr, board);
  if (!emptySpaces.length) {
    throw new Error(`chooseRandom couldn't find empty square, arr: ${arr}, board: ${board}, emptySpaces : ${emptySpaces}`);
  }
  let randomIndex = Math.floor(Math.random() * emptySpaces.length);
  return emptySpaces[randomIndex];
};

export const generateRowFromRowNum = (rowNum, lineLength) => {
  return Array(lineLength)
    .fill()
    .map((x, index) => rowNum * lineLength + index);
};

export const generateColumnFromColNum = (colNum, lineLength) => {
  return Array(lineLength)
    .fill()
    .map((x, index) => colNum + index * lineLength);
};

export const getCenterSquareIndex = gridSize => {
  const n = (gridSize - 1) / 2;
  return gridSize * n + n;
};
