import getBestMoves, { getEmptySquareIndicesNoDupes } from "./getBestMoves";

test("getBestMoves", () => {
  const result = getBestMoves(
    [[0, 1], [2, 3], [0, 2], [1, 3], [0, 3], [1, 2]],
    [[2, 3], [1, 3], [1, 2]],
    ["user", null, null, null]
  );

  expect(result).toEqual([1, 2, 3]);
});

test("getEmptySquareIndicesNoDupes", () => {
  const result = getEmptySquareIndicesNoDupes(
    [0, 1, 2, [3, 5], [4, 6], 7, 3, 2],
    ["user", "comp", null, null, "user", null, null, null]
  );
  expect(result).toEqual([2, 3, 5, 6, 7]);
});
