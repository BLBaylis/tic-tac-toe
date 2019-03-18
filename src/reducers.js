import {
  MAKE_MOVE,
  FLIP_GAME_GRID,
  RESTART_GAME,
  UNDO_TURN,
  REDO_TURN
} from "./constants.js";
import simulateMove from "./gameFunctions/simulateMove";

const initialGameState = {
  board: Array(9).fill(null),
  gameLog: [
    {
      board: Array(9).fill(null),
      turnNo: 0,
      userTurn: true,
      outcome: null
    }
  ],
  turnNo: 0,
  userTurn: true,
  outcome: null,
  gridSize: 3,
  firstMove: "user",
  gameMode: "vsComp"
};

const initialUIState = {
  iconSelectOpen: true,
  iconSelectFlipped: false,
  gridflipped: false
};

const initialIconState = {
  userIconChoice: "circle",
  userIconType: "nought",
  userIconColour: "#22b14c",
  compIconChoice: undefined,
  compIconType: undefined,
  compIconColour: "#ed261a"
};

export const updateGameGridReducer = (
  state = initialGameState,
  action = {}
) => {
  switch (action.type) {
    case MAKE_MOVE:
      return simulateMove(action.payload, state);
    case RESTART_GAME:
      const { firstMove, gridSize } = action.payload;
      return {
        ...initialGameState,
        firstMove,
        gridSize,
        userTurn: firstMove === "user",
        board: Array(gridSize ** 2).fill(null),
        gameLog: [
          {
            board: Array(gridSize ** 2).fill(null),
            turnNo: 0,
            userTurn: firstMove === "user",
            outcome: null
          }
        ]
      };
    case UNDO_TURN:
      return { ...state, ...state.gameLog[action.payload - 2] };
    case REDO_TURN:
      return { ...state, ...state.gameLog[action.payload + 2] };
    default:
      return state;
  }
};

export const updateInterfaceReducer = (state = initialUIState, action = {}) => {
  switch (action.type) {
    case FLIP_GAME_GRID:
      return { ...state, gridFlipped: !state.gridFlipped };
    default:
      return state;
  }
};
