import compHasCenter from "./compHasCenter";

const calculateCompMove = centerSquareNo => {
  if (!centerSquareNo) {
    //computer takes center
  }
  if (centerSquareNo === "comp") {
    return compHasCenter();
  } /*else if (centerSquareNo === "user") {
    return userHasCenter();
  }*/
};

export default calculateCompMove;
