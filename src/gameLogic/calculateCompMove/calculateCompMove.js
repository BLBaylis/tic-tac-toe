import getLineInfoForBothPlayers from "./calculateCompMoveFunctions/getLineInfoForBothPlayers";
import getBestMove from "./calculateCompMoveFunctions/getBestMove";
import {
  generateIndexBoard,
  chooseRandom,
  getCenterSquareIndex
} from "../helperFunctions";

const calculateCompMove = argsFromState => {
  const { board, gridSize, turnNo } = argsFromState;
  const centerIndex = getCenterSquareIndex(gridSize);
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
  } = getLineInfoForBothPlayers(board);
  if (compBestLineLength >= userBestLineLength) {
    if (compBestLineLength === 0) {
      return chooseRandom(generateIndexBoard(board), board);
    }
    return getBestMove(compBestLines, userBestLines, board);
  } else {
    return getBestMove(userBestLines, compBestLines, board);
  }
};

export default calculateCompMove;
