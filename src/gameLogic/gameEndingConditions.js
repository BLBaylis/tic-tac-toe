import {
  generateRowFromRowNum,
  generateColumnFromColNum
} from "./lineGeneratorFunctions/generateLinesFromLineNum";
import getCenterSquareIndex from "./lineGeneratorFunctions/getCenterSquareIndex";

const rowChecker = (squareIndex, gameBoard, lineLength = 3) => {
  const rowNum = Math.floor(squareIndex / lineLength);
  const arr = generateRowFromRowNum(rowNum, lineLength);
  if (
    arr.every(
      x => gameBoard[x] === gameBoard[rowNum * lineLength] && gameBoard[x]
    )
  ) {
    return gameBoard[squareIndex];
  }
  return false;
};

const columnChecker = (squareIndex, gameBoard, lineLength = 3) => {
  const colNum = squareIndex % lineLength;
  const arr = generateColumnFromColNum(colNum, lineLength);
  if (arr.every(x => gameBoard[x] === gameBoard[colNum] && gameBoard[x])) {
    return gameBoard[squareIndex];
  }
  return false;
};

const diagonalChecker = (center, gameBoard, lineLength = 3) => {
  const diag1 = Array(lineLength)
    .fill()
    .map((x, index) => index * lineLength + index);
  const diag2 = Array(lineLength)
    .fill()
    .map((x, index) => (index + 1) * lineLength - (index + 1));
  if (
    [diag1, diag2].some(x =>
      x.every(x => gameBoard[x] === gameBoard[center] && gameBoard[x])
    )
  ) {
    return gameBoard[center];
  }
  return false;
};

const winCheck = (gameBoard, lineLength = 3) => {
  let centerChecked, columnsChecked, rowsChecked;
  if (lineLength % 2 === 0 || lineLength < 3) {
    throw new Error("LineLength needs to be an odd number bigger than 3");
  }
  const center = getCenterSquareIndex(lineLength);
  const columns = Array(lineLength)
    .fill()
    .map((x, index) => index);
  const rows = Array(lineLength)
    .fill()
    .map((x, index) => index * lineLength);
  centerChecked = rowChecker(center, gameBoard, lineLength);
  if (!centerChecked) {
    centerChecked = columnChecker(center, gameBoard, lineLength);
  }
  if (!centerChecked) {
    centerChecked = diagonalChecker(center, gameBoard, lineLength);
  }
  if (centerChecked) {
    return centerChecked;
  }
  columnsChecked = columns.filter(x => columnChecker(x, gameBoard, lineLength));
  if (columnsChecked.length) {
    return gameBoard[columnsChecked[0]];
  }
  rowsChecked = rows.filter(x => rowChecker(x, gameBoard, lineLength));
  if (rowsChecked.length) {
    return gameBoard[rowsChecked[0]];
  }
  return false;
};

export const drawCheck = (turnNo, gridSize) => {
  if (turnNo >= gridSize ** 2) {
    return true;
  }
  return false;
};

export default winCheck;
