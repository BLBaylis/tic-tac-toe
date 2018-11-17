import compHasCenter from './compHasCenter';

const calculateCompMove = (centerSquareNo) => {
    let result;
    if (centerSquareNo === "empty") {
        //computer takes center
    }
    if (centerSquareNo === "comp") {
        compHasCenter();
    } else if (centerSquareNo === "user") {
        userHasCenter();
    }
    return result; //should be a squareNo
}

export default calculateCompMove;