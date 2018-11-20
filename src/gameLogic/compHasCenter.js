import findAllLinesWithXNumberOfSquareType, {
  isOtherSpaceEmpty
} from "./findAllLinesWithXNumberOfSameSquares";
import processUserLinesLength1 from "./processUserLinesLength1";

const compHasCenter = (board, lines) => {
  let emptySpace, line;
  const userLinesLength1 = findAllLinesWithXNumberOfSquareType(
    1,
    board,
    "user",
    lines.allWinningLines
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
    if (compLinesLength2.filter(x => isOtherSpaceEmpty(x, board))){
      line = chooseRandomSquareIndex(compLinesLength2);
      emptySpace = line.filter(x => board[x] === null);
      return chooseRandomSquareIndex(emptySpace);
    }
  } else if (userLinesLength2.length) {
    if (userLinesLength2.filter(x => isOtherSpaceEmpty(x, board))){
      line = chooseRandomSquareIndex(userLinesLength2);
      emptySpace = line.filter(x => board[x] === null);
      return chooseRandomSquareIndex(emptySpace);
    }
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
  return arr[Math.floor(Math.random() * arr.length)];
};

export default compHasCenter;
