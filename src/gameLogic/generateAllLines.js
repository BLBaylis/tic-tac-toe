import {
  generateRowFromRowNum,
  generateColumnFromColNum
} from "./generateLinesFromLineNum";

import {
  generateRowFromSquareIndex,
  generateColumnFromSquareIndex
} from "./generateLinesFromSquareIndex";

const generateAllLines = lineLength => {
  return {
    columns: generateColumns(lineLength),
    rows: generateRows(lineLength),
    diagonals: generateDiagonals(lineLength),
    middleEdges: generateMiddleEdgeSquares(lineLength)
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

const generateDiagonals = lineLength => {
  const diag1 = Array(lineLength)
    .fill()
    .map((x, index) => index * lineLength + index);
  const diag2 = Array(lineLength)
    .fill()
    .map((x, index) => (index + 1) * lineLength - (index + 1));
  return [diag1, diag2];
};

export const generateMiddleEdgeSquares = lineLength => {
  const firstAndLastSquare = [0, lineLength ** 2 - 1];
  let edges = firstAndLastSquare.map(x =>
    generateRowFromSquareIndex(x, lineLength)
  );
  edges = edges.concat(
    firstAndLastSquare.map(x => generateColumnFromSquareIndex(x, lineLength))
  );
  return edges
    .map(x => x.slice(1, x.length - 1))
    .reduce((total, curr) => total.concat(curr), []);
};

export default generateAllLines;
