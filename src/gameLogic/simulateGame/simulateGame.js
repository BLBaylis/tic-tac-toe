import calculateCompMove from "../calculateCompMove/calculateCompMove";
import winCheck, {
  drawCheck
} from "./simulateGameFunctions/gameEndingConditions";
import { generateIndexArr, chooseRandom } from "../helperFunctions";

export const simulateGame = (firstMove, gridSize) => {
  let state;
  let movesTaken = 0;
  let initialState = {
    board: Array(gridSize ** 2).fill(null),
    turnNo: 0,
    userTurn: firstMove === "user" ? true : false,
    gameLog: [
      {
        board: Array(gridSize ** 2).fill(null),
        turnNo: 0,
        userTurn: firstMove === "user" ? true : false,
        outcome: undefined
      }
    ],
    outcome: undefined,
    gridSize
  };
  const maxMoves = gridSize ** 2;
  if (firstMove === "comp") {
    state = simulateMove(calculateCompMove(initialState), initialState);
    movesTaken = 1;
  } else {
    state = initialState;
  }
  for (movesTaken; movesTaken < maxMoves; movesTaken = movesTaken + 2) {
    state = simulateRandomMove(state);
    if (state.outcome !== undefined) {
      return state;
    }
    state = simulateMove(calculateCompMove(state), state);
    if (state.outcome !== undefined) {
      return state;
    }
  }
  return state;
};

export const simulateMove = (squareNo, prevState) => {
  const { board, userTurn, gridSize } = prevState;
  let { gameLog, turnNo, outcome } = prevState;
  if (board[squareNo] || outcome !== undefined) {
    return prevState;
  }
  const boardClone = board.slice();
  if (gameLog[turnNo + 1]) {
    gameLog = gameLog.slice(0, turnNo + 1);
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
    turnNo,
    userTurn: !userTurn,
    outcome
  };
  return {
    gameLog: gameLog.concat(nonGameLogStateChanges),
    gridSize,
    ...nonGameLogStateChanges
  };
};

const simulateRandomMove = prevState => {
  const board = prevState.board;
  const chosenMove = chooseRandom(generateIndexArr(board.length), board);
  return simulateMove(chosenMove, prevState);
};
