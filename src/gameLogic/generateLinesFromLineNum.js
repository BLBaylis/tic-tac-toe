export const generateRowFromRowNum = (rowNum, lineLength) => {
  return Array(lineLength)
    .fill()
    .map((x, index) => index + rowNum * lineLength);
};

export const generateColumnFromColNum = (colNum, lineLength) => {
  return Array(lineLength)
    .fill()
    .map((x, index) => colNum + index * lineLength);
};
