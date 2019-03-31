import getGameResult from "./getGameResult";

describe("getGameResult", () => {
  test("detect win", () => {
    expect(
      getGameResult(
        ["user", "user", "user", null, null, null, null, null, null],
        3,
        3
      )
    ).toBe("user");
  });

  test("detect draw", () => {
    expect(
      getGameResult(
        [null, null, null, null, null, null, null, null, null],
        3,
        9
      )
    ).toBe("draw");
    expect(
      getGameResult(
        [null, null, null, null, null, null, null, null, null],
        3,
        11
      )
    ).toBe("draw");
  });

  test("detect no outcome", () => {
    expect(
      getGameResult(
        [null, null, null, null, null, null, null, null, null],
        3,
        8
      )
    ).toBe(null);
  });
});
