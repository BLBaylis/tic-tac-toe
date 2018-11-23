import findAllLinesWithXNumberOfSquareType from "./findAllLinesWithXNumberOfSameSquares";
import processLength2Lines from './processLength2Lines';
import processUserEdgeLinesLength1 from './processUserEdgeLinesLength1'
import {chooseRandomSquareIndex} from './randomiserFunctions';

const compHasCenter = (board, lines) => {
  let result;
  const userEdgeLinesLength1 = findAllLinesWithXNumberOfSquareType(
    1,
    board,
    "user",
    lines.edges
  );
  const compLinesLength2 = findAllLinesWithXNumberOfSquareType(
    2,
    board,
    "comp",
    lines.allWinningLines
  );
  const userLinesLength2 = findAllLinesWithXNumberOfSquareType(
    2,
    board,
    "user",
    lines.allWinningLines
  );
  if (compLinesLength2.length) {
    result = processLength2Lines(compLinesLength2, board);
    if (typeof result === "number"){
      return result;
    } 
  }
  if (userLinesLength2.length) {
    result = processLength2Lines(userLinesLength2, board);
    console.log(result);
    if (typeof result === "number"){
      return result;
    } 
  } 
  if (userEdgeLinesLength1.length > 1) {
    result = processUserEdgeLinesLength1(userEdgeLinesLength1, board);
    console.log(result);
    if (typeof result === "number"){
      return result;
    } else {
      return chooseRandomSquareIndex(lines.middleEdgeSquares, board);
    }
  } else {
    return chooseRandomSquareIndex(board, board);
  }
};

export default compHasCenter;
