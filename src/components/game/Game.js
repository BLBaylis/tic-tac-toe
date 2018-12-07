import React from "react";
import styles from "./Game.module.scss";
import GameSquare from "../gameSquare/GameSquare";
import winCheck, { drawCheck } from "../../gameLogic/gameEndingConditions";
import calculateCompMove from "../../gameLogic/compMoveLogic/calculateCompMove";
import generateAllLines from "../../gameLogic/lineGeneratorFunctions/generateAllLines";
import getCenterSquareIndex from "../../gameLogic/lineGeneratorFunctions/getCenterSquareIndex";
import {
  simulateGame,
  recordGameResults
} from "../../gameLogic/debuggingFunctions/debug";

class Game extends React.Component {
  state = {
    board: Array(this.props.gridSize ** 2).fill(null),
    gameLog: [
      {
        board: Array(this.props.gridSize ** 2).fill(null),
        turnNo: 0,
        userTurn: this.props.firstMove === "user" ? true : false,
        centerIndex: getCenterSquareIndex(this.props.gridSize),
        outcome: undefined
      }
    ],
    turnNo: 0,
    userTurn: this.props.firstMove === "user" ? true : false,
    lines: generateAllLines(this.props.gridSize),
    centerIndex: getCenterSquareIndex(this.props.gridSize),
    outcome: undefined
  };

  handleClick = (squareNo, board) => {
    let promise = new Promise(resolve => {
      this.makeMove(squareNo, board, this.state.turnNo);
      resolve();
    });
    promise.then(() => {
      this.makeMove(
        calculateCompMove(
          this.state.board,
          this.state.centerIndex,
          this.state.lines.allLines,
          this.props.gridSize,
          this.state.turnNo
        ),
        this.state.board,
        this.state.turnNo
      );
    });
  };

  makeMove = (squareNo, board, turnNo, callback) => {
    if (board[squareNo] || this.state.outcome !== undefined) {
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
          centerIndex: prevState.centerIndex,
          outcome: prevState.outcome
        };
        nonGameLogStateChanges.board[squareNo] = prevState.userTurn
          ? "user"
          : "comp";
        return {
          gameLog: prevState.gameLog.concat(nonGameLogStateChanges),
          ...nonGameLogStateChanges
        };
      },
      () => {
        this.gameEndConditionCheck(this.state.board, this.state.turnNo);
        if (callback) {
          callback();
        }
      }
    );
  };

  gameEndConditionCheck = (board, turnNo) => {
    let winChecked;
    if (drawCheck(turnNo, this.props.gridSize)) {
      this.setState({ outcome: "draw" }, () => {
        return;
      });
    }
    winChecked = winCheck(board, this.props.gridSize);
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
      centerIndex: getCenterSquareIndex(this.props.gridSize),
      gameLog: [
        {
          board: Array(this.props.gridSize ** 2).fill(null),
          turnNo: 0,
          userTurn: true,
          centerIndex: getCenterSquareIndex(this.props.gridSize),
          value: null
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
        centerIndex: lastTurnState.centerIndex,
        outcome: lastTurnState.outcome
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
        centerIndex: nextTurnState.centerIndex,
        outcome: nextTurnState.outcome
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

  simulateManyGamesAndRecordResults = (
    amountOfGames,
    gridSize,
    firstMove,
    lines,
    centerIndex
  ) => {
    let result;
    let counters = {
      userCounter: 0,
      compCounter: 0,
      drawCounter: 0,
      noOutcome: 0,
      userWinsLog: [],
      noOutcomeLog: [],
      randomGamesLog: []
    };
    for (let gamesPlayed = 0; gamesPlayed < amountOfGames; gamesPlayed++) {
      result = simulateGame(gridSize, firstMove, lines, centerIndex);
      console.log(`game ${gamesPlayed} finished`);
      counters = recordGameResults(result, counters);
      this.restart();
    }
    console.log(counters);
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
        <button
          className={styles.btn}
          onClick={() =>
            this.simulateManyGamesAndRecordResults(
              10000,
              this.props.gridSize,
              this.props.firstMove,
              this.state.lines,
              this.state.centerIndex
            )
          }
        >
          debug
        </button>
        <h2 className={styles.winner}>outcome: {this.state.outcome}!</h2>
      </React.Fragment>
    );
  }
}

export default Game;
