import generateAllLines from "./generateAllLines";

const getLineInfoForBothPlayers = board => {
  const compLinesInfo = getPlayerLinesInfo("comp", board);
  const userLinesInfo = getPlayerLinesInfo("user", board);
  return { ...compLinesInfo, ...userLinesInfo };
};

const getPlayerLinesInfo = (player, board) => {
  const linesWithoutOppositionSquares = findLinesWithoutOppositionSquares(
    generateAllLines(board.length ** (1 / 2)),
    player,
    board
  );
  if (!linesWithoutOppositionSquares.length) {
    return {
    [`${player}BestLineLength`]: 0,
    [`${player}BestLines`]: []
  };
  }
  const bestPlayerLineLength = findLongestWinnableLineLength(
    linesWithoutOppositionSquares,
    player,
    board
  );
  const bestPlayerLines = findLongestWinnableLines(
    bestPlayerLineLength,
    linesWithoutOppositionSquares,
    player,
    board
  );
  return {
    [`${player}BestLineLength`]: bestPlayerLineLength,
    [`${player}BestLines`]: bestPlayerLines
  };
};

const findLinesWithoutOppositionSquares = (lines, lineType, board) => {
  return lines.filter(line => !lineHasOppositionSquare(line, lineType, board));
};

const lineHasOppositionSquare = (line, lineType, board) => {
  return line.some(
    squareIndex =>
      board[squareIndex] !== null && board[squareIndex] !== lineType
  );
};

const findLongestWinnableLineLength = (lines, lineType, board) => {
  const lineLengths = lines.map(line =>
    countSquaresInLine(line, lineType, board)
  );
  return Math.max(...lineLengths);
};

const findLongestWinnableLines = (length, lines, lineType, board) => {
  return lines.filter(
    line => countSquaresInLine(line, lineType, board) === length
  );
};

const countSquaresInLine = (line, squareType, board) => {
  return line.filter(squareIndex => board[squareIndex] === squareType).length;
};

export default getLineInfoForBothPlayers;
