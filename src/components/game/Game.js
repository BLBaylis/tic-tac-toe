import React from "react";
import styles from "./Game.module.scss";
import Flipper from "../flipper/Flipper";
import Settings from "../settings/Settings";
import Grid from "../grid/Grid";
import GameSquare from "../gameSquare/GameSquare";
import transformStateObj from "../../gameLogic/moveSimulationFunctions/transformStateObj";
import {
  simulateGame,
  simulateCompMove
} from "../../gameLogic/moveSimulationFunctions/simulateGame";
import recordGameResults from "../../gameLogic/moveSimulationFunctions/recordGameResults";

class Game extends React.Component {
  state = {
    board: Array(9).fill(null),
    gameLog: [
      {
        board: Array(9).fill(null),
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

  handleClick = (squareNo, argsFromState) => {
    if (argsFromState.board[squareNo] !== null) {
      return;
    }
    let updatedState = transformStateObj(squareNo, argsFromState);
    if (updatedState.outcome === undefined) {
      updatedState = simulateCompMove(updatedState);
    }
    this.setState(updatedState);
  };

  restart = (firstMove, gridSize) => {
    let updatedState;
    let initialState = {
      board: Array(gridSize ** 2).fill(null),
      turnNo: 0,
      userTurn: firstMove === "user" ? true : false,
      gameLog: [
        {
          board: Array(gridSize ** 2).fill(null),
          turnNo: 0,
          userTurn: firstMove === "user" ? true : false,
          outcome: undefined
        }
      ],
      outcome: undefined,
      gridSize: gridSize
    };
    if (firstMove === "comp") {
      updatedState = simulateCompMove(initialState);
      this.setState(updatedState);
    } else {
      this.setState(initialState);
    }
  };

  undoTurn = () => {
    this.setState(prevState => {
      let lastTurnState = prevState.gameLog[prevState.turnNo - 2];
      if (!lastTurnState) {
        return;
      }
      if (lastTurnState.userTurn === false) {
        lastTurnState = prevState.gameLog[prevState.turnNo - 1];
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

  changeSetting = (settingType, newSetting, argsFromState) => {
    const obj = {};
    obj[settingType] = newSetting;
    this.setState(obj, () => {
      if (settingType === "firstMove") {
        this.restart(newSetting, argsFromState.gridSize);
      } else {
        this.restart(argsFromState.firstMove, newSetting);
      }
    });
  };

  flip = () => {
    this.setState(prevState => ({ gameFlipped: !prevState.gameFlipped }));
  };

  generateSquares = argsFromState => {
    const boardClone = argsFromState.board.slice();
    return Array(argsFromState.gridSize ** 2)
      .fill()
      .map((x, index) => (
        <GameSquare
          key={index}
          value={boardClone[index]}
          onClick={() => this.handleClick(index, argsFromState)}
        />
      ));
  };

  simulateManyGamesAndRecordResults = (amountOfGames, argsFromState) => {
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
    const { gridSize, firstMove } = argsFromState;
    for (let gamesPlayed = 0; gamesPlayed < amountOfGames; gamesPlayed++) {
      result = simulateGame(argsFromState);
      console.log(`game ${gamesPlayed} finished`);
      counters = recordGameResults(result, counters);
      this.restart(firstMove, gridSize);
    }
    console.log(counters);
  };

  render() {
    const state = { ...this.state };
    const argsFromState = {
      board: state.board,
      gridSize: state.gridSize,
      turnNo: state.turnNo,
      outcome: state.outcome,
      gameLog: state.gameLog,
      userTurn: state.userTurn
    };
    return (
      <React.Fragment>
        <Flipper
          flip={this.flip}
          gameFlipped={state.gameFlipped}
          front={
            <Grid
              argsFromState={argsFromState}
              generateSquares={this.generateSquares}
            />
          }
          back={
            <Settings
              argsFromState={{
                gridSize: state.gridSize,
                firstMove: state.firstMove
              }}
              onClick={this.changeSetting}
            />
          }
        />
        <button
          className={styles.btn}
          onClick={() => this.restart(state.firstMove, state.gridSize)}
        >
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
            this.simulateManyGamesAndRecordResults(10000, {
              firstMove: state.firstMove,
              gridSize: state.gridSize
            })
          }
        >
          debug
        </button>
        <button className={styles.btn} onClick={this.flip}>
          settings
        </button>
        <h2 className={styles.winner}>outcome: {state.outcome}!</h2>
      </React.Fragment>
    );
  }
}

export default Game;
