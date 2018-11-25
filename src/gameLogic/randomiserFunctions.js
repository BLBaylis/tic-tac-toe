export const chooseRandomNumber = oldLineLength =>
  Math.floor(Math.random() * oldLineLength);

export const chooseRandomSquareIndex = (line, board) => {
  let oldLine = line.slice();
  let oldOldLine = oldLine.slice();
  let randomIndex = chooseRandomNumber(oldLine.length);
  while (
    (board[oldLine[randomIndex]] === "user" ||
      board[oldLine[randomIndex]] === "comp") &&
    oldLine.length > 0
  ) {
    oldLine.splice(randomIndex, 1);
    randomIndex = chooseRandomNumber(oldLine.length);
  }
  if (
    board[oldLine[randomIndex]] === "user" ||
    board[oldLine[randomIndex]] === "comp"
  ) {
    throw new Error("no empty spaces");
  }
  if (oldLine[randomIndex] === undefined){
    console.log(oldLine, randomIndex);
    console.log(oldOldLine);
  }
  return oldLine[randomIndex];
};
