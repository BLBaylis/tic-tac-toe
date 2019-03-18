import { countSquaresInLine } from "../../helperFunctions";

const determineWhichPlayerHasTempo = (bestCompLines, bestUserLines, board) => {
  const compLineLengths = bestCompLines.map(line =>
    countSquaresInLine(line, "comp", board)
  );
  const bestCompLineLength = Math.max(...compLineLengths);
  const userLineLengths = bestCompLines.map(line =>
    countSquaresInLine(line, "user", board)
  );
  const bestUserLineLength = Math.max(...userLineLengths);
  const tempoPlayerLines =
    bestCompLineLength >= bestUserLineLength ? bestCompLines : bestUserLines;
  const nonTempoPlayerLines =
    tempoPlayerLines === bestCompLines ? bestUserLines : bestCompLines;
  return { tempoPlayerLines, nonTempoPlayerLines };
};

export default determineWhichPlayerHasTempo;
