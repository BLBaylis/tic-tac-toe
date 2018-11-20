import {
  generateRowFromRowNum,
  generateColumnFromColNum
} from "./generateLinesFromLineNum";

const generateAllLines = lineLength => {
  return {
    columns: generateColumns(lineLength),
    rows: generateRows(lineLength),
    diagonals: generateDiagonals(lineLength)
  };
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

//const baseColumn = colNo.map((x, index) => index * lineLength);
/*return Array(lineLength)
    .fill(baseColumn)
    .map((x, index) => x.map(x => x + index));*/

const generateDiagonals = lineLength => {
  const diag1 = Array(lineLength)
    .fill()
    .map((x, index) => index * lineLength + index);
  const diag2 = Array(lineLength)
    .fill()
    .map((x, index) => (index + 1) * lineLength - (index + 1));
  return [diag1, diag2];
};

const generateMiddleEdgeSquares = lineLength => {};

export default generateAllLines;
