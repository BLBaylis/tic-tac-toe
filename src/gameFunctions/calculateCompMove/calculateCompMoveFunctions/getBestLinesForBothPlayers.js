import { countSquaresInLine } from "../../helperFunctions";

const getBestLinesForBothPlayers = (
  winnableCompLines,
  winnableUserLines,
  gameBoard
) => {
  const bestCompLines = getBestLines(winnableCompLines, "comp", gameBoard);
  const bestUserLines = getBestLines(winnableUserLines, "user", gameBoard);
  return { bestCompLines, bestUserLines };
};

const getBestLines = (lines, player, gameBoard) => {
  const bestLineLength = getBestLineLength(lines, player, gameBoard);
  return lines.filter(
    line => countSquaresInLine(line, player, gameBoard) === bestLineLength
  );
};

const getBestLineLength = (lines, player, gameBoard) => {
  const lineLengths = lines.map(line =>
    countSquaresInLine(line, player, gameBoard)
  );
  return Math.max(...lineLengths);
};

export default getBestLinesForBothPlayers;
