import getBestMoves, * as getBestMovesFunctions from './getBestMoves';

test('getBestMoves', () => {
  const result = getBestMoves(
    [[0, 1], [2, 3], [0, 2], [1, 3], [0, 3], [1, 2]],
    [[2, 3], [1, 3], [1, 2]],
    ["user", null, null, null]
  );

  expect(result).toEqual([1, 2, 3]);
});

test('findHighestArrValueFromChoiceOfArrIndices', () => {
  const result = getBestMoveFunctions
  .findHighestArrValueFromChoiceOfArrIndices(
    [1, 2, 7, 4, 6, 1, 2],
    [0, 1, 2, 3, 4, 5]
  );

  expect(result).toBe(7);
});

test('tallyLinesThatIncludeEachSquareIndex', () => {
  const result = getBestMoveFunctions
  .tallyLinesThatIncludeEachSquareIndex(
    [0, 3, 0, 3, 0, 3],
    4
  );

  expect(result).toEqual([3, 0, 0, 3]);
});

test('flattenArr', () => {
  const result = getBestMoveFunctions.flattenArr([0, 1, 2, [3, 5], [4, 6], 7]);
  expect(result).toEqual([0, 1, 2, 3, 5, 4, 6, 7]);
});

test('flattenArrThenGetUntakenSquareIndices', () => {
  const result = getBestMoveFunctions.flattenArrThenGetUntakenSquareIndices(
    [0, 1, 2, [3, 5], [4, 6], 7],
    ["user", "comp", null, null, "user", null, null, null]
  );
  expect(result).toEqual([2, 3, 5, 6, 7]);
});

test('removeDupes', () => {
  const result = getBestMoveFunctions.removeDupes([0, 0, 0, 1, 2, 3, 3, 0, 2]);
  expect(result).toEqual([0, 1, 2, 3]);
});
