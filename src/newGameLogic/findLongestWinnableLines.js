import findAllLinesWithXNumberOfSquareType from "../gameLogic/findAllLinesWithXNumberOfSquareType";
import { doesLineContainOppositionSquare } from "./helperFunctions";

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

export default findLongestWinnableLines;
