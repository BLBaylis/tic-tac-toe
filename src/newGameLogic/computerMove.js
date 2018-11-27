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
    return chooseRandom(board);
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
  const winnableCompLinesLength1 = findAllWinnableCompLinesLength1();
  const viableSquares = findAllUntakenSquares(winnableCompLinesLength1);
  const winnableUserLinesOfLength1DisruptedByASharedSquareBeingTaken = getWinnableUserLiensLength1SortedBySharedSquareUntakenSquare();
  const setOfMostDisruptiveMovesAgainstUser = findSetOfMostDisruptiveMovesAgainstUser(winnableUserLinesOfLength1DisruptedByASharedSquareBeingTaken, viableSquares);
  return chooseRandom(setOfMostDisruptiveMovesAgainstUser);
};

const getWinnableUserLiensLength1SortedBySharedSquareUntakenSquare = () => {
  const winnableUserLinesLength1 = findAllWinnableUserLinesLength1();
  const untakenSquaresThatHaveWinnableUserLinesOfLength1 = findAllUntakenSquares(
    winnableUserLinesLength1
  );
  return groupLinesBySharedSquare(untakenSquaresThatHaveWinnableUserLinesOfLength1);
  //THIS SHOULD RETURN AN ARRAY WITH ELEMENTS OF THE FORM OF THE FORM {squareIndex : n, lines : []};
}

const findSetOfMostDisruptiveMovesAgainstUser = (arr, compSquares) => {
  const arrClone = arr.slice();
  const compSquareObjs = arrClone.filter(x => compSquares.contains(x.squareIndex));
  if (!compSquareObjs.length) {
    return false;
  }
  return getObjectsWithHighestNoOfLines(compSquareObjs, 3).map(x => x.squareIndex);
}

const getObjectsWithHighestNoOfLines = (arr, length) => {
  let result = [];
  const arrClone = arr.slice();
  while (length > 0 && result.length < 1) {
    result = filterByNoOfLines(arrClone, length);
    length--;
  }
  if (result.length > 1){
    return result;
  } else {
    return false;
  }
}

const filterByNoOfLines = (arr, length) => {
  const arrClone = arr.slice();
  return arrClone.filter(x => x.lines.length === length);
}






















const findSetOfMostDisruptiveMoveAgainstUser = () => {
  const allWinnableUserLinesLength1ThatShareAnUntakenSquare = findAllWinnableLinesThatShareASquare(
    winnableUserLinesLength1
  );
  return findElementsWithHighestLength(
    allWinnableUserLinesLength1ThatShareAnUntakenSquare
  );
};