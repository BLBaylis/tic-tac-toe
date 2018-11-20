import compHasCenter from "./compHasCenter";

const calculateCompMove = (board, line, centerSquareObj) => {
  const centerIndex = centerSquareObj.index;
  const centerValue = board[centerIndex];
  if (!centerValue) {
    return centerIndex;
  }
  if (centerValue === "comp") {
    return compHasCenter();
  } /*else if (centerSquareNo === "user") {
    return userHasCenter();
  }*/
};

export default calculateCompMove;
