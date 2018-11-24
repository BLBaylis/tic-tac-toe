import { isOtherSpaceEmpty } from "./findAllLinesWithXNumberOfSameSquares";
import {
  chooseRandomNumber,
  chooseRandomSquareIndex
} from "./randomiserFunctions";

const processLength2Lines = (lines, board) => {
  let line, emptySpace;
  lines = lines.filter(x => isOtherSpaceEmpty(x, board));
  if (lines.length) {
    line = lines[chooseRandomNumber(lines.length)];
    emptySpace = line.filter(x => board[x] === null);
    return chooseRandomSquareIndex(emptySpace, board);
  }
  return false;
};

export default processLength2Lines;
