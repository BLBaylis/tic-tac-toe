const findAllLinesWithXNumberOfSquareType = (
  quantity,
  board,
  squareType,
  lines
) => {
  lines = lines.filter(x =>
    checkLineForXNumberOfSquareType(quantity, x, squareType, board)
  );
  return lines;
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
  const matchingSquares = line.filter(x => board[x] === squareType);
  if (matchingSquares.length === quantity) {
    return true;
  }
  return false;
};

export default findAllLinesWithXNumberOfSquareType;
