import { findAllIndicesWithSquareValue } from "../../helperFunctions/helperFunctions";

//Finds the best move for the tempoPlayer and takes it.  If tempoPlayer is comp
//then it is simply making a move that moves it closer to victory.  If
//tempoPlayer is user, then comp takes that move, denying it from the user.

const getBestMoves = (tempoPlayerLines, nonTempoPlayerLines, board) => {
  //get the untaken spaces from both players' best line choices.
  const tempoPlayerMoveChoicesWithDupes = flattenArrThenGetUntakenSquareIndices(
    tempoPlayerLines,
    board
  );
  const tempoPlayerMoveChoices = removeDupes(tempoPlayerMoveChoicesWithDupes);
  //possibleNonTempoPlayerMoves should have duplicates if present
  const nonTempoPlayerMoveChoices = flattenArrThenGetUntakenSquareIndices(
    nonTempoPlayerLines,
    board
  );
  //get array where each element is a count for how many lines are blocked by
  //making a move at the matching squareIndex on the board
  const tallyOfHowManyLinesBlockedForEachNonTempoMoveChoice =
  tallyLinesThatIncludeEachSquareIndex(
    nonTempoPlayerMoveChoices,
    board.length
  );
  //find the most disruptive square that is also in moveChoices and return that
  //square
  const maxNonTempoPlayerLinesDisrupted =
  findHighestArrValueFromChoiceOfArrIndices(
    tallyOfHowManyLinesBlockedForEachNonTempoMoveChoice,
    tempoPlayerMoveChoices
  );
  if (maxNonTempoPlayerLinesDisrupted < 1) {
    //none of the move choices disrupt any opposition lines so choose randomly
    //from moveChocies
    return tempoPlayerMoveChoices;
  }
  const bestMoves = tempoPlayerMoveChoices.filter(moveChoice =>
    tallyOfHowManyLinesBlockedForEachNonTempoMoveChoice[moveChoice] === maxNonTempoPlayerLinesDisrupted
  );
  if (bestMoves.length) {
    return bestMoves;
  }
  return false
};

export const flattenArrThenGetUntakenSquareIndices = (arr, board) => {
  const flattenedArr = flattenArr(arr);
  return findAllIndicesWithSquareValue(flattenedArr, null, board);
}

export const flattenArr = arr => arr.reduce((total, curr) => total.concat(curr), [])

export const removeDupes = arr => arr.filter((element, index) => arr.indexOf(element) === index);

//returns an array where each index contains a tally of occurances of that index
//in arr
//countLinesThatContainSquareIndex([1, 1, 2], 3) returns [0, 2, 1]
export const tallyLinesThatIncludeEachSquareIndex = (lines, boardLength) => {
  return lines.reduce((total, curr) => {
    total[curr]++;
    return total;
  }, Array(boardLength).fill(0));
};

export const findHighestArrValueFromChoiceOfArrIndices = (valuesArr, indicesArr) => {
  return indicesArr.reduce((highestValue, currentIndex) => {
    return highestValue >= valuesArr[currentIndex] ? highestValue : valuesArr[currentIndex]
  })
}

export default getBestMoves;
