const getBestLineLength = (lines, player, board) => {
  return Math.max(
    ...lines.map(line => countSquaresInLine(line, player, board))
  );
};

export const countSquaresInLine = (line, player, board) => {
  return line.filter(squareIndex => board[squareIndex] === player).length;
};

export default getBestLineLength;
