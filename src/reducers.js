import {
  MAKE_MOVE,
  RESTART_GAME,
  UNDO_TURN,
  REDO_TURN,
  CHANGE_GAME_MODE,
  TOGGLE_ICON_SELECT_FLIPPED,
  UPDATE_ICON_INFO,
  CHANGE_ROUTE
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
  iconSelectFlipped: false,
  route: "settings"
};

const initialIconState = {
  userIcon: "circle",
  userIconType: "nought",
  userIconColour: "#22b14c",
  compIcon: undefined,
  compIconType: undefined,
  compIconColour: "#ed261a"
};

export const gameStateReducer = (state = initialGameState, action = {}) => {
  switch (action.type) {
    case MAKE_MOVE:
      return simulateMove(action.payload, state);
    case RESTART_GAME:
      const { firstMove, gridSize, gameMode } = action.payload;
      return {
        ...initialGameState,
        firstMove,
        gridSize,
        gameMode,
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
    case CHANGE_GAME_MODE:
      return { ...state, gameMode: action.payload };
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
    case TOGGLE_ICON_SELECT_FLIPPED:
      return { ...state, iconSelectFlipped: !state.iconSelectFlipped };
    case CHANGE_ROUTE:
      return { ...state, route: action.payload};
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
    return { ...state, ...stateChanges };
  } else {
    return state;
  }
};

const processKeyPairs = (player, iconChanges) => {
  const keyPairsArr = Object.entries(iconChanges);
  const capitalisedKeysArr = capitaliseKeyNames(keyPairsArr);
  const textAddedToKeysArr = addTextToFrontOfKeys(capitalisedKeysArr, player);
  const keyPairObjsArr = textAddedToKeysArr.map(keyPair => ({
    [keyPair[0]]: keyPair[1]
  }));
  return keyPairObjsArr.reduce((newObj, keyObj) => {
    return Object.assign(newObj, keyObj);
  }, {});
};

const capitaliseKeyNames = keyPairs =>
  keyPairs.map(keyPair => [
    keyPair[0].charAt(0).toUpperCase() + keyPair[0].slice(1),
    keyPair[1]
  ]);

const addTextToFrontOfKeys = (keyPairs, text) =>
  keyPairs.map(keyPair => [`${text}${keyPair[0]}`, keyPair[1]]);
