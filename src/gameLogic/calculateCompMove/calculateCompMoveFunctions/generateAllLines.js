import {
  generateIndexArr,
  generateRowFromRowNum,
  generateColumnFromColNum
} from "../../helperFunctions";

//generateAllLines is used to generate all potential winning lines in a grid
//for for the board to be cross-checked against

const generateAllLines = lineLength => {
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

export default generateAllLines;
