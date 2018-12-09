import findAllLinesWithXNumberOfSquareType from "./findAllLinesWithXNumberOfSquareType";
import { doesLineContainOppositionSquare } from "../helperFunctions";

//findLongestWinaableLines

/*Arguments : 
  lineType can be null or "comp" or "user", the 3 states a gridSquare can be in.
*/
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
