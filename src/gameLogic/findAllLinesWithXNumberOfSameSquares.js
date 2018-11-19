const findAllLinesWithXNumberOfSquareType = (quantity, board, squareType) => {
  return board.filter(x => checkLineForXNumberOfSquareType(quantity, x, squareType));
}

export const checkLineForXNumberOfSquareType = (quantity, line, squareType) => {
  return line.filter((x) => x === squareType).length === quantity;
}

export default findAllLinesWithXNumberOfSquareType;