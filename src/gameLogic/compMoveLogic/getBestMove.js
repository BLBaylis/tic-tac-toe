import { findAllEmptySquares } from "../helperFunctions";
import chooseFromMoveChoicesBasedOnOppositionLines from "./chooseFromMoveChoicesBasedOnOppositionLines";
import processLines from "./processLines";

const getBestMove = (
  playerWithTempoLines,
  playerWithoutTempoLines,
  argsFromState
) => {
  const { board, gridSize } = argsFromState;
  const possibleMoves = playerWithTempoLines.reduce((total, curr) => {
    return total.concat(findAllEmptySquares(curr, board));
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
