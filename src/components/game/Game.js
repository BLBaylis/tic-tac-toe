import React from "react";
import styles from "./Game.module.scss";
import GameSquare from "../gameSquare/GameSquare";

class Game extends React.Component {
  state = {
    board: Array(9).fill(null),
    gameLog: [{board: Array(9).fill(null), turnNo : 0, userTurn: true}],
    turnNo: 0,
    userTurn: true
  };

  handleClick = (squareNo, board) => {   
    if (board[squareNo] || this.winCheck(squareNo, board)) {
      return;
    }
    this.setState(prevState => {
      const boardClone = prevState.board.slice();
      if (prevState.gameLog[prevState.turnNo + 1]){
        prevState.gameLog = prevState.gameLog.slice(0, prevState.turnNo + 1);
      }
      const nonGameLogStateChanges = {
        board : boardClone,
        turnNo : prevState.turnNo + 1,
        userTurn : !(prevState.userTurn)
      };
      nonGameLogStateChanges.board[squareNo] = prevState.userTurn ? "user" : "comp";
      return {gameLog : prevState.gameLog.concat(nonGameLogStateChanges), ...nonGameLogStateChanges};
    });
  };

  winCheck = (squareNumber, gameBoard, lineLength = 3) => {

    const horizontalLineChecker = (squareNumber, gameBoard, lineLength = 3) => {
      const rowNum = Math.floor(squareNumber / lineLength);
      const arr = Array(lineLength).fill().map((x, index) => index + (rowNum * 3));
      return arr.every(x => gameBoard[x] === gameBoard[rowNum * lineLength] && gameBoard[x]);
    };

    const verticalLineChecker = (squareNumber, gameBoard, lineLength = 3) => {
      const colNum = squareNumber % lineLength;
      const arr = Array(lineLength).fill().map((x, index) => (index * lineLength) + colNum);
      return arr.every(x => gameBoard[x] === gameBoard[colNum] && gameBoard[x]);
    };

    const diagonalLineChecker = (gameBoard, lineLength = 3) => {
      const diag1 = Array(lineLength).fill().map((x, index) => (index * lineLength) + index);
      const diag2 = Array(lineLength).fill().map((x, index) => ((index + 1) * lineLength) - (index + 1));
      return [diag1, diag2].some(x => x.every(x => gameBoard[x] === gameBoard[4] && gameBoard[x]));
    };

    if (lineLength % 2 === 0 || lineLength < 3) {
        throw new Error("LineLength needs to be an odd number bigger than 3");
    }
    const n = ((lineLength - 1) / 2);
    const center = (lineLength * n) + n;
    if (horizontalLineChecker(center, gameBoard, lineLength) || verticalLineChecker(center, gameBoard, lineLength) || diagonalLineChecker(gameBoard, lineLength)) {
        return true;
    }
    if (horizontalLineChecker(0, gameBoard, lineLength) || verticalLineChecker(0, gameBoard, lineLength)) {
        return true;
    }
    if (horizontalLineChecker(gameBoard.length - 1, gameBoard, lineLength) || verticalLineChecker(gameBoard.length - 1, gameBoard, lineLength)) {
        return true;
    }
    return false;

  };

  restart = () => {
    this.setState({
      board: Array(9).fill(null),
      turnNo: 0,
      userTurn: true,
      gameLog: [{board: Array(9).fill(null), turnNo : 0, userTurn: true}]
    });
  };

  undoTurn = () => {
    this.setState(prevState => {
      const lastTurnState = prevState.gameLog[prevState.turnNo - 1];
      if (!lastTurnState) {
        return;
    }
      return {
        board: lastTurnState.board,
        turnNo: lastTurnState.turnNo,
        userTurn: lastTurnState.userTurn
      }
    });
  };

  redoTurn = () => {
    this.setState(prevState => {
      const nextTurnState = prevState.gameLog[prevState.turnNo + 1];
      if (!nextTurnState) {
        return;
    }
      return {
        board: nextTurnState.board,
        turnNo: nextTurnState.turnNo,
        userTurn: nextTurnState.userTurn
      }
    });
  };

  generateSquares = quantity => {
    const arr = Array(quantity).fill();
    const board = this.state.board;
    return arr.map((x, index) => <GameSquare key = {index} value = {board[index]} onClick={() => this.handleClick(index, board)}/>);
  }

  render() {
    return (
      <div className={styles.game}>
        <div className={styles.grid}>
          {this.generateSquares(9)}
        </div>
        <button onClick={this.restart}>restart</button>
        <button onClick={this.undoTurn}>undo</button>
        <button onClick={this.redoTurn}>redo</button>
      </div>
    );
  }
}

export default Game;
