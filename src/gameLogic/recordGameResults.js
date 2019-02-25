export default (result, counters) => {
  let { gameLog, outcome } = result;
  let { userWinsLog, noOutcomeLog, randomGamesLog } = counters;
  if (Math.random() * 10000 > 9990) {
    gameLog = makeGameLogEasierToRead(result.gameLog);
    randomGamesLog.push(gameLog);
  }
  if (outcome === "user") {
    counters.userCounter++;
    gameLog = makeGameLogEasierToRead(gameLog);
    userWinsLog.push(gameLog);
  } else if (outcome === "comp") {
    counters.compCounter++;
  } else if (outcome === "draw") {
    counters.drawCounter++;
  } else {
    counters.noOutcome++;
    gameLog = makeGameLogEasierToRead(gameLog);
    noOutcomeLog.push(gameLog);
  }
  return counters;
};

const makeGameLogEasierToRead = gameLog => {
  if (gameLog.board === undefined) {
  }
  return gameLog.reduce((total, curr) => {
    curr.board.map((x, index) => {
      if (x !== null && !total.includes(index)) {
        total.push(index);
      }
      return x;
    });
    return total;
  }, []);
};
