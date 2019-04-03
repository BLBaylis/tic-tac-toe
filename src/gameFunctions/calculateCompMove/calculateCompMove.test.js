import calculateCompMove, {
  checkForOppositeCornersEdgeCase
} from "./calculateCompMove";

test("checkForOppositeCornersEdgeCase returns true on edge case", () => {
  const result1 = checkForOppositeCornersEdgeCase(3, 3, [
    "user",
    null,
    null,
    null,
    "comp",
    null,
    null,
    null,
    "user"
  ]);
  const result2 = checkForOppositeCornersEdgeCase(3, 3, [
    null,
    null,
    "user",
    null,
    "comp",
    null,
    "user",
    null,
    null
  ]);

  expect(result1).toBe(true);
  expect(result2).toBe(true);
});

describe("calculateCompMove", () => {
  test("returns center value if available", () => {
    expect(
      calculateCompMove(3, 3, [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ])
    ).toBe(4);
  });

  test("returns [1,3,5,7] if edge case is true", () => {
    const result1 = calculateCompMove(3, 3, [
      "user",
      null,
      null,
      null,
      "comp",
      null,
      null,
      null,
      "user"
    ]);
    const result2 = calculateCompMove(3, 3, [
      null,
      null,
      "user",
      null,
      "comp",
      null,
      "user",
      null,
      null
    ]);
    expect(result1).toEqual([1, 3, 5, 7]);
    expect(result2).toEqual([1, 3, 5, 7]);
  });

  test("returns all empty spaces on the board if no winnable lines", () => {
    const result = calculateCompMove(3, 3, [
      "user",
      "user",
      "comp",
      "comp",
      "comp",
      "user",
      "user",
      null,
      "comp"
    ]);
    expect(result).toEqual([7]);
  });

  test("returns best comp move", () => {
    const result1 = calculateCompMove(3, 3, [
      "user",
      null,
      "comp",
      null,
      "comp",
      "user",
      "user",
      null,
      null
    ]);
    const result2 = calculateCompMove(3, 3, [
      null,
      null,
      null,
      null,
      "comp",
      "user",
      "user",
      null,
      null
    ]);
    const result3 = calculateCompMove(5, 5, [
      null,
      null,
      null,
      null,
      null,
      null,
      "user",
      null,
      null,
      null,
      null,
      null,
      "comp",
      null,
      null,
      null,
      null,
      null,
      "user",
      null,
      null,
      null,
      null,
      null,
      null
    ]);
    expect(result1).toEqual([3]);
    expect(result2).toEqual([8]);
    expect(result3).toEqual([8, 16]);
  });
});
