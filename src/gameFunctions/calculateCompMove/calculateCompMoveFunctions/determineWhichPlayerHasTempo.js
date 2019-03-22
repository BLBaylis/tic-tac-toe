import { countSquaresInLine } from "../../helperFunctions/helperFunctions";

const determineWhichPlayerHasTempo = (
  bestCompLines,
  bestUserLines,
  gameBoard
) => {
  const compLineLengths = bestCompLines.map(line =>
    countSquaresInLine(line, "comp", gameBoard)
  );
  const bestCompLineLength = Math.max(...compLineLengths);
  const userLineLengths = bestUserLines.map(line =>
    countSquaresInLine(line, "user", gameBoard)
  );
  const bestUserLineLength = Math.max(...userLineLengths);
  const tempoPlayerLines =
    bestCompLineLength >= bestUserLineLength ? bestCompLines : bestUserLines;
  const nonTempoPlayerLines =
    tempoPlayerLines === bestCompLines ? bestUserLines : bestCompLines;
  return { tempoPlayerLines, nonTempoPlayerLines };
};

export default determineWhichPlayerHasTempo;
