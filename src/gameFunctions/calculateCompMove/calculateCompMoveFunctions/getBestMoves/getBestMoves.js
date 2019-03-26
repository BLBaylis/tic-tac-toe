import {
  findAllIndicesWithSquareValue,
  flattenArr,
  removeDupes,
  countOccurancesOfElementInArr
} from "../../../helperFunctions/helperFunctions";

//Finds the best move for the tempoPlayer and takes it.  If tempoPlayer is comp
//then it is simply making a move that moves it closer to victory.  If
//tempoPlayer is user, then comp takes that move, denying it from the user.

const getBestMoves = (tempoPlayerLines, nonTempoPlayerLines, gameBoard) => {
  const tempoPlayerMoveChoices = getEmptySquareIndicesNoDupes(
    tempoPlayerLines,
    gameBoard
  );
  const nonTempoPlayerLinesSquaresWithDupes = flattenArr(nonTempoPlayerLines);
  const nonTempoPlayerLinesDisruptedByEachTempoPlayerMove = tempoPlayerMoveChoices.map(
    moveChoice =>
      countOccurancesOfElementInArr(
        moveChoice,
        nonTempoPlayerLinesSquaresWithDupes
      )
  );
  const maxNonTempoPlayerLinesDisrupted = Math.max(
    ...nonTempoPlayerLinesDisruptedByEachTempoPlayerMove
  );
  if (maxNonTempoPlayerLinesDisrupted < 1) {
    return tempoPlayerMoveChoices;
  }
  const bestMoves = tempoPlayerMoveChoices.filter(
    (moveChoice, index) =>
      nonTempoPlayerLinesDisruptedByEachTempoPlayerMove[index] ===
      maxNonTempoPlayerLinesDisrupted
  );
  if (bestMoves.length) {
    return bestMoves;
  }
  return false;
};

export const getEmptySquareIndicesNoDupes = (arr, gameBoard) => {
  const flattenedArr = flattenArr(arr);
  const allEmptySquares = findAllIndicesWithSquareValue(
    flattenedArr,
    null,
    gameBoard
  );
  return removeDupes(allEmptySquares);
};

export default getBestMoves;
