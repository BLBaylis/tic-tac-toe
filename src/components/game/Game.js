import React from "react";
import styles from "./Game.module.scss";
import GameSquare from "../gameSquare/GameSquare";
import winCheck from "../../gameLogic";

class Game extends React.Component {
  state = {
    board: Array(9).fill(null),
    gameLog: [{ board: Array(9).fill(null), turnNo: 0, userTurn: true }],
    turnNo: 0,
    userTurn: true
  };

  handleClick = (squareNo, board) => {
    if (board[squareNo] || winCheck(squareNo, board)) {
      return;
    }
    this.setState(prevState => {
      const boardClone = prevState.board.slice();
      if (prevState.gameLog[prevState.turnNo + 1]) {
        prevState.gameLog = prevState.gameLog.slice(0, prevState.turnNo + 1);
      }
      const nonGameLogStateChanges = {
        board: boardClone,
        turnNo: prevState.turnNo + 1,
        userTurn: !prevState.userTurn
      };
      nonGameLogStateChanges.board[squareNo] = prevState.userTurn
        ? "user"
        : "comp";
      return {
        gameLog: prevState.gameLog.concat(nonGameLogStateChanges),
        ...nonGameLogStateChanges
      };
    });
  };

  restart = () => {
    this.setState({
      board: Array(9).fill(null),
      turnNo: 0,
      userTurn: true,
      gameLog: [{ board: Array(9).fill(null), turnNo: 0, userTurn: true }]
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
      };
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
      };
    });
  };

  generateSquares = quantity => {
    const arr = Array(quantity).fill();
    const board = this.state.board;
    return arr.map((x, index) => (
      <GameSquare
        key={index}
        value={board[index]}
        onClick={() => this.handleClick(index, board)}
      />
    ));
  };

  render() {
    const gridClassname = styles[`grid-${this.props.gridSize}`];
    return (
      <React.Fragment>
        <div className={gridClassname}>{this.generateSquares(this.props.gridSize**2)}</div>
        <button className = {styles.btn} onClick={this.restart}>restart</button>
        <button className = {styles.btn} onClick={this.undoTurn}>undo</button>
        <button className = {styles.btn} onClick={this.redoTurn}>redo</button>
      </React.Fragment>
    );
  }
}

export default Game;
