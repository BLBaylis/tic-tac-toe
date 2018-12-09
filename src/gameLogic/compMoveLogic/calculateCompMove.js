import findLongestWinnableLines from "./findLongestWinnableLines";
import getBestMove from "./getBestMove";
import { chooseRandom } from "../helperFunctions";

const calculateCompMove = (centerIndex, allLines, argsFromState) => {
  const centerValue = argsFromState.board[centerIndex];
  if (!centerValue) {
    return centerIndex;
  }
  if (argsFromState.gridSize === 3 && argsFromState.turnNo === 3) {
    if (
      [0, 8].filter(x => argsFromState.board[x] === "user").length === 2 ||
      [2, 6].filter(x => argsFromState.board[x] === "user").length === 2
    ) {
      return chooseRandom([1, 3, 5, 7], argsFromState.board);
    }
  }
  const {
    lineLength: longestPossibleWinnableCompLinesLength,
    lines: longestPossibleWinnableCompLines
  } = {
    ...findLongestWinnableLines(
      "comp",
      argsFromState.board,
      argsFromState.gridSize,
      allLines
    )
  };
  const {
    lineLength: longestPossibleWinnableUserLinesLength,
    lines: longestPossibleWinnableUserLines
  } = {
    ...findLongestWinnableLines(
      "user",
      argsFromState.board,
      argsFromState.gridSize,
      allLines
    )
  };
  if (
    longestPossibleWinnableCompLinesLength >=
    longestPossibleWinnableUserLinesLength
  ) {
    if (longestPossibleWinnableCompLinesLength === 0) {
      const remainingBoardIndices = Array(argsFromState.gridSize ** 2)
        .fill()
        .map((x, index) => index)
        .filter(x => argsFromState.board[x] === null);
      return chooseRandom(remainingBoardIndices, argsFromState.board);
    }
    return getBestMove(
      longestPossibleWinnableCompLines,
      longestPossibleWinnableUserLines,
      argsFromState
    );
  } else {
    return getBestMove(
      longestPossibleWinnableUserLines,
      longestPossibleWinnableCompLines,
      argsFromState
    );
  }
};

export default calculateCompMove;
