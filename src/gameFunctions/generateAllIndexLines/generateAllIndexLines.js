import { generateIndexArr } from "./helperFunctions";

//generateAllLines is used to generate all potential winning IndexLines in a
//grid for the board to be cross-checked against.
//
// lineLength 3 grid =
// _____________
// |_0_|_1_|_2_|
// |_3_|_4_|_5_|
// |_6_|_7_|_8_|
//
//E.g generateAllIndexLines(3) = [
//  [0, 1, 2],
//  [3, 4, 5],
//  [6, 7, 8],
//  [0, 3, 6],
//  [1, 4, 7],
//  [2, 5, 8],
//  [0, 4 ,8],
//  [2, 4, 6]
//]

const generateAllIndexLines = lineLength => {
  return [].concat(
    generateColumns(lineLength),
    generateRows(lineLength),
    generateDiagonals(lineLength)
  );
};

const generateRows = lineLength => {
  const rowNo = generateIndexArr(lineLength);
  return rowNo.map(x => generateRowFromRowNum(x, lineLength));
};

const generateColumns = lineLength => {
  const colNo = generateIndexArr(lineLength);
  return colNo.map(x => generateColumnFromColNum(x, lineLength));
};

const generateDiagonals = lineLength => {
  const diag1 = Array(lineLength)
    .fill()
    .map((x, index) => index * lineLength + index);
  const diag2 = Array(lineLength)
    .fill()
    .map((x, index) => (index + 1) * lineLength - (index + 1));
  return [diag1, diag2];
};

const generateRowFromRowNum = (rowNum, lineLength) => {
  return Array(lineLength)
    .fill()
    .map((x, index) => rowNum * lineLength + index);
};

const generateColumnFromColNum = (colNum, lineLength) => {
  return Array(lineLength)
    .fill()
    .map((x, index) => colNum + index * lineLength);
};

export default generateAllIndexLines;
