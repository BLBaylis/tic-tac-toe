/*process lines takes the lines */

const processLines = (playerWithoutTempoLines, board, gridSize) => {
  const processedplayerWithoutTempoLines = getFlattenedArrOfAllUntakenSpacesDupesIncluded(
    playerWithoutTempoLines,
    board
  );
  return countLinesBySquareIndex(processedplayerWithoutTempoLines, gridSize);
};

const getFlattenedArrOfAllUntakenSpacesDupesIncluded = (arr, board) => {
  const arrClone = arr.slice();
  const associateEachUntakenSquareIndexWithTheLineItIsIn = arrClone.map(x =>
    x.filter(y => board[y] === null)
  );
  return associateEachUntakenSquareIndexWithTheLineItIsIn.reduce(
    (total, curr) => total.concat(curr),
    []
  );
};

const countLinesBySquareIndex = (arr, gridSize) => {
  const arrClone = arr.slice();
  return arrClone.reduce((total, curr) => {
    if (total[curr] === undefined) {
      total[curr] = { squareIndex: curr, amountOfLinesSquareIndexIsIn: 1 };
    } else {
      total[curr]["amountOfLinesSquareIndexIsIn"]++;
    }
    return total;
  }, Array(gridSize ** 2).fill());
};

export default processLines;
