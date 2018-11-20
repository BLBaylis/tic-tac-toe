//import generateAllLines from "./generateAllLines";
import findAllLinesWithXNumberOfSquareType, {
  isOtherSpaceEmpty
} from "./findAllLinesWithXNumberOfSameSquares";
import processUserLinesLength1 from "./processUserLinesLength1";

const compHasCenter = (board, lines) => {
  const userLinesLength1 = findAllLinesWithXNumberOfSquareType(
    board,
    1,
    "user"
  );
  const compLinesLength2 = findAllLinesWithXNumberOfSquareType(
    board,
    2,
    "comp"
  );
  const userLinesLength2 = findAllLinesWithXNumberOfSquareType(
    board,
    2,
    "user"
  );
  if (compLinesLength2.length) {
    compLinesLength2.filter(x => isOtherSpaceEmpty(x));
    return chooseRandomSquareIndex(compLinesLength2);
  } else if (userLinesLength2.length) {
    userLinesLength2.filter(x => isOtherSpaceEmpty(x));
    return chooseRandomSquareIndex(lines.middleEdges);
  } else if (userLinesLength1.length > 1) {
    const userLinesLength1And0CompSquares = userLinesLength1
      .slice()
      .filter(x => !x.includes("comp"));
    let adjacentLinesOfLength1 = processUserLinesLength1(
      userLinesLength1And0CompSquares,
      board,
      lines
    );
    return chooseRandomSquareIndex(adjacentLinesOfLength1);
  } else {
    return chooseRandomSquareIndex(board);
  }
};

export const chooseRandomSquareIndex = arr => {
  return Math.floor(Math.random() * arr.length);
};

export default compHasCenter;
