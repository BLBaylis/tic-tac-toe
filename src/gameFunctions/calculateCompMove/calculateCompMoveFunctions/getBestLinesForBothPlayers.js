import { countSquaresInLine } from "../../helperFunctions";

const getBestLinesForBothPlayers = (
  winnableCompLines,
  winnableUserLines,
  board
) => {
  const bestCompLines = getBestLines(winnableCompLines, "comp", board);
  const bestUserLines = getBestLines(winnableUserLines, "user", board);
  return { bestCompLines, bestUserLines };
};

const getBestLines = (lines, player, board) => {
  const bestLineLength = getBestLineLength(lines, player, board);
  return lines.filter(
    line => countSquaresInLine(line, player, board) === bestLineLength
  );
};

const getBestLineLength = (lines, player, board) => {
  const lineLengths = lines.map(line =>
    countSquaresInLine(line, player, board)
  );
  return Math.max(...lineLengths);
};

export default getBestLinesForBothPlayers;
