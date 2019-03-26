import getGameResult from "../getGameResult/getGameResult";

//creates new state for the move just taken

const simulateMove = (squareNumber, prevState) => {
  const { gridSize, turnNo, userTurn } = prevState;
  if (!checkMoveIsValid(squareNumber, prevState)) {
    return prevState;
  }
  const gameLog = trimGameLog(prevState);
  const gameBoard = updateGameBoard(squareNumber, prevState);
  const outcome = getGameResult(gameBoard, gridSize, turnNo + 1);
  const nonGameLogState = getNonGameLogState(gameBoard, turnNo, userTurn, outcome);
  return {
    ...prevState,
    gameLog: gameLog.concat(nonGameLogState),
    ...nonGameLogState
  };
};

export const checkMoveIsValid = (squareNumber, prevState) => {
  const { gameBoard, outcome } = prevState;
  return gameBoard[squareNumber] || outcome !== null ? false : true;
};

export const trimGameLog = prevState => {
  const { gameLog, turnNo } = prevState;
  return gameLog[turnNo + 1] ? gameLog.slice(0, turnNo + 1) : gameLog;
};

export const updateGameBoard = (squareNumber, prevState) => {
  const { gameBoard, userTurn } = prevState;
  const updatedGameBoard = gameBoard.slice();
  updatedGameBoard[squareNumber] = userTurn ? "user" : "comp";
  return updatedGameBoard;
};

export const getNonGameLogState = (gameBoard, turnNo, userTurn, outcome) => {
  return { gameBoard, userTurn: !userTurn, outcome, turnNo: turnNo + 1 };
};

export default simulateMove;
