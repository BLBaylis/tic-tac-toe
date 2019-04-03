import * as helpers from "./helperFunctions";

describe("helperFunctions", () => {
  test("countOccurancesOfSquareValueInArr", () => {
    expect(
      helpers.countOccurancesOfSquareValueInArr([0, 1, 1], "user", [
        "user",
        "user",
        "user"
      ])
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

describe("chooseRandomElementFromArr", () => {
  test("chooseRandomElementFromArr returns a number", () => {
    expect(
      typeof helpers.chooseRandomElementFromArr([0, 1, 2, 3, 4, 5, 6, 7, 8]) ===
        "number"
    ).toBe(true);
  });

  test("chooseRandomElementFromArr returns false for empty arr", () => {
    expect(helpers.chooseRandomElementFromArr([])).toBe(false);
  });
});

test("flattenArr", () => {
  const result = helpers.flattenArr([0, 1, 2, [3, 5], [4, 6], 7]);
  expect(result).toEqual([0, 1, 2, 3, 5, 4, 6, 7]);
});

test("removeDupes", () => {
  const result = helpers.removeDupes([0, 0, 0, 1, 2, 3, 3, 0, 2]);
  expect(result).toEqual([0, 1, 2, 3]);
});

test("countOccurancesOfElementInArr", () => {
  const result = helpers.countOccurancesOfElementInArr(1, [
    1,
    1,
    2,
    3,
    1,
    2,
    1
  ]);
  expect(result).toBe(4);
});

test("findAllEmptySquareIndicesOnGameBoard", () => {
  expect(
    helpers.findAllEmptySquareIndicesOnGameBoard(["user", null, "comp", null])
  ).toEqual([1, 3]);
});
