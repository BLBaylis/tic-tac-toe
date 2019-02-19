import getLineInfoForBothPlayers from "./getLineInfoForBothPlayers";
import getBestMove from "./getBestMove";
import { findAllEmptySquares, chooseRandom } from "../helperFunctions";

const calculateCompMove = (centerIndex, allLines, argsFromState) => {
  const { board, gridSize, turnNo } = argsFromState;
  /* calculate centerIndex in function? */
  const centerValue = board[centerIndex];
  if (!centerValue) {
    return centerIndex;
  }
  if (gridSize === 3 && turnNo === 3) {
    if (
      [0, 8].filter(x => board[x] === "user").length === 2 ||
      [2, 6].filter(x => board[x] === "user").length === 2
    ) {
      return chooseRandom([1, 3, 5, 7], board);
    }
  }
  const {
    compBestLineLength,
    compBestLines,
    userBestLineLength,
    userBestLines
  } = getLineInfoForBothPlayers(allLines, board);
  if (compBestLineLength >= userBestLineLength) {
    if (compBestLineLength === 0) {
      const remainingSquares = findAllEmptySquares(board);
      return chooseRandom(remainingSquares, board);
    }
    return getBestMove(compBestLines, userBestLines, argsFromState);
  } else {
    return getBestMove(userBestLines, compBestLines, argsFromState);
  }
};

export default calculateCompMove;
