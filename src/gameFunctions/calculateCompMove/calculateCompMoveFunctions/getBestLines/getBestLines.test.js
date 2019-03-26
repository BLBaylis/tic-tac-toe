import getBestLines, {
  getWinnableLines,
  getBestLineLength
} from './getBestLines';

test("getWinnableLines", () => {
  expect(
    getWinnableLines([[0, 1, 2], [3, 4, 5], [6, 7, 8]], "comp", [
      "user",
      null,
      "comp",
      "user",
      null,
      null,
      null,
      null,
      null
    ])
  ).toEqual([[6, 7, 8]]);
});

test("getBestLineLength", () => {
  const result = getBestLineLength([[0, 1], [0, 2], [0, 3]], "user", [
    "user",
    "user",
    null,
    null
  ]);
  expect(result).toBe(2);
});

test("getBestLines", () => {
  const result = getBestLines("user", [
    "user",
    "user",
    "user",
    null
  ]);
  expect(result).toEqual([[0, 2], [0, 1], [1, 2]]);
});