import generateAllIndexLines from "./generateAllIndexLines";
import { countSquaresInLine } from "./helperFunctions";

export const getGameResult = (gameBoard, gridSize, turnNo) => {
  const allLines = generateAllIndexLines(gridSize);
  const noEmptySquareLines = allLines.filter(
    line => countSquaresInLine(line, null, gameBoard) === 0
  );
  const winningLines = noEmptySquareLines.filter(
    line =>
      countSquaresInLine(line, gameBoard[line[0]], gameBoard) === line.length
  );
  if (winningLines.length) {
    return gameBoard[winningLines[0][0]];
  } else if (turnNo >= gridSize ** 2) {
    return "draw";
  }
  return null;
};

export default getGameResult;
