import generateAllLines from './generateAllLines';
import findAllLinesWithXNumberOfSquareType from './findAllLinesWithXNumberOfSquareType'

const compHasCenter = (board, center) => {
    const compLinesLength2 = findAllLinesWithXNumberOfSquareType(board, 2, "comp");
    const userLinesLength2 = findAllLinesWithXNumberOfSquareType(board, 2, "user"); 
    const center = "user";// or "comp" or "null"
    if (compLinesLength2.length){
      compLinesLength2.filter(x => isOtherSpaceEmpty(x));
      chooseRandomSquare();
    } else if (userLinesLength2.length){
      userLinesLength2.filter(x => isOtherSpaceEmpty(x));
      center === "user" ? chooseRandomCorner() : chooseRandomMiddleEdge();
    }
}