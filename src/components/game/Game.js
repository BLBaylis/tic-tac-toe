import React from "react";
import Flipper from "../flipper/Flipper";
import Settings from "../settings/Settings";
import Grid from "../grid/Grid";
import Controls from "../controls/Controls";
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
    flipped: false
  };

  toggleFlip = () => {
    this.setState(prevState => ({ flipped: !prevState.flipped }));
  };

  handleClick = squareNo => {
    const { flipped, firstMove, ...rest } = this.state;
    const stateObjClone = JSON.parse(JSON.stringify(rest));
    if (stateObjClone.board[squareNo] !== null) {
      return;
    }
    let updatedState = transformStateObj(squareNo, stateObjClone);
    if (updatedState.outcome === undefined) {
      updatedState = simulateCompMove(updatedState);
    }
    this.setState(updatedState);
  };

  changeGameSetting = (gridSize, firstMove) => {
    gridSize = Number(gridSize);
    this.setState({ gridSize, firstMove }, () => {
      this.restart();
    });
  };

  restart = () => {
    const newInitialState = {
      board: Array(this.state.gridSize ** 2).fill(null),
      gameLog: [
        {
          board: Array(this.state.gridSize ** 2).fill(null),
          turnNo: 0,
          userTurn: this.state.firstMove === "user",
          outcome: undefined
        }
      ],
      turnNo: 0,
      userTurn: this.state.firstMove === "user",
      outcome: undefined,
      gridSize: this.state.gridSize,
      firstMove: this.state.firstMove,
      flipped: false
    };
    if (newInitialState.firstMove === "comp") {
      this.setState(simulateCompMove(newInitialState));
    } else {
      this.setState(newInitialState);
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
      let nextTurnState = prevState.gameLog[prevState.turnNo + 2];
      if (!nextTurnState) {
        nextTurnState = prevState.gameLog[prevState.turnNo + 1];
      }
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

  generateSquares = iconInfo => {
    return Array(this.state.gridSize ** 2)
      .fill()
      .map((x, index) => (
        <GameSquare
          iconInfo={iconInfo}
          key={index}
          value={this.state.board[index]}
          onClick={() => this.handleClick(index)}
        />
      ));
  };

  test = amountOfGames => {
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
    const { gridSize, firstMove } = this.state;
    for (let gamesPlayed = 0; gamesPlayed < amountOfGames; gamesPlayed++) {
      result = simulateGame(firstMove, gridSize);
      if (gamesPlayed % (amountOfGames / 20) === 0) {
        console.log(`${(gamesPlayed / amountOfGames) * 100}% done!`);
      }
      counters = recordGameResults(result, counters);
      this.restart();
    }
    console.log(counters);
  };

  render() {
    const {
      state,
      props,
      restart,
      undoTurn,
      redoTurn,
      test,
      toggleFlip
    } = this;
    const { gridSize, outcome, flipped } = state;
    const { iconInfo } = props;
    const clickHandlersObj = { restart, undoTurn, redoTurn, test, toggleFlip };
    return (
      <React.Fragment>
        <Flipper
          flipped={flipped}
          front={
            <Grid
              outcome={outcome}
              gridSize={gridSize}
              generateSquares={() => this.generateSquares(iconInfo)}
            />
          }
          back={<Settings changeGameSetting={this.changeGameSetting} />}
        />
        <Controls clickHandlersObj={clickHandlersObj} />
      </React.Fragment>
    );
  }
}

export default Game;
