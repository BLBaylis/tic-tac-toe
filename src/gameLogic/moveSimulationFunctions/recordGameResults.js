export default (result, counters) => {
  let gameLog;
  if (Math.random() * 10000 > 9990) {
    gameLog = makeGameLogEasierToRead(result.gameLog);
    counters.randomGamesLog.push(gameLog);
  }
  if (result.outcome === "user") {
    counters.userCounter++;
    gameLog = makeGameLogEasierToRead(result.gameLog);
    counters.userWinsLog.push(gameLog);
  } else if (result.outcome === "comp") {
    counters.compCounter++;
  } else if (result.outcome === "draw") {
    counters.drawCounter++;
  } else {
    counters.noOutcome++;
    gameLog = makeGameLogEasierToRead(result.gameLog);
    counters.noOutcomeLog.push(gameLog);
  }
  return counters;
};

const makeGameLogEasierToRead = gameLog => {
  return gameLog.slice().reduce((total, curr) => {
    curr.board.map((x, index) => {
      if (x !== null && !total.includes(index)) {
        total.push(index);
      }
      return x;
    });
    return total;
  }, []);
};
