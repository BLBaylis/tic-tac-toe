import {
  MAKE_MOVE,
  FLIP_GAME_GRID,
  RESTART_GAME,
  UNDO_TURN,
  REDO_TURN,
  TOGGLE_ICON_SELECT_OPEN,
  TOGGLE_ICON_SELECT_FLIPPED,
  UPDATE_ICON_INFO
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
  userIcon: "circle",
  userIconType: "nought",
  userIconColour: "#22b14c",
  compIcon: undefined,
  compIconType: undefined,
  compIconColour: "#ed261a"
};

export const gameStateReducer = (
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

export const interfaceReducer = (state = initialUIState, action = {}) => {
  switch (action.type) {
    case FLIP_GAME_GRID:
      return { ...state, gridFlipped: !state.gridFlipped };
    case TOGGLE_ICON_SELECT_OPEN:
      return {...state, iconSelectOpen: !state.iconSelectOpen}
    case TOGGLE_ICON_SELECT_FLIPPED:
      return {...state, iconSelectFlipped: !state.iconSelectFlipped}
    default:
      return state;
  }
};

export const iconInfoReducer = (state = initialIconState, action = {}) => {
  if (action.type === UPDATE_ICON_INFO) {
    const { player, iconChanges } = action.payload;
    const stateChanges = processKeyPairs(player, iconChanges);
    if (player === "user" && stateChanges.userIconType !== state.userIconType) {
      stateChanges.compIcon = undefined;
    }
    return {...state, ...stateChanges};
  } else {
    return state
  }
}

const processKeyPairs = (player, iconChanges) => {
  const keyPairsArr = Object.entries(iconChanges);
  const capitalisedKeysArr = capitaliseKeyNames(keyPairsArr);
  const textAddedToKeysArr = addTextToFrontOfKeys(capitalisedKeysArr, player);
  const keyPairObjsArr = textAddedToKeysArr.map(keyPair => ({[keyPair[0]] : keyPair[1]}));
  return keyPairObjsArr.reduce((newObj, keyObj) => {
    return Object.assign(newObj, keyObj)
  }, {});
}

const capitaliseKeyNames = (keyPairs) => keyPairs.map(keyPair => [keyPair[0].charAt(0).toUpperCase() + keyPair[0].slice(1), keyPair[1]]);

const addTextToFrontOfKeys = (keyPairs, text) => keyPairs.map(keyPair => [`${text}${keyPair[0]}`, keyPair[1]]);
