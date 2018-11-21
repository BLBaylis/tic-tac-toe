import findAllLinesWithXNumberOfSquareType, {
  isOtherSpaceEmpty
} from "./findAllLinesWithXNumberOfSameSquares";
import processUserLinesLength1 from "./processUserLinesLength1";

const compHasCenter = (board, lines) => {
  let emptySpace, line;
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
    console.log("compLinesLength2.length");
    if (compLinesLength2.filter(x => isOtherSpaceEmpty(x, board)).length){
      console.log("compLinesLength2.filter(x => isOtherSpaceEmpty(x, board))");
      line = chooseRandomSquareIndex(compLinesLength2);
      emptySpace = line.filter(x => board[x] === null);
      return chooseRandomSquareIndex(emptySpace);
    }
  }
  if (userLinesLength2.length) {
    console.log("userLinesLength2.length");
    if (userLinesLength2.filter(x => isOtherSpaceEmpty(x, board)).length){
      line = chooseRandomSquareIndex(userLinesLength2);
      console.log(line);
      emptySpace = line.filter(x => board[x] === null);
      return chooseRandomSquareIndex(emptySpace);
    }
  } 
  if (userEdgeLinesLength1.length > 1) {
    console.log("userEdgeLinesLength1.length > 1");
    const userLinesLength1And0CompSquares = userEdgeLinesLength1
      .slice()
      .filter(x => !x.map(x => board[x]).includes("comp"));
    let adjacentLinePairsOfLength1 = processUserLinesLength1(
      userLinesLength1And0CompSquares,
      board,
      lines
    );
    if (adjacentLinePairsOfLength1.length){
      //console.log();
      const pairOfAdjacentLines = chooseRandomSquareIndex(adjacentLinePairsOfLength1);
      line = chooseRandomSquareIndex(pairOfAdjacentLines);;
      return chooseRandomSquareIndex([line[1]]);
    } else {
      return chooseRandomSquareIndex(lines.middleEdgeSquares);
    }
  } else {
    return chooseRandomSquareIndex(board);
  }
};

export const chooseRandomSquareIndex = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const emptySpaceTest = arr[randomIndex] === "user" || arr[randomIndex] === "comp";
  while (emptySpaceTest && arr.length > 0){
    arr.splice(randomIndex, 1);
  }
  if (emptySpaceTest){
    throw new Error("no empty spaces");
  }
  console.log(arr, randomIndex);
  return arr[randomIndex];
};

export default compHasCenter;
