import findLongestWinnableLines from "./findLongestWinnableLines";
import getBestMove from "./getBestMove";

const calculateCompMove = (board, centerIndex, allLines, gridSize) => {
  const centerValue = board[centerIndex];
  if (!centerValue) {
    return centerIndex;
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
