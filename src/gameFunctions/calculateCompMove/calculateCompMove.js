import determineWhichPlayerHasTempo from "./calculateCompMoveFunctions/determineWhichPlayerHasTempo/determineWhichPlayerHasTempo";
import getBestLines from "./calculateCompMoveFunctions/getBestLines/getBestLines";
import getBestMoves from "./calculateCompMoveFunctions/getBestMoves/getBestMoves";
import {
  findAllEmptySquareIndicesOnGameBoard,
  countOccurancesOfSquareValueInArr
} from "../helperFunctions/helperFunctions";

const calculateCompMove = (gridSize, turnNo, gameBoard) => {
  const centerIndex = (gridSize ** 2 - 1) / 2;
  const centerValue = gameBoard[centerIndex];
  if (!centerValue) {
    return centerIndex;
  }
  //A edge case that was rare enough to not be worth solving programmatically
  //and the solution is instead hardcoded
  if (checkForOppositeCornersEdgeCase(gridSize, turnNo, gameBoard)) {
    return [1, 3, 5, 7];
  }
  const bestCompLines = getBestLines("comp", gameBoard);
  const bestUserLines = getBestLines("user", gameBoard);
  //The player that has tempo is the one who is closest to completing a line
  //without intervention from the other player.
  const tempoPlayer = determineWhichPlayerHasTempo(
    bestCompLines,
    bestUserLines,
    gameBoard
  );
  const tempoPlayerLines =
    tempoPlayer === "comp" ? bestCompLines : bestUserLines;
  if (!tempoPlayerLines.length) {
    //there are no winnable lines so pick a random space
    return findAllEmptySquareIndicesOnGameBoard(gameBoard);
  }
  const nonTempoPlayerLines =
    tempoPlayer === "comp" ? bestUserLines : bestCompLines;
  const bestMoves = getBestMoves(
    tempoPlayerLines,
    nonTempoPlayerLines,
    gameBoard
  );
  if (bestMoves.length) {
    return bestMoves;
  }
  return false;
};

export const checkForOppositeCornersEdgeCase = (
  gridSize,
  turnNo,
  gameBoard
) => {
  if (gridSize === 3 && turnNo === 3) {
    if (
      countOccurancesOfSquareValueInArr([0, 8], "user", gameBoard) === 2 ||
      countOccurancesOfSquareValueInArr([2, 6], "user", gameBoard) === 2
    ) {
      return true;
    }
  }
  return false;
};

export default calculateCompMove;
