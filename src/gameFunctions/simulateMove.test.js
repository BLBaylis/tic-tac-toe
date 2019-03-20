import simulateMove, {
  checkMoveIsValid,
  trimGameLog,
  updateBoard,
  getNonGameLogState
} from "./simulateMove";

test("simulateMove", () => {
  expect(
    simulateMove(0, {
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
    })
  ).toEqual({
    board: ["user", null, null, null, null, null, null, null, null],
    gameLog: [
      {
        board: [null, null, null, null, null, null, null, null, null],
        turnNo: 0,
        userTurn: true,
        outcome: null
      },
      {
        board: ["user", null, null, null, null, null, null, null, null],
        turnNo: 1,
        userTurn: false,
        outcome: null
      }
    ],
    turnNo: 1,
    userTurn: false,
    outcome: null,
    gridSize: 3,
    firstMove: "user",
    gameMode: "vsComp"
  });
});

describe("checkMoveIsValid", () => {
  test("checkMoveIsValid returns false when square is already taken", () => {
    expect(checkMoveIsValid(0, { board: ["user"], outcome: null })).toBe(false);
  });

  test("checkMoveIsValid returns false when game has ended", () => {
    expect(checkMoveIsValid(0, { board: [null], outcome: "user" })).toBe(false);
  });

  test("checkMoveIsValid returns true when valid move", () => {
    expect(checkMoveIsValid(0, { board: [null], outcome: null })).toBe(true);
  });
});

test("trimGameLog returns array with (turnNo + 1) objects", () => {
  expect(trimGameLog({ turnNo: 0, gameLog: [{}, {}] })).toEqual([{}]);
  expect(trimGameLog({ turnNo: 0, gameLog: [{}] })).toEqual([{}]);
});

test("updateBoard", () => {
  expect(updateBoard(0, { board: [null], userTurn: true })).toEqual(["user"]);
});

test("getNonGameLogState", () => {
  expect(getNonGameLogState(["user"], 0, true, null)).toEqual({
    board: ["user"],
    userTurn: false,
    turnNo: 1,
    outcome: null
  });
});
