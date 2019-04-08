import {
  MAKE_MOVE,
  RESTART_GAME,
  CHANGE_GAME_MODE,
  TOGGLE_ICON_SELECT_FLIPPED,
  UPDATE_ICON_INFO,
  CHANGE_TO_RECORDED_TURN
} from "./constants.js";
import simulateMove from "./gameFunctions/simulateMove/simulateMove";

const initialGameState = {
  gameBoard: Array(9).fill(null),
  gameLog: [
    {
      gameBoard: Array(9).fill(null),
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
        gameBoard: Array(gridSize ** 2).fill(null),
        gameLog: [
          {
            gameBoard: Array(gridSize ** 2).fill(null),
            turnNo: 0,
            userTurn: firstMove === "user",
            outcome: null
          }
        ]
      };
    case CHANGE_GAME_MODE:
      return { ...state, gameMode: action.payload };
    case CHANGE_TO_RECORDED_TURN:
      const { turnsToMove, direction } = action.payload;
      let newState = changeTurn(turnsToMove, direction, state);
      if (newState) {
        return newState;
      }
      newState = changeTurn(1, direction, state);
      return newState ? newState : state;
    default:
      return state;
  }
};

export const iconSelectFlippedToggleReducer = (
  state = { iconSelectFlipped: false },
  action = {}
) => {
  if (action.type === TOGGLE_ICON_SELECT_FLIPPED) {
    return { ...state, iconSelectFlipped: !state.iconSelectFlipped };
  } else {
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

const changeTurn = (turnsToMove, direction, prevState) => {
  const { gameMode, gameLog, turnNo, firstMove } = prevState;
  const newTurnNumber =
    direction === "back" ? turnNo - turnsToMove : turnNo + turnsToMove;
  const stateChanges = gameLog[newTurnNumber];
  if (!stateChanges) return false;
  if (!stateChanges.userTurn && turnsToMove === 2) return false;
  if (!stateChanges.turnNo && firstMove === "comp" && gameMode !== "pvp") {
    return false;
  }
  return {
    ...prevState,
    ...stateChanges,
    gameBoard: stateChanges.gameBoard.slice(),
    gameLog: [...prevState.gameLog]
  };
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
