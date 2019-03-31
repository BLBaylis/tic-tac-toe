import generateAllIndexLines from "../generateAllIndexLines/generateAllIndexLines";
import { countOccurancesOfSquareValueInArr } from "../helperFunctions/helperFunctions";

//getGameResult
//arguments:
//  gridSize is the length of a grid line, where a gridSize 3 grid equals
//  ___________
// |_0_|_1_|_2_|
// |_3_|_4_|_5_|
// |_6_|_7_|_8_|
//
//  gameBoard is an arr where each index maps to the equivalent grid square
//  index, but contains the value in the square instead of the the square index
//  itself
//
//  turnNo is self-explainatory
//
// getGameResult determines if there is a winner and return that winner if that
// is the case.  Returns 'draw' for a draw and null if the game isn't finished.

export const getGameResult = (gameBoard, gridSize, turnNo) => {
  const allLines = generateAllIndexLines(gridSize);
  const noEmptySquareLines = allLines.filter(
    line => countOccurancesOfSquareValueInArr(line, null, gameBoard) === 0
  );
  const winningLines = noEmptySquareLines.filter(
    line =>
      countOccurancesOfSquareValueInArr(line, gameBoard[line[0]], gameBoard) === line.length
  );
  if (winningLines.length) {
    return gameBoard[winningLines[0][0]];
  } else if (turnNo >= gridSize ** 2) {
    return "draw";
  }
  return null;
};

export default getGameResult;
