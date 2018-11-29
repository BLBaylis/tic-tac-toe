import React from "react";
import styles from "./Game.module.scss";
import GameSquare from "../gameSquare/GameSquare";
import winCheck, { drawCheck } from "../../gameLogic/gameEndingConditions";
import calculateCompMove from "../../newGameLogic/calculateCompMove";
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
    },
    winner: undefined
  };

  handleClick = (squareNo, board) => {
    let promise = new Promise((resolve, reject) => {
      this.makeMove(squareNo, board, this.state.turnNo);
      resolve();
    });
    promise.then(() => {
      this.makeMove(
        calculateCompMove(
          this.state.board,
          this.state.center.index,
          this.state.lines.allLines,
          this.props.gridSize
        ),
        this.state.board,
        this.state.turnNo
      );
    });
  };

  makeMove = (squareNo, board, turnNo, callback) => {
    if (board[squareNo] || winCheck(squareNo, board, this.props.gridSize)) {
      return;
    }
    this.setState(
      prevState => {
        const boardClone = prevState.board.slice();
        if (prevState.gameLog[prevState.turnNo + 1]) {
          prevState.gameLog = prevState.gameLog.slice(0, prevState.turnNo + 1);
        }
        const nonGameLogStateChanges = {
          board: boardClone,
          turnNo: prevState.turnNo + 1,
          userTurn: !prevState.userTurn,
          center: prevState.center,
          outcome: prevState.outcome
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
      },
      () => {
        this.postMoveEndConditionCheck(
          squareNo,
          this.state.board,
          this.state.turnNo
        );
        if (callback) {
          callback();
        }
      }
    );
  };

  postMoveEndConditionCheck = (squareNo, board, turnNo) => {
    let winChecked;
    if (drawCheck(turnNo, this.props.gridSize)) {
      this.setState({ outcome: "draw" }, () => {
        return;
      });
    }
    winChecked = winCheck(squareNo, board, this.props.gridSize);
    if (winChecked) {
      this.setState({ outcome: winChecked }, () => {
        return;
      });
    }
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
          },
          outcome: undefined
        }
      ],
      outcome: undefined
    });
  };

  undoTurn = () => {
    this.setState(prevState => {
      const lastTurnState = prevState.gameLog[prevState.turnNo - 2];
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
      const nextTurnState = prevState.gameLog[prevState.turnNo + 2];
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

  randomMove = () => {
    const possibleSquares = Array(this.props.gridSize ** 2)
      .fill(null)
      .map((x, index) => index)
      .filter((x, index) => this.state.board[x] === null);
    if (!possibleSquares.length) {
      return;
    }
    let random = Math.floor(Math.random() * possibleSquares.length);
    return possibleSquares[random];
  };

  debug = async amount => {
    let randomMoves = () => {
      this.handleClick(this.randomMove(), this.state.board);
      if (this.state.outcome !== undefined) {
        return this.state.outcome;
      }
    };
    let userCounter = 0;
    let compCounter = 0;
    let drawCounter = 0;
    for (let i = 0; i < amount; i++) {
      let promise = new Promise((resolve, reject) => {
        this.handleClick(1, this.state.board);
        resolve();
      });
      let outcome = promise
        .then(randomMoves)
        .then(randomMoves)
        .then(randomMoves)
        .then(randomMoves);
      await outcome.then(result => {
        if (result === "user") {
          userCounter++;
          console.log(this.state.gameLog);
        } else if (result === "comp") {
          compCounter++;
        } else if (result === "draw") {
          drawCounter++;
        } else {
          console.log("no outcome");
          console.log(this.state.gameLog);
        }
        this.restart();
        console.log(
          `user : ${userCounter}`,
          `draw : ${drawCounter}`,
          `comp : ${compCounter}`
        );
      });
    }
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
        <button className={styles.btn} onClick={() => this.debug(1000)}>
          debug
        </button>
        <h2>outcome: {this.state.outcome}!</h2>
      </React.Fragment>
    );
  }
}

export default Game;
