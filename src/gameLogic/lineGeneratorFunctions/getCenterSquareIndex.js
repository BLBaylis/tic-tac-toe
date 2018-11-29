const getCenterSquareIndex = gridSize => {
  const n = (gridSize - 1) / 2;
  return gridSize * n + n;
};

export default getCenterSquareIndex;
