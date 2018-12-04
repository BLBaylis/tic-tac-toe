import winCheck, { drawCheck } from "../../gameLogic/gameEndingConditions";
import calculateCompMove from "../../gameLogic/compMoveLogic/calculateCompMove";

export const recordGameResults = (result, counters) => {
  let gameLog;
  if ((Math.random() * 10000) > 9990){
    gameLog = makeGameLogEasierToUse(result.gameLog);
    counters.randomGamesLog.push(gameLog);
  }
  if (result.outcome === "user") {
    counters.userCounter++;
    gameLog = makeGameLogEasierToUse(result.gameLog);
    counters.userWinsLog.push(gameLog);
  } else if (result.outcome === "comp") {
    counters.compCounter++;
  } else if (result.outcome === "draw") {
    counters.drawCounter++;
  } else {
    counters.noOutcome++;
    gameLog = makeGameLogEasierToUse(result.gameLog);
    counters.noOutcomeLog.push(gameLog);
  }
  return counters;
};

const makeGameLogEasierToUse = gameLog => {
  return gameLog.slice().reduce((total, curr) => {
    curr.board.map((x, index) => {
      if (x !== null && !total.includes(index)) {
        total.push(index);
      }
      return x;
    });
    return total;
  }, []);
};

export const simulateGame = (gridSize, firstMove, lines, centerIndex) => {
  let remainingSquares, randomIndex;
  let state = {
    board: Array(gridSize ** 2).fill(null),
    gameLog: [
      {
        board: Array(gridSize ** 2).fill(null),
        turnNo: 0,
        userTurn: firstMove === "user" ? true : false,
        centerIndex: centerIndex,
        outcome: undefined
      }
    ],
    turnNo: 0,
    userTurn: firstMove === "user" ? true : false,
    lines: lines,
    centerIndex: centerIndex,
    outcome: undefined
  };
  const maxMoves = gridSize ** 2;
  for (let movesTaken = 0; movesTaken < maxMoves; movesTaken = movesTaken + 2) {
    remainingSquares = Array(gridSize ** 2)
      .fill(null)
      .map((x, index) => index)
      .filter((x, index) => state.board[x] === null);
    randomIndex = Math.floor(Math.random() * remainingSquares.length);
    state = makeMoveSimulation(remainingSquares[randomIndex], state, gridSize);
    state = makeMoveSimulation(
      calculateCompMove(state.board, centerIndex, lines.allLines, gridSize),
      state,
      gridSize
    );
    if (state.outcome !== undefined) {
      return state;
    }
  }
  return state;
};

const makeMoveSimulation = (squareNo, prevState, gridSize) => {
  if (prevState.board[squareNo]) {
    throw new Error("Invalid squareNo passed to makeMoveSimulate");
  }
  if (prevState.outcome !== undefined) {
    return prevState;
  }
  const updatedState = updateGameStateObj(squareNo, prevState);
  if (drawCheck(updatedState.turnNo, gridSize)) {
    updatedState.outcome = "draw";
    return updatedState;
  }
  const winChecked = winCheck(updatedState.board, gridSize);
  if (winChecked) {
    updatedState.outcome = winChecked;
  }
  return updatedState;
};

const updateGameStateObj = (squareNo, prevState) => {
  const boardClone = prevState.board.slice();
  const nonGameLogStateChanges = {
    board: boardClone,
    turnNo: prevState.turnNo + 1,
    userTurn: !prevState.userTurn,
    centerIndex: prevState.centerIndex,
    outcome: prevState.outcome
  };
  nonGameLogStateChanges.board[squareNo] = prevState.userTurn ? "user" : "comp";
  return {
    gameLog: prevState.gameLog.concat(nonGameLogStateChanges),
    ...nonGameLogStateChanges
  };
};
