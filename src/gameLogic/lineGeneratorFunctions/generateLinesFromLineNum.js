export const generateRowFromRowNum = (rowNum, lineLength) => {
  return Array(lineLength)
    .fill()
    .map((x, index) => rowNum * lineLength + index);
};

export const generateColumnFromColNum = (colNum, lineLength) => {
  return Array(lineLength)
    .fill()
    .map((x, index) => colNum + index * lineLength);
};
