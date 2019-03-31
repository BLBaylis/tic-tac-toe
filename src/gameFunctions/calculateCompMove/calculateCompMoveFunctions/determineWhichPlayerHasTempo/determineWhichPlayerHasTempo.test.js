import determineWhichPlayerHasTempo from "./determineWhichPlayerHasTempo";

test("determineWhichPlayerHasTempo", () => {
  expect(
    determineWhichPlayerHasTempo(
      [[0, 1], [2, 3], [0, 2], [1, 3], [0, 3], [1, 2]],
      [[2, 3], [1, 3], [1, 2]],
      ["user", null, null, null]
    )
  ).toBe("comp");
});
