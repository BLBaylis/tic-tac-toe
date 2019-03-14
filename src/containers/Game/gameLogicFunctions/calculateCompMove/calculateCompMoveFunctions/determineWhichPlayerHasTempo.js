import getBestLineLength from "./getBestLineLength";

const determineWhichPlayerHasTempo = (bestCompLines, bestUserLines, board) => {
  const bestCompLineLength = getBestLineLength(bestCompLines, "comp", board);
  const bestUserLineLength = getBestLineLength(bestUserLines, "user", board);
  const tempoPlayerLines =
    bestCompLineLength >= bestUserLineLength ? bestCompLines : bestUserLines;
  const nonTempoPlayerLines =
    tempoPlayerLines === bestCompLines ? bestUserLines : bestCompLines;
  return { tempoPlayerLines, nonTempoPlayerLines };
};

export default determineWhichPlayerHasTempo;
