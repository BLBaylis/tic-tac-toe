import {
  generateRowFromRowNum,
  generateColumnFromColNum
} from "./generateLinesFromLineNum";

export const generateRowFromSquareIndex = (squareIndex, lineLength) => {
  const rowNum = Math.floor(squareIndex / lineLength);
  return generateRowFromRowNum(rowNum, lineLength);
};

export const generateColumnFromSquareIndex = (squareIndex, lineLength) => {
  const colNum = squareIndex % lineLength;
  return generateColumnFromColNum(colNum, lineLength);
};
