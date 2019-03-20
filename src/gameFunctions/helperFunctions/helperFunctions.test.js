import * as helpers from "./helperFunctions";

describe("helperFunctions", () => {
  test("countSquaresInLine", () => {
    expect(
      helpers.countSquaresInLine([0, 1, 1], "user", ["user", "user", "user"])
    ).toBe(3);
  });

  test("findAllIndicesWithSquareValue", () => {
    expect(
      helpers.findAllIndicesWithSquareValue([0, 1, 2], null, [
        null,
        "user",
        "user"
      ])
    ).toEqual([0]);
  });

  test("generateIndexArr", () => {
    expect(helpers.generateIndexArr(3)).toEqual([0, 1, 2]);
  });
});

describe("chooseRandom", () => {
  test("chooseRandom returns a number", () => {
    expect(
      typeof helpers.chooseRandom(
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [null, null, null, null, null, null, null, null, null]
      ) === "number"
    ).toBe(true);
  });

  test("chooseRandom throws error for empty arr", () => {
    expect(() => helpers.chooseRandom([], [null, null, null])).toThrow(
      "chooseRandom couldn't find empty square, moveChoices: [], gameBoard: [null,null,null]"
    );
  });

  test("chooseRandom throws error for no empty spaces", () => {
    expect(() => helpers.chooseRandom([1, 2], [null, "user", "user"])).toThrow(
      "chooseRandom couldn't find empty square, moveChoices: [1,2], gameBoard: [null,user,user]"
    );
  });
});
