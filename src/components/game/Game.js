import React from "react";
import styles from "./Game.module.scss";
import GameSquare from "../gameSquare/GameSquare";
import Flipper from "../flipper/Flipper";
import Settings from "../settings/Settings";
import Grid from "../grid/Grid";
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
    board: Array(3 ** 2).fill(null),
    gameLog: [
      {
        board: Array(3 ** 2).fill(null),
        turnNo: 0,
        userTurn: true,
        outcome: undefined
      }
    ],
    turnNo: 0,
    userTurn: true,
    outcome: undefined,
    gridSize: 3,
    firstMove: "user",
    gameFlipped: false
  };

  flip = () => {
    this.setState(prevState => ({ gameFlipped: !prevState.gameFlipped }));
  };

  changeSetting = (settingType, newSetting) => {
    const obj = {};
    obj[settingType] = newSetting;
    this.setState(obj, this.restart);
  };

  handleClick = (squareNo, centerIndex, lines) => {
    let promise = new Promise(resolve => {
      this.makeMove(squareNo, this.state.board, this.state.turnNo);
      resolve();
    });
    promise.then(() => {
      this.makeMove(
        calculateCompMove(
          this.state.board,
          centerIndex,
          lines.allLines,
          this.state.gridSize,
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
    if (drawCheck(turnNo, this.state.gridSize)) {
      this.setState({ outcome: "draw" }, () => {
        return;
      });
    }
    winChecked = winCheck(board, this.state.gridSize);
    if (winChecked) {
      this.setState({ outcome: winChecked }, () => {
        return;
      });
    }
  };

  restart = () => {
    const centerIndex = getCenterSquareIndex(this.state.gridSize);
    const lines = generateAllLines(this.state.gridSize);
    this.setState(
      {
        board: Array(this.state.gridSize ** 2).fill(null),
        turnNo: 0,
        userTurn: this.state.firstMove === "user" ? true : false,
        gameLog: [
          {
            board: Array(this.state.gridSize ** 2).fill(null),
            turnNo: 0,
            userTurn: this.state.firstMove === "user" ? true : false
          }
        ],
        outcome: undefined
      },
      () => {
        if (this.state.firstMove === "comp") {
          this.makeMove(
            calculateCompMove(
              this.state.board,
              centerIndex,
              lines.allLines,
              this.state.gridSize,
              this.state.turnNo
            ),
            this.state.board,
            this.state.turnNo
          );
        }
      }
    );
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
        outcome: nextTurnState.outcome
      };
    });
  };

  generateSquares = quantity => {
    const board = this.state.board;
    const centerIndex = getCenterSquareIndex(this.state.gridSize);
    const lines = generateAllLines(this.state.gridSize);
    return Array(quantity)
      .fill()
      .map((x, index) => (
        <GameSquare
          key={index}
          value={board[index]}
          onClick={() => this.handleClick(index, centerIndex, lines)}
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
    const centerIndex = getCenterSquareIndex(this.state.gridSize);
    const lines = generateAllLines(this.state.gridSize);
    return (
      <React.Fragment>
        <Flipper
          flip={this.flip}
          gameFlipped={this.state.gameFlipped}
          front={
            <Grid
              gridSize={this.state.gridSize}
              generateSquares={this.generateSquares}
            />
          }
          back={<Settings onClick={this.changeSetting} />}
        />
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
              this.state.gridSize,
              this.state.firstMove,
              lines,
              centerIndex
            )
          }
        >
          debug
        </button>
        <button className={styles.btn} onClick={this.flip}>
          settings
        </button>
        <h2 className={styles.winner}>outcome: {this.state.outcome}!</h2>
      </React.Fragment>
    );
  }
}

export default Game;
