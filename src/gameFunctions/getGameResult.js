import generateAllLines from "./generateAllLines";

const getWinner = (lines, gameBoard) => {
  const linesWithNoEmptySquares = lines.filter(line =>
    line.every(squareNumber => gameBoard[squareNumber] !== null)
  );
  const winningLines = linesWithNoEmptySquares.filter(line =>
    line.every(squareNumber => gameBoard[squareNumber] === gameBoard[line[0]])
  );
  if (winningLines.length) {
    return gameBoard[winningLines[0][0]];
  }
  return false;
};

export const getGameResult = (gameBoard, gridSize, turnNo) => {
  const allLines = generateAllLines(gridSize);
  const winner = getWinner(allLines, gameBoard);
  if (winner) {
    return winner;
  } else if (turnNo >= gridSize ** 2) {
    return "draw";
  }
  return null;
};

export default getGameResult;
