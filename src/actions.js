import {
  MAKE_MOVE,
  RESTART_GAME,
  UNDO_TURN,
  REDO_TURN,
  TOGGLE_ICON_SELECT_FLIPPED,
  UPDATE_ICON_INFO,
  CHANGE_ROUTE,
  CHANGE_GAME_MODE
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
  const { board, gridSize, turnNo, outcome } = getState().gameStateReducer;
  if (!outcome) {
    const compMove = calculateCompMove(board, gridSize, turnNo);
    dispatch(makeMove(compMove));
  }
};

export const restartGame = (gridSize, firstMove, gameMode) => {
  if (!gameMode) {throw new Error()};
  return {type: RESTART_GAME,
  payload: { gridSize: Number(gridSize), firstMove, gameMode }
}};

export const restartGameThenCompMove = (gridSize, firstMove) => (
  dispatch,
  getState
) => {
  dispatch(restartGame(gridSize, firstMove, "vsComp"));
  const { board, turnNo } = getState().gameStateReducer;
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

export const changeGameMode = (gameMode) => ({
  type: CHANGE_GAME_MODE,
  payload: gameMode
});

export const toggleIconSelectFlipped = () => ({
  type: TOGGLE_ICON_SELECT_FLIPPED
});

export const updateIconInfo = (player, iconChanges) => ({
  type: UPDATE_ICON_INFO,
  payload: { player, iconChanges }
});

export const changeRoute = (newRoute) => ({
  type: CHANGE_ROUTE,
  payload: newRoute
})