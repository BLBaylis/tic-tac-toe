import generateAllIndexLines from "../../generateAllIndexLines";

const getAllWinnableLinesForBothPlayers = board => {
  const winnableCompLines = getWinnableLines(
    generateAllIndexLines(board.length ** (1 / 2)),
    "comp",
    board
  );
  const winnableUserLines = getWinnableLines(
    generateAllIndexLines(board.length ** (1 / 2)),
    "user",
    board
  );
  return { winnableCompLines, winnableUserLines };
};

const getWinnableLines = (lines, player, board) => {
  return lines.filter(line => !lineHasOppositionSquare(line, player, board));
};

const lineHasOppositionSquare = (line, player, board) => {
  return line.some(
    squareIndex => board[squareIndex] !== null && board[squareIndex] !== player
  );
};

export default getAllWinnableLinesForBothPlayers;
