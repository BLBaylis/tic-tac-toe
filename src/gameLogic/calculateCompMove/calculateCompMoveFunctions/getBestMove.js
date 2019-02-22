import { findAllEmptySquares, chooseRandom } from "../../helperFunctions";

const getBestMove = (
  playerWithTempoLines,
  playerWithoutTempoLines,
  board
) => {
  const possibleMoves = playerWithTempoLines.reduce((total, curr) => {
    return total.concat(findAllEmptySquares(curr, board));
  }, []);
  const numberOfOppositionLinesBlockedForEachBoardIndex = getTallyOfBlockedOppositionMovesSortedByBoardIndex(
    playerWithoutTempoLines,
    board
  );
  return chooseFromMoveChoicesBasedOnOppositionLines(
    possibleMoves,
    numberOfOppositionLinesBlockedForEachBoardIndex,
    board
  );
};

const chooseFromMoveChoicesBasedOnOppositionLines = (
  moveChoices,
  linesAffectedTallyArr,
  board
) => {
  const moveChoicesMax = Math.max(
    ...moveChoices.map(moveChoice => linesAffectedTallyArr[moveChoice])
  );
  const bestMoves = moveChoices.filter(
    moveChoice => linesAffectedTallyArr[moveChoice] === moveChoicesMax
  );
  if (moveChoicesMax < 1) {
    return chooseRandom(moveChoices, board);
  }
  if (bestMoves.length > 1) {
    return chooseRandom(bestMoves, board);
  }
  return bestMoves;
};

const getTallyOfBlockedOppositionMovesSortedByBoardIndex = (
  playerWithoutTempoLines,
  board
) => {
  const linesWithTakenSquaresRemoved = mapLinesToHaveTakenSquaresRemoved(
    playerWithoutTempoLines,
    board
  );
  const allUntakenSquaresButNotUnique = flattenNestedArrays(
    linesWithTakenSquaresRemoved
  );
  return countLinesThatContainSquareIndex(allUntakenSquaresButNotUnique, board);
};

const mapLinesToHaveTakenSquaresRemoved = (arr, board) => {
  return arr.map(line => line.filter(y => board[y] === null));
};

const flattenNestedArrays = arr => {
  return arr.reduce((total, curr) => total.concat(curr), []);
};

const countLinesThatContainSquareIndex = (arr, board) => {
  const newArr = Array(board.length).fill(0);
  return arr.reduce((total, curr) => {
    total[curr]++;
    return total;
  }, newArr);
};

export default getBestMove;
