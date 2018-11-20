import React from "react";
import styles from "./Game.module.scss";
import GameSquare from "../gameSquare/GameSquare";
import winCheck from "../../gameLogic/winCheck";
import computerMove from "../../gameLogic/computerMove";
import generateAllLines from "../../gameLogic/generateAllLines";
import getCenterSquareIndex from "../../gameLogic/getCenterSquareIndex";

class Game extends React.Component {
  state = {
    board: Array(this.props.gridSize ** 2).fill(null),
    gameLog: [
      {
        board: Array(this.props.gridSize ** 2).fill(null),
        turnNo: 0,
        userTurn: this.props.firstMove === "user" ? true : false,
        center: {
          index: getCenterSquareIndex(this.props.gridSize),
          value: null
        }
      }
    ],
    turnNo: 0,
    userTurn: this.props.firstMove === "user" ? true : false,
    lines: generateAllLines(this.props.gridSize),
    center: {
      index: getCenterSquareIndex(this.props.gridSize),
      value: null
    }
  };

  handleClick = (squareNo, board) => {
    this.makeMove(squareNo, board, () =>
      this.makeMove(
        computerMove(board, this.state.lines, this.state.center),
        board,
        () => console.log(this.state)
      )
    );
  };

  makeMove = (squareNo, board, callback) => {
    if (board[squareNo] || winCheck(squareNo, board, this.props.gridSize)) {
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
        userTurn: !prevState.userTurn,
        center: prevState.center
      };
      nonGameLogStateChanges.board[squareNo] = prevState.userTurn
        ? "user"
        : "comp";
      if (squareNo === nonGameLogStateChanges.center.index) {
        nonGameLogStateChanges.center.value =
          nonGameLogStateChanges.board[squareNo];
      }
      return {
        gameLog: prevState.gameLog.concat(nonGameLogStateChanges),
        ...nonGameLogStateChanges
      };
    }, callback);
  };

  restart = () => {
    this.setState({
      board: Array(this.props.gridSize ** 2).fill(null),
      turnNo: 0,
      userTurn: this.props.firstMove === "user" ? true : false,
      center: {
        index: getCenterSquareIndex(this.props.gridSize),
        value: null
      },
      gameLog: [
        {
          board: Array(9).fill(null),
          turnNo: 0,
          userTurn: true,
          center: {
            index: getCenterSquareIndex(this.props.gridSize),
            value: null
          }
        }
      ]
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
        userTurn: lastTurnState.userTurn,
        center: lastTurnState.center
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
        userTurn: nextTurnState.userTurn,
        center: nextTurnState.center
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
        <div className={gridClassname}>
          {this.generateSquares(this.props.gridSize ** 2)}
        </div>
        <button className={styles.btn} onClick={this.restart}>
          restart
        </button>
        <button className={styles.btn} onClick={this.undoTurn}>
          undo
        </button>
        <button className={styles.btn} onClick={this.redoTurn}>
          redo
        </button>
      </React.Fragment>
    );
  }
}

export default Game;
