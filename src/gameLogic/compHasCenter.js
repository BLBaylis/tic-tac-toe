const compHasCenter = () => {
    if (checkForLinesOfLength2() === true){
        if (lineOfLength2 === "comp"){
            computerLineLength2();
        } else if (lineOfLength2 === "user") {
            userLineLength2();
        }
    }
}

const checkForLinesOfLength2(board) => {

}

const computerLineLength2 = () => {
    if (otherSpaceIsEmpty() === true) {
        //computer takes empty space and wins
    } else {
        chooseRandomCorner();
    }
}

const userLineLength2 = () => {
    if (otherSpaceIsEmpty() === true){
        //computer block it
    } else if (lineOfLength2 === "diag") {
        if (checkCenter() === "user") {
            //computer takes a random corner
        } else if (checkCenter() === "comp"){
            //computer takes a random middle edge
        }
    }
}