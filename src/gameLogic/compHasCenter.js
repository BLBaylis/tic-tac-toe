import findAllLinesWithXNumberOfSquareType from "./findAllLinesWithXNumberOfSameSquares";
import processLength2Lines from "./processLength2Lines";
import processUserEdgeLinesLength1 from "./processUserEdgeLinesLength1";
import { chooseRandomSquareIndex } from "./randomiserFunctions";

const compHasCenter = (board, lines, turnNo) => {
  let result;
  const allBoardIndex = Array(lines.columns[0].length ** 2)
    .fill()
    .map((x, index) => index);
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
    if (typeof result === "number") {
      return result;
    }
  }
  if (userLinesLength2.length) {
    result = processLength2Lines(userLinesLength2, board);
    if (typeof result === "number") {
      return result;
    }
    if (turnNo === 3) {
      return chooseRandomSquareIndex(lines.middleEdgeSquares, board);
    }
  }
  if (userEdgeLinesLength1.length > 1) {
    result = processUserEdgeLinesLength1(userEdgeLinesLength1, board);
    if (typeof result === "number") {
      return result;
    } else {
      return chooseRandomSquareIndex(lines.middleEdgeSquares, board);
    }
  } else {
    return chooseRandomSquareIndex(allBoardIndex, board);
  }
};

export default compHasCenter;
