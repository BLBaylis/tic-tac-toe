import {chooseRandomNumber, chooseRandomSquareIndex} from './randomiserFunctions';

const processUserEdgeLinesLength1 = (lines, board) => {
    let line;
    const userLinesLength1And0CompSquares = lines
      .slice()
      .filter(x => !x.map(x => board[x]).includes("comp"));
    let adjacentLinePairsOfLength1 = processAdjacentLines(
      userLinesLength1And0CompSquares,
      board
    );
    
    if (adjacentLinePairsOfLength1.length){
      const pairOfAdjacentLines = adjacentLinePairsOfLength1[chooseRandomNumber(adjacentLinePairsOfLength1.length)];
      line = pairOfAdjacentLines[chooseRandomNumber(pairOfAdjacentLines.length)];
      return chooseRandomSquareIndex(line, board);
    } else {
      return false;
    }
}

const processAdjacentLines = (lines, board) => {
  const length1Lines = lines.slice();
  const everyPairComboOfLengthLines1 = getArrOfAllPossiblePairs(length1Lines);
  return everyPairComboOfLengthLines1.filter((x, index, arr) => {
    let sharedSquare = getSharedSquareIndex(x[0], x[1]);
    if (sharedSquare !== false) {
      return !isSharedSquareTakenByUser(sharedSquare, board);
    }
    return false;
  });
};

const getArrOfAllPossiblePairs = arr => {
  const arrCopy = arr.slice();
  return arrCopy.reduce((total, curr, index, arrCopy) => {
    total = total.concat(getArrOfAllPossiblePairsWithElement(curr, arrCopy.slice(index + 1, arrCopy.length)));
    return total;
  }, []);
}

const getArrOfAllPossiblePairsWithElement = (element, restOfArr) => {
  const restOfArrClone = restOfArr.slice()
  return restOfArrClone.map(x => [x, element]);
}

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

const isSharedSquareTakenByUser = (square, board) => {
  if (board[square] === "user") {
    return true;
  }
  return false;
};

export default processUserEdgeLinesLength1;