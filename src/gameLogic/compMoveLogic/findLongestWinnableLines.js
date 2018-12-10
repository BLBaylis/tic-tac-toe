const findLongestWinnableLines = (lineType, board, gridSize, winnableLines) => {
  let longestWinnableLines = [];
  let length = gridSize + 1;
  let winnableLinesClone = winnableLines.slice();
  let linesOfCurrLength = [];
  while (!longestWinnableLines.length && length > 0) {
    length--;
    linesOfCurrLength = findAllLinesWithXNumberOfSquareType(
      length,
      board,
      lineType,
      winnableLinesClone
    );
    longestWinnableLines = linesOfCurrLength.filter(x =>
      doesLineContainOppositionSquare(x, lineType, board)
    );
  }
  if (!longestWinnableLines.length) {
    return { lineLength: length, lines: [] };
  }
  return { lineLength: length, lines: longestWinnableLines };
};

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

const checkLineForXNumberOfSquareType = (quantity, line, squareType, board) => {
  const matchingSquares = line.filter(x => board[x] === squareType);
  if (matchingSquares.length === quantity) {
    return true;
  }
  return false;
};

const doesLineContainOppositionSquare = (line, lineType, board) => {
  return line.every(x => board[x] === null || board[x] === lineType);
};

export default findLongestWinnableLines;
