export const findAllEmptySquareIndicesOnGameBoard = gameBoard => {
  const gameBoardIndices = generateIndexArr(gameBoard.length);
  return findAllIndicesWithSquareValue(gameBoardIndices, null, gameBoard);
};

export const generateIndexArr = length =>
  Array(length)
    .fill()
    .map((curr, index) => index);

//findAllIndicesWithSquareValue([0, 1, 2], "user", [null, null, "user"]) returns [2]
export const findAllIndicesWithSquareValue = (line, squareValue, gameBoard) => {
  return line.filter(squareIndex => gameBoard[squareIndex] === squareValue);
};

//countOccurancesOfSquareValueInArr([0, 1, 2], "user", [null, null, "user"]) returns 1
export const countOccurancesOfSquareValueInArr = (
  line,
  squareValue,
  gameBoard
) => findAllIndicesWithSquareValue(line, squareValue, gameBoard).length;

export const flattenArr = arr =>
  arr.reduce((total, curr) => total.concat(curr), []);

export const removeDupes = arr =>
  arr.filter((element, index) => arr.indexOf(element) === index);

export const countOccurancesOfElementInArr = (element, arr) =>
  arr.filter(curr => curr === element).length;

export const chooseRandomElementFromArr = arr => {
  if (!arr.length) {
    return false;
  }
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
