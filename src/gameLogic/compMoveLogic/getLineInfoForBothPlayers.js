const getLineInfoForBothPlayers = (lines, board) => {
  const compLinesInfo = getPlayerLinesInfo(lines, "comp", board);
  const userLinesInfo = getPlayerLinesInfo(lines, "user", board);
  return { ...compLinesInfo, ...userLinesInfo };
};

const getPlayerLinesInfo = (lines, player, board) => {
  const linesWithoutOppositionSquares = findLinesWithoutOppositionSquares(
    lines,
    player,
    board
  );
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

const lineHasOppositionSquare = (line, lineType, board) => {
  return line.some(
    squareIndex =>
      board[squareIndex] !== null && board[squareIndex] !== lineType
  );
};

const findLinesWithoutOppositionSquares = (lines, lineType, board) => {
  return (lines = lines.filter(
    line => !lineHasOppositionSquare(line, lineType, board)
  ));
};

const countSquaresInLine = (line, squareType, board) => {
  return line.filter(squareIndex => board[squareIndex] === squareType).length;
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

export default getLineInfoForBothPlayers;
