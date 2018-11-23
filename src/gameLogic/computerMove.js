import compHasCenter from "./compHasCenter";

const calculateCompMove = (board, lines, centerSquareObj, turnNo) => {
  const centerIndex = centerSquareObj.index;
  const centerValue = board[centerIndex];
  if (!centerValue) {
    return centerIndex;
  }
  if (centerValue === "comp") {
    return compHasCenter(board, lines, turnNo);
  } /*else if (centerSquareNo === "user") {
    return userHasCenter();
  }*/
};

export default calculateCompMove;
