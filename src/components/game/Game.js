import React from "react";
import styles from "./Game.module.scss";
import GameSquare from "../gameSquare/GameSquare";

class Game extends React.Component {
  state = {
    gameLog: [Array(9).fill(null)],
    turnNo: 0,
    userTurn: true
  };

  handleClick = gridNo => {
    const gameLog = this.state.gameLog.slice();
    const currentTurn = gameLog[gameLog.length - 1].slice();
    if (this.winCheck(currentTurn) || currentTurn[gridNo]) {
      return;
    }
    currentTurn[gridNo] = this.state.userTurn ? "user" : "comp";
    this.setState(
      prevState => ({
        gameLog: prevState.gameLog.concat([currentTurn]),
        turnNo: prevState.turnNo + 1,
        userTurn: !prevState.userTurn
      })
    );
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
      gameLog: [Array(9).fill(null)],
      turnNo: 0,
      userTurn: true
    });
  };

  undoTurn = () => {
    this.setState(
      prevState => ({
        gameLog: prevState.gameLog.slice(0, prevState.gameLog.length - 1),
        turnNo: prevState.turnNo - 1,
        userTurn: !prevState.userTurn
      })
    );
  };

  render() {
    const currentTurn = this.state.gameLog[this.state.gameLog.length - 1];
    return (
      <div className={styles.game}>
        <div className={styles.grid}>
          <GameSquare value = {currentTurn[0]} onClick={() => this.handleClick(0)} />
          <GameSquare value = {currentTurn[1]} onClick={() => this.handleClick(1)} />
          <GameSquare value = {currentTurn[2]} onClick={() => this.handleClick(2)} />
          <GameSquare value = {currentTurn[3]} onClick={() => this.handleClick(3)} />
          <GameSquare value = {currentTurn[4]} onClick={() => this.handleClick(4)} />
          <GameSquare value = {currentTurn[5]} onClick={() => this.handleClick(5)} />
          <GameSquare value = {currentTurn[6]} onClick={() => this.handleClick(6)} />
          <GameSquare value = {currentTurn[7]} onClick={() => this.handleClick(7)} />
          <GameSquare value = {currentTurn[8]} onClick={() => this.handleClick(8)} />
        </div>
        <button onClick={this.restart}>restart</button>
        <button onClick={this.undoTurn}>undo</button>
      </div>
    );
  }
}

export default Game;
