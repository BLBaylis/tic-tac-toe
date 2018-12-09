import winCheck, { drawCheck } from "../gameEndingConditions";

const transformStateObj = (squareNo, prevState) => {
  const { board, userTurn, gridSize } = prevState;
  let { gameLog, turnNo, outcome } = prevState;
  let gameLogClone = gameLog.slice();
  const boardClone = board.slice();
  if (board[squareNo] || outcome !== undefined) {
    return prevState;
  }
  if (gameLog[turnNo + 1]) {
    gameLogClone = gameLog.slice(0, turnNo + 1);
  }
  boardClone[squareNo] = userTurn ? "user" : "comp";
  turnNo++;
  let winChecked = winCheck(boardClone, gridSize);
  if (winChecked) {
    outcome = winChecked;
  } else if (drawCheck(turnNo, gridSize)) {
    outcome = "draw";
  }
  const nonGameLogStateChanges = {
    board: boardClone,
    turnNo: turnNo,
    userTurn: !userTurn,
    outcome: outcome
  };
  return {
    gameLog: gameLogClone.concat(nonGameLogStateChanges),
    gridSize: gridSize,
    ...nonGameLogStateChanges
  };
};

export default transformStateObj;
