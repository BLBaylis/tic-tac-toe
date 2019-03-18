import {
  MAKE_MOVE,
  FLIP_GAME_GRID,
  RESTART_GAME,
  UNDO_TURN,
  REDO_TURN
} from "./constants.js";
import calculateCompMove from "./gameFunctions/calculateCompMove/calculateCompMove";

export const makeMove = squareNumber => ({
  type: MAKE_MOVE,
  payload: squareNumber
});

export const makeUserMoveThenCompMove = squareNumber => (
  dispatch,
  getState
) => {
  dispatch(makeMove(squareNumber));
  const { board, gridSize, turnNo, outcome } = getState().updateGameGridReducer;
  if (!outcome) {
    const compMove = calculateCompMove(board, gridSize, turnNo);
    dispatch(makeMove(compMove));
  }
};

export const flipGameGrid = () => ({
  type: FLIP_GAME_GRID
});

export const restartGame = (gridSize, firstMove) => ({
  type: RESTART_GAME,
  payload: { gridSize: Number(gridSize), firstMove }
});

export const restartGameThenCompMove = (gridSize, firstMove) => (
  dispatch,
  getState
) => {
  dispatch(restartGame(gridSize, firstMove));
  const { board, turnNo } = getState().updateGameGridReducer;
  const compMove = calculateCompMove(board, gridSize, turnNo);
  dispatch(makeMove(compMove));
};

export const undoTurn = turnNo => ({
  type: UNDO_TURN,
  payload: turnNo
});

export const redoTurn = turnNo => ({
  type: REDO_TURN,
  payload: turnNo
});
