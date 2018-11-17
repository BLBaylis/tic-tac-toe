const generateAllLines = (gridSize) => {
  return [generateColumns(gridSize),
  generateRows(gridSize),
  generateDiagonals(gridSize)];
}

const generateColumns = (gridSize) => {
  const colNo = Array(gridSize).fill().map((x, index) => index);
  const baseColumn = colNo.map((x, index) => index * gridSize);
  return Array(gridSize).fill(baseColumn).map((x, index) => x.map(x => x + index));
}

const generateRows = (gridSize) => {
  const rowNo = Array(gridSize).fill().map((x, index) => index);
  return Array(gridSize).fill(rowNo).map((x, index) => x.map(x => x + (index * gridSize)));
}

const generateDiagonals = (gridSize) => {
    const diag1 = Array(gridSize)
    .fill()
    .map((x, index) => index * gridSize + index);
  const diag2 = Array(gridSize)
    .fill()
    .map((x, index) => (index + 1) * gridSize - (index + 1));
    return [diag1, diag2];
}

export default generateAllLines;