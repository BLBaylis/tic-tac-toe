import { findAllUntakenSquares } from "../helperFunctions";
import chooseFromMoveChoicesBasedOnOppositionLines from "./chooseFromMoveChoicesBasedOnOppositionLines";
import processLines from "./processLines";

const getBestMove = (
  playerWithTempoLines,
  playerWithoutTempoLines,
  board,
  gridSize
) => {
  const possibleMoves = playerWithTempoLines.reduce((total, curr) => {
    return total.concat(findAllUntakenSquares(curr, board));
  }, []);
  const processedUserLines = processLines(
    playerWithoutTempoLines,
    board,
    gridSize
  );
  return chooseFromMoveChoicesBasedOnOppositionLines(
    possibleMoves,
    processedUserLines,
    board
  );
};
export default getBestMove;
