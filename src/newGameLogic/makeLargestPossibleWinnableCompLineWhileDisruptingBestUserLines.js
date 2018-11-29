import { findAllUntakenSquares, chooseRandom } from "./helperFunctions";
import findLongestWinnableLines from "../findLongestWinnableLines";

const makeLargestPossibleWinnableCompLineWhileDisruptingBestUserLines = (
  winnableUserLines,
  winnableLines,
  board,
  gridSize
) => {
  const largestPossibleWinnableCompLines = findLongestWinnableLines(
    "comp",
    board,
    gridSize,
    winnableLines
  );
  const winnableUserLinesClone = winnableUserLines.slice();
  const viableSquares = largestPossibleWinnableCompLines.reduce(
    (total, curr) => {
      return total.concat(findAllUntakenSquares(curr, board));
    },
    []
  );
  const winnableUserLinesDisruptedByASharedSquareBeingTaken = winnableUserLinesSortedBySharedUntakenSquare(
    winnableUserLinesClone,
    board
  );
  const setOfMostDisruptiveMovesAgainstUser = findSetOfMostDisruptiveMovesAgainstUser(
    winnableUserLinesDisruptedByASharedSquareBeingTaken,
    viableSquares
  );
  return chooseRandom(setOfMostDisruptiveMovesAgainstUser);
};

const winnableUserLinesSortedBySharedUntakenSquare = (
  winnableUserLines,
  board
) => {
  const winnableUserLinesClone = winnableUserLines.slice();
  const untakenSquaresThatHaveWinnableUserLines = winnableUserLinesClone.reduce(
    (total, curr) => {
      return total.concat(findAllUntakenSquares(curr, board));
    },
    []
  );
  console.log("returns", untakenSquaresThatHaveWinnableUserLines);

  //return groupLinesBySharedSquare(untakenSquaresThatHaveWinnableUserLines);
  //THIS SHOULD RETURN AN ARRAY WITH ELEMENTS OF THE FORM {squareIndex : n, lines : []};
};

/*const groupLinesBySharedSquare = (squares, lines, board) => {
  const squaresArrClone = squaresArr.slice();
  const linesArrClone = linesArr.slice(); 
  const objArr = squaresArrClone.map(x => ({squareIndex: x}));
  return objArr.map(x => {
  });
}*/

const findSetOfMostDisruptiveMovesAgainstUser = (arr, compSquares) => {
  const arrClone = arr.slice();
  const compSquareObjs = arrClone.filter(x =>
    compSquares.contains(x.squareIndex)
  );
  if (!compSquareObjs.length) {
    return false;
  }
  return getObjectsWithHighestNoOfLines(compSquareObjs, 3).map(
    x => x.squareIndex
  );
};

const getObjectsWithHighestNoOfLines = (arr, length) => {
  let result = [];
  const arrClone = arr.slice();
  while (length > 0 && result.length < 1) {
    result = filterByNoOfLines(arrClone, length);
    length--;
  }
  if (result.length > 1) {
    return result;
  } else {
    return false;
  }
};

const filterByNoOfLines = (arr, length) => {
  const arrClone = arr.slice();
  return arrClone.filter(x => x.lines.length === length);
};

export default makeLargestPossibleWinnableCompLineWhileDisruptingBestUserLines;
