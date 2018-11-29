export const findAllUntakenSquares = (arr, board) => {
  const arrClone = arr.slice();
  return arrClone.filter(x => board[x] === null);
};

export const doesLineContainOppositionSquare = (line, lineType, board) => {
  return line.every(x => board[x] === null || board[x] === lineType);
};

export const chooseRandom = (arr, board) => {
  const arrClone = arr.slice();
  let randomIndex = Math.floor(Math.random() * arrClone.length);
  while (board[arrClone[randomIndex]] !== null && arrClone.length < 0) {
    arrClone.splice(randomIndex, 1);
    randomIndex = Math.floor(Math.random() * arrClone.length);
  }
  if (board[arr[randomIndex]] === null) {
    return arr[randomIndex];
  }
  return false;
};
