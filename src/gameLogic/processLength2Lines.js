import {isOtherSpaceEmpty} from "./findAllLinesWithXNumberOfSameSquares";
import {chooseRandomNumber, chooseRandomSquareIndex} from './randomiserFunctions';

const processLength2Lines = (lines, board) => {
  let line, emptySpace;
  lines = lines.filter(x => isOtherSpaceEmpty(x, board));
  if (lines.length){
    console.log(lines);
    console.log(lines.filter(x => isOtherSpaceEmpty(x, board)));
    line = lines[chooseRandomNumber(lines.length)];
    console.log(line);
    emptySpace = line.filter(x => board[x] === null);
    console.log(emptySpace);
    return chooseRandomSquareIndex(emptySpace, board);
  }
  return false;
}

export default processLength2Lines