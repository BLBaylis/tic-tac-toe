export const chooseRandomNumber = (lineLength) => Math.floor(Math.random() * lineLength);

export const chooseRandomSquareIndex = (line, board) => {
  let randomIndex = chooseRandomNumber(line.length);
  while ((board[line[randomIndex]] === "user" || board[line[randomIndex]] === "comp") && line.length > 0){
    line.splice(randomIndex, 1); 
    randomIndex = chooseRandomNumber(line.length);
  }
  if (board[line[randomIndex]] === "user" || board[line[randomIndex]] === "comp"){
    throw new Error("no empty spaces");
  }
  console.log(line, randomIndex, line[randomIndex]);
  return line[randomIndex];
};