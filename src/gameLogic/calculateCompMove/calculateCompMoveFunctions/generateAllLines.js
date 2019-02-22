import {
  generateRowFromRowNum,
  generateColumnFromColNum
} from "../../helperFunctions";

const generateAllLines = lineLength => {
  return [].concat(
    generateColumns(lineLength),
    generateRows(lineLength),
    generateDiagonals(lineLength)
  );
};

const generateRows = lineLength => {
  const rowNo = Array(lineLength)
    .fill()
    .map((x, index) => index);
  return rowNo.map(x => generateRowFromRowNum(x, lineLength));
};

const generateColumns = lineLength => {
  const colNo = Array(lineLength)
    .fill()
    .map((x, index) => index);
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

export default generateAllLines;
