import generateAllIndexLines from "../../../generateAllIndexLines/generateAllIndexLines";
import { countOccurancesOfSquareValueInArr } from "../../../helperFunctions/helperFunctions";

const getBestLines = (player, gameBoard) => {
  const winnableLines = getWinnableLines(
    generateAllIndexLines(gameBoard.length ** (1 / 2)),
    player,
    gameBoard
  );
  const bestLineLength = getBestLineLength(winnableLines, player, gameBoard);
  return winnableLines.filter(
    line =>
      countOccurancesOfSquareValueInArr(line, player, gameBoard) ===
      bestLineLength
  );
};

export const getWinnableLines = (lines, player, gameBoard) => {
  return lines.filter(line =>
    line.every(
      squareIndex =>
        gameBoard[squareIndex] === null || gameBoard[squareIndex] === player
    )
  );
};

export const getBestLineLength = (lines, player, gameBoard) => {
  const lineLengths = lines.map(line =>
    countOccurancesOfSquareValueInArr(line, player, gameBoard)
  );
  return Math.max(...lineLengths);
};

export default getBestLines;
