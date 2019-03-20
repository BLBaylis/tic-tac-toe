import { generateIndexArr } from "./helperFunctions";

//generateAllLines is used to generate all potential winning IndexLines in a grid
//for for the board to be cross-checked against

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
