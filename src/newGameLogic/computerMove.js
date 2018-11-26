const computerMove = () => {
  if (takeCenter() === true) {
    //CENTER IS TAKEN
    return;
  } else if (finishCompLineLength2() === true) {
    //RESULTS IN A COMPUTER FINSIHING A LINE OF LENGTH 3 AND COMP WINS!
    return;
  } else if (blockUserLineLength2() === true) {
    //RESULTS IN A COMPUTER FINISHING A LINE OF LENGTH 3 AND COMP WINS!
    return;
  } else if (
    makeWinnableCompLineLength2WhileBlockingAsManyWinnableUserLinesAsPossible() ===
    true
  ) {
    //COMP MADE A LINE OF LENGTH 2 THAT CAN WIN IN FUTURE, WHILE BLOCKING AS MANY WINNABLE USER LINES AS POSSIBLE
    return;
  } else if (startALine() === true) {
    //IF YOU GET THIS FAR DOWN THE LIST IT BOILS DOWN TO MAKEING A MOVE ANYWHERE
    return;
  } else {
    //THERE ARE NO POSSIBLE MOVES SO THE GAME IS ALREADY OVER
    return;
  }
};

const takeCenter = () => {
  if (CenterSquareIsTaken) {
    return;
  } else {
    takeCenterSquare();
  }
};

const finishCompLineLength2 = () => {
  const winnableCompLinesLength2 = findAllWinnableCompLinesLength2();
  const viableSquares = findAllUntakenSquares(choiceOfWinningLinesWithLength2);
  return chooseRandom(viableSquares);
};

const blockUserLineLength2 = () => {
  const winnableUserLinesLength2 = findAllWinnableUserLinesLength2();
  const viableSquares = findAllUntakenSquares(choiceOfWinningLinesWithLength2);
  return chooseRandom(viableSquares);
};

const makeWinnableCompLineLength2WhileBlockingAsManyWinnableUserLinesAsPossible = () => {
  const winnableCompLinesLength1 = findAllCompLinesLength1();
  const setOfMostDisruptiveMovesAgainstUser = findSetOfMostDisruptiveMovesAgainstUser9(
    winnableCompLinesLength1
  );
  if (setOfMostDisruptiveMovesAgainstUser.length) {
    return chooseRandom(setOfMostDisruptiveMovesAgainstUser);
  }
};

const findMostDisruptiveMoveAgainstUser = () => {
  const winnableUserLinesLength1 = findAllWinnableUserLinesLength1();
  const untakenSquaresThatHaveWinnableUserLinesOfLength1 = findAllUntakenSquares(
    winnableUserLinesLength1
  );
  const allWinnableUserLinesLength1ThatShareAnUntakenSquare = findAllWinnableLinesThatShareASquare(
    winnableUserLinesLength1
  );
  return findElementsWithHighestLength(
    allWinnableUserLinesLength1ThatShareAnUntakenSquare
  );
};
