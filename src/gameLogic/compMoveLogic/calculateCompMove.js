import findLongestWinnableLines from "./findLongestWinnableLines";
import getBestMove from "./getBestMove";
import { chooseRandom } from "../helperFunctions";

const calculateCompMove = (board, centerIndex, allLines, gridSize, turnNo) => {
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
    lineLength: longestPossibleWinnableCompLinesLength,
    lines: longestPossibleWinnableCompLines
  } = { ...findLongestWinnableLines("comp", board, gridSize, allLines) };
  const {
    lineLength: longestPossibleWinnableUserLinesLength,
    lines: longestPossibleWinnableUserLines
  } = { ...findLongestWinnableLines("user", board, gridSize, allLines) };
  if (
    longestPossibleWinnableCompLinesLength >=
    longestPossibleWinnableUserLinesLength
  ) {
    if (longestPossibleWinnableCompLinesLength === 0) {
      const remainingBoard = board
        .slice()
        .map((x, index) => {
          if (x !== null) {
            return null;
          }
          return index;
        })
        .filter(x => x !== null);
      return chooseRandom(remainingBoard, board);
    }
    return getBestMove(
      longestPossibleWinnableCompLines,
      longestPossibleWinnableUserLines,
      board,
      gridSize
    );
  } else {
    return getBestMove(
      longestPossibleWinnableUserLines,
      longestPossibleWinnableCompLines,
      board,
      gridSize
    );
  }
};

export default calculateCompMove;
