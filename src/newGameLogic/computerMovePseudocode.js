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
