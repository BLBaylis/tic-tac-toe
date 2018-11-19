const findAllLinesWithXNumberOfSquareType = (
  quantity,
  board,
  squareType,
  lines
) => {
  return lines.filter(x =>
    checkLineForXNumberOfSquareType(quantity, x, squareType)
  );
};

export const isOtherSpaceEmpty = (line, board) => {
  return checkLineForXNumberOfSquareType(1, line, null, board);
};

// delete function below if it doesnt get used

export const getLineWithXNumberOfSquareType = (
  quantity,
  line,
  squareType,
  board
) => {
  if (checkLineForXNumberOfSquareType(quantity, line, squareType, board)) {
    return line;
  }
};

export const checkLineForXNumberOfSquareType = (
  quantity,
  line,
  squareType,
  board
) => {
  return line.filter(x => board[x] === squareType).length === quantity;
};

export default findAllLinesWithXNumberOfSquareType;
