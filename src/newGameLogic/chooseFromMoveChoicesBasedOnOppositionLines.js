import { chooseRandom } from "./helperFunctions";

const chooseFromMoveChoicesBasedOnOppositionLines = (
  moveChoices,
  oppositionLinesObjs,
  board
) => {
  const moveChoicesClone = moveChoices.slice();
  const oppositionLinesObjsClone = oppositionLinesObjs.slice();
  const bestMoveObjs = moveChoicesClone.reduce(
    (total, curr) => {
      if (oppositionLinesObjsClone[curr] === undefined) {
        return total;
      }
      if (
        oppositionLinesObjsClone[curr]["amountOfLinesSquareIndexIsIn"] >
        total[0]["amountOfLinesSquareIndexIsIn"]
      ) {
        total = [].concat(oppositionLinesObjsClone[curr]);
        return total;
      }
      if (
        oppositionLinesObjsClone[curr]["amountOfLinesSquareIndexIsIn"] ===
        total[0]["amountOfLinesSquareIndexIsIn"]
      ) {
        total = total.concat(oppositionLinesObjsClone[curr]);
        return total;
      }
      return total;
    },
    [{ amountOfLinesSquareIndexIsIn: [] }]
  );
  if (!bestMoveObjs[0]["amountOfLinesSquareIndexIsIn"].length) {
    return chooseRandom(moveChoices, board);
  }
  const bestMove = bestMoveObjs.map(x => x.squareIndex);
  if (bestMove.length > 1) {
    return chooseRandom(bestMove, board);
  }
  return bestMove;
};

export default chooseFromMoveChoicesBasedOnOppositionLines;
