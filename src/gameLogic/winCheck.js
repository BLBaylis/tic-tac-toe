const horizontalLineChecker = (squareNumber, gameBoard, lineLength = 3) => {
  const rowNum = Math.floor(squareNumber / lineLength);
  const arr = Array(lineLength)
    .fill()
    .map((x, index) => index + rowNum * lineLength);
  return arr.every(
    x => gameBoard[x] === gameBoard[rowNum * lineLength] && gameBoard[x]
  );
};

const verticalLineChecker = (squareNumber, gameBoard, lineLength = 3) => {
  const colNum = squareNumber % lineLength;
  const arr = Array(lineLength)
    .fill()
    .map((x, index) => index * lineLength + colNum);
  return arr.every(x => gameBoard[x] === gameBoard[colNum] && gameBoard[x]);
};

const diagonalLineChecker = (center, gameBoard, lineLength = 3) => {
  const diag1 = Array(lineLength)
    .fill()
    .map((x, index) => index * lineLength + index);
  const diag2 = Array(lineLength)
    .fill()
    .map((x, index) => (index + 1) * lineLength - (index + 1));
  return [diag1, diag2].some(x =>
    x.every(x => gameBoard[x] === gameBoard[center] && gameBoard[x])
  );
};

const winCheck = (squareNumber, gameBoard, lineLength = 3) => {
  if (lineLength % 2 === 0 || lineLength < 3) {
    throw new Error("LineLength needs to be an odd number bigger than 3");
  }
  const n = (lineLength - 1) / 2;
  const center = lineLength * n + n;
  const columns = Array(lineLength)
    .fill()
    .map((x, index) => index);
  const rows = Array(lineLength)
    .fill()
    .map((x, index) => index * lineLength);
  if (
    horizontalLineChecker(center, gameBoard, lineLength) ||
    verticalLineChecker(center, gameBoard, lineLength) ||
    diagonalLineChecker(center, gameBoard, lineLength)
  ) {
    return true;
  }
  if (columns.some(x => verticalLineChecker(x, gameBoard, lineLength))) {
    return true;
  }
  if (rows.some(x => horizontalLineChecker(x, gameBoard, lineLength))) {
    return true;
  }
  return false;
};

export default winCheck;
