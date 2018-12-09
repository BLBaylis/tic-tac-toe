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
      const remainingBoard = argsFromState.board
        .slice()
        .map((x, index) => {
          if (x !== null) {
            return null;
          }
          return index;
        })
        .filter(x => x !== null);
      return chooseRandom(remainingBoard, argsFromState.board);
    }
    return getBestMove(
      longestPossibleWinnableCompLines,
      longestPossibleWinnableUserLines,
      argsFromState.board,
      argsFromState.gridSize
    );
  } else {
    return getBestMove(
      longestPossibleWinnableUserLines,
      longestPossibleWinnableCompLines,
      argsFromState.board,
      argsFromState.gridSize
    );
  }
};

export default calculateCompMove;
