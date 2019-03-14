import getBestLineLength, { countSquaresInLine } from "./getBestLineLength";

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

export default getBestLinesForBothPlayers;
