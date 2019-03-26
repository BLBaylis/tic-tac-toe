import {
  MAKE_MOVE,
  FLIP_GAME_GRID,
  RESTART_GAME,
  CHANGE_TO_RECORDED_TURN,
  TOGGLE_ICON_SELECT_OPEN,
  TOGGLE_ICON_SELECT_FLIPPED,
  UPDATE_ICON_INFO,
  UPDATE_GAME_MODE
} from "./constants.js";
import calculateCompMove from "./gameFunctions/calculateCompMove/calculateCompMove";
import { chooseRandomElementFromArr } from './gameFunctions/helperFunctions/helperFunctions'

export const makeMove = squareNumber => ({
  type: MAKE_MOVE,
  payload: squareNumber
});

export const makeUserMoveThenCompMove = squareNumber => (
  dispatch,
  getState
) => {
  dispatch(makeMove(squareNumber));
  const { gameBoard, gridSize, turnNo, outcome } = getState().gameStateReducer;
  if (!outcome) {
    const compMoveChoices = calculateCompMove(gridSize, turnNo, gameBoard);
    const compMove = typeof compMoveChoices === "number" ? compMoveChoices :
    chooseRandomElementFromArr(compMoveChoices);
    dispatch(makeMove(compMove));
  }
};

export const restartGame = (gridSize, firstMove) => ({
  type: RESTART_GAME,
  payload: { gridSize: Number(gridSize), firstMove }
});

export const restartGameThenCompMove = (gridSize, firstMove) => (
  dispatch,
  getState
) => {
  dispatch(restartGame(gridSize, firstMove));
  const { gameBoard, turnNo } = getState().gameStateReducer;
  const compMove = calculateCompMove(gridSize, turnNo, gameBoard);
  dispatch(makeMove(compMove));
};

export const changeToRecordedTurn = turnsToMove => ({
  type: CHANGE_TO_RECORDED_TURN,
  payload: turnsToMove
});

export const toggleIconSelectOpen = () => ({
  type: TOGGLE_ICON_SELECT_OPEN
});

export const toggleIconSelectFlipped = () => ({
  type: TOGGLE_ICON_SELECT_FLIPPED
});

export const flipGameGrid = () => ({
  type: FLIP_GAME_GRID
});

export const updateIconInfo = (player, iconChanges) => ({
  type: UPDATE_ICON_INFO,
  payload: { player, iconChanges }
});

export const updateGameMode = (gameMode) => ({
  type: UPDATE_GAME_MODE,
  payload: gameMode
})
