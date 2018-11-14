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
    if (this.winCheck(board) || board[squareNo]) {
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

  winCheck = gameBoard => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 7]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return lines[i];
      }
    }
    return false;
  };

  restart = () => {
    this.setState({
      board: [Array(9).fill(null)],
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

  render() {
    const board = this.state.board;
    return (
      <div className={styles.game}>
        <div className={styles.grid}>
          <GameSquare
            value={board[0]}
            onClick={() => this.handleClick(0, board)}
          />
          <GameSquare
            value={board[1]}
            onClick={() => this.handleClick(1, board)}
          />
          <GameSquare
            value={board[2]}
            onClick={() => this.handleClick(2, board)}
          />
          <GameSquare
            value={board[3]}
            onClick={() => this.handleClick(3, board)}
          />
          <GameSquare
            value={board[4]}
            onClick={() => this.handleClick(4, board)}
          />
          <GameSquare
            value={board[5]}
            onClick={() => this.handleClick(5, board)}
          />
          <GameSquare
            value={board[6]}
            onClick={() => this.handleClick(6, board)}
          />
          <GameSquare
            value={board[7]}
            onClick={() => this.handleClick(7, board)}
          />
          <GameSquare
            value={board[8]}
            onClick={() => this.handleClick(8, board)}
          />
        </div>
        <button onClick={this.restart}>restart</button>
        <button onClick={this.undoTurn}>undo</button>
        <button onClick={this.redoTurn}>redo</button>
      </div>
    );
  }
}

export default Game;
