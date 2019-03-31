import { countOccurancesOfSquareValueInArr } from "../../../helperFunctions/helperFunctions";

const determineWhichPlayerHasTempo = (
  bestCompLines,
  bestUserLines,
  gameBoard
) => {
  const compLineLengths = bestCompLines.map(line =>
    countOccurancesOfSquareValueInArr(line, "comp", gameBoard)
  );
  const bestCompLineLength = Math.max(...compLineLengths);
  const userLineLengths = bestUserLines.map(line =>
    countOccurancesOfSquareValueInArr(line, "user", gameBoard)
  );
  const bestUserLineLength = Math.max(...userLineLengths);
  return bestCompLineLength >= bestUserLineLength ? "comp" : "user";
};

export default determineWhichPlayerHasTempo;
