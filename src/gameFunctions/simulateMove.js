import getGameResult from "./getGameResult";

export default (squareNo, prevState) => {
  const { board, userTurn, gridSize } = prevState;
  let { gameLog, turnNo, outcome } = prevState;
  if (board[squareNo] || outcome !== null) {
    return prevState;
  }
  const boardClone = board.slice();
  if (gameLog[turnNo + 1]) {
    //slice off undone moves
    gameLog = gameLog.slice(0, turnNo + 1);
  }
  //update board with turn player move
  boardClone[squareNo] = userTurn ? "user" : "comp";
  turnNo++;
  outcome = getGameResult(boardClone, gridSize, turnNo);
  const nonGameLogStateChanges = {
    board: boardClone,
    turnNo,
    userTurn: !userTurn,
    outcome
  };
  gameLog = gameLog.concat(nonGameLogStateChanges);
  return {
    ...prevState,
    gameLog,
    ...nonGameLogStateChanges
  };
};
