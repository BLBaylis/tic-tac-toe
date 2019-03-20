import generateAllIndexLines from "./generateAllIndexLines";
import { toIncludeAllMembers } from "jest-extended";

describe("generateAllIndexLines", () => {
  test("all lines for gridsize 3 correct", () => {
    expect(generateAllIndexLines(3).sort()).toIncludeAllMembers([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]);
  });
});

test("all lines for gridsize 5 correct", () => {
  expect(generateAllIndexLines(5).sort()).toIncludeAllMembers([
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
  ]);
});

test("all lines for gridsize 7 correct", () => {
  expect(generateAllIndexLines(7).sort()).toIncludeAllMembers([
    [0, 7, 14, 21, 28, 35, 42],
    [1, 8, 15, 22, 29, 36, 43],
    [2, 9, 16, 23, 30, 37, 44],
    [3, 10, 17, 24, 31, 38, 45],
    [4, 11, 18, 25, 32, 39, 46],
    [5, 12, 19, 26, 33, 40, 47],
    [6, 13, 20, 27, 34, 41, 48],
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41],
    [42, 43, 44, 45, 46, 47, 48],
    [0, 8, 16, 24, 32, 40, 48],
    [6, 12, 18, 24, 30, 36, 42]
  ]);
});
