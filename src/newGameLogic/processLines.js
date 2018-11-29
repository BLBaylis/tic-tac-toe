import {
  getFlattenedArrOfAllUntakenSpacesDupesIncluded,
  countLinesBySquareIndex
} from "./countLinesBySquareIndex";

const processLines = (playerWithoutTempoLines, gridSize, board) => {
  const processedplayerWithoutTempoLines = getFlattenedArrOfAllUntakenSpacesDupesIncluded(
    playerWithoutTempoLines,
    board
  );
  return countLinesBySquareIndex(processedplayerWithoutTempoLines, gridSize);
};

export default processLines;
