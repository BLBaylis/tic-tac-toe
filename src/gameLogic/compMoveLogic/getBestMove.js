import { findAllUntakenSquares } from "../helperFunctions";
import chooseFromMoveChoicesBasedOnOppositionLines from "./chooseFromMoveChoicesBasedOnOppositionLines";
import processLines from "./processLines";

const getBestMove = (
  playerWithTempoLines,
  playerWithoutTempoLines,
  argsFromState
) => {
  const possibleMoves = playerWithTempoLines.reduce((total, curr) => {
    return total.concat(findAllUntakenSquares(curr, argsFromState.board));
  }, []);
  const processedUserLines = processLines(
    playerWithoutTempoLines,
    argsFromState.board,
    argsFromState.gridSize
  );
  return chooseFromMoveChoicesBasedOnOppositionLines(
    possibleMoves,
    processedUserLines,
    argsFromState.board
  );
};
export default getBestMove;
