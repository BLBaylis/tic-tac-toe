import getGameResult from "../getGameResult/getGameResult";

//creates new state for the move just taken

const simulateMove = (squareNumber, prevState) => {
  const { gridSize, turnNo, userTurn } = prevState;
  if (!checkMoveIsValid(squareNumber, prevState)) {
    return prevState;
  }
  const gameLog = trimGameLog(prevState);
  const board = updateBoard(squareNumber, prevState);
  const outcome = getGameResult(board, gridSize, turnNo);
  const nonGameLogState = getNonGameLogState(board, turnNo, userTurn, outcome);
  return {
    ...prevState,
    gameLog: gameLog.concat(nonGameLogState),
    ...nonGameLogState
  };
};

export const checkMoveIsValid = (squareNumber, prevState) => {
  const { board, outcome } = prevState;
  return board[squareNumber] || outcome !== null ? false : true;
};

export const trimGameLog = prevState => {
  const { gameLog, turnNo } = prevState;
  return gameLog[turnNo + 1] ? gameLog.slice(0, turnNo + 1) : gameLog;
};

export const updateBoard = (squareNumber, prevState) => {
  const { board, userTurn } = prevState;
  const updatedBoard = board.slice();
  updatedBoard[squareNumber] = userTurn ? "user" : "comp";
  return updatedBoard;
};

export const getNonGameLogState = (board, turnNo, userTurn, outcome) => {
  return { board, userTurn: !userTurn, outcome, turnNo: turnNo + 1 };
};

export default simulateMove;
