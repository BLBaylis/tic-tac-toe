import { findAllEmptySquares, chooseRandom } from "../../helperFunctions";

//Takes the best lines from each player and finds the best move for the tempo
// player.  If the tempoPlayer is comp, then it will make the move that is
// given.  If it is the user that is tempoPlayer, it will once again determine
// the best move for user, then the comp will take it move to deny it from
// the user.

const getBestMove = (tempoPlayerLines, nonTempoPlayerLines, board) => {
  //get the untaken spaces from tempoPlayers best line choices.  I don't use
  //mapLinesToHaveTakenSquaresRemoved because it returns an array of arrays
  //whereas the following returns one array
  const possibleMoves = returnAllUntakenSquaresDuplicatesIncluded(
    tempoPlayerLines,
    board
  );
  //find the squares that disrupts the most winnable lines for the
  //nonTempoPlayer
  const numberOfOppositionLinesBlockedForEachBoardIndex = getTallyOfBlockedOppositionMovesSortedByBoardIndex(
    nonTempoPlayerLines,
    board
  );
  //find the most disruptive square that is also in moveChoices and return that
  //square
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
  //find max opposition lines disrupted from moveChoices
  const moveChoicesMax = Math.max(
    ...moveChoices.map(moveChoice => linesAffectedTallyArr[moveChoice])
  );
  //remove all moveChoices that aren't the most disruptive
  const bestMoves = moveChoices.filter(
    moveChoice => linesAffectedTallyArr[moveChoice] === moveChoicesMax
  );
  if (moveChoicesMax < 1) {
    //none of the move choices disrupt any opposition lines so choose randomly
    //from moveChocies
    return chooseRandom(moveChoices, board);
  }
  if (bestMoves.length > 1) {
    //if multiple choices of equal effectiveness, choose randomly between them
    return chooseRandom(bestMoves, board);
  }
  return bestMoves;
};

const getTallyOfBlockedOppositionMovesSortedByBoardIndex = (
  nonTempoPlayerLines,
  board
) => {
  const allUntakenSquaresButNotUnique = returnAllUntakenSquaresDuplicatesIncluded(
    nonTempoPlayerLines,
    board
  );
  return countLinesThatContainSquareIndex(allUntakenSquaresButNotUnique, board);
};

const returnAllUntakenSquaresDuplicatesIncluded = (arr, board) => {
  return arr.reduce((total, curr) => {
    return total.concat(findAllEmptySquares(curr, board));
  }, []);
};

//returns an array where each index contains a tally of occurances of that index
//in arr e.g [1, 1, 2] => [0, 2, 1]
const countLinesThatContainSquareIndex = (arr, board) => {
  const newArr = Array(board.length).fill(0);
  return arr.reduce((total, curr) => {
    total[curr]++;
    return total;
  }, newArr);
};

export default getBestMove;
