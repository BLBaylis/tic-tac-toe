import calculateCompMove from "../calculateCompMove/calculateCompMove";
import simulateMove from "../simulateMove/simulateMove";
import { generateIndexArr, chooseRandom } from "../helperFunctions/helperFunctions";

const simulateGame = (firstMove, gridSize) => {
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

const simulateRandomMove = prevState => {
  const board = prevState.board;
  const chosenMove = chooseRandom(generateIndexArr(board.length), board);
  return simulateMove(chosenMove, prevState);
};

export default simulateGame;
