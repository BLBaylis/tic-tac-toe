const processUserLinesLength1 = (allLength1UserLines, board, lines) => {
  allLength1UserLines = processAdjacentLines(allLength1UserLines);
  allLength1UserLines
    .reduce((total, curr) => total.concat(curr), [])
    .reduce((total, curr) => {
      if (!total.includes(curr)) {
        total.concat(curr);
      }
      return total;
    }, []);
};

const processAdjacentLines = (lines, board) => {
  const adjacentLinesArr = lines.slice();
  return adjacentLinesArr.filter(x => {
    let sharedSquare = getSharedSquareIndex(x[0], x[1]);
    if (sharedSquare) {
      return checkIfSharedSquareTakenByUser(x[0], x[1]);
    }
    return false;
  });
};

const getSharedSquareIndex = (line1, line2) => {
  let square;
  if (
    line1.some(x => {
      square = x;
      return line2.includes(x);
    })
  ) {
    return square;
  }
  return false;
};

const checkIfSharedSquareTakenByUser = (square, board) => {
  if (board[square]) {
    return true;
  }
  return false;
};

export default processUserLinesLength1;
