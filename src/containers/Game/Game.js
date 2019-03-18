import React from "react";
import { connect } from "react-redux";

import Flipper from "../../components/Flipper/Flipper";
import Settings from "../../components/Settings/Settings";
import Grid from "../../components/Grid/Grid";
import Controls from "../../components/Controls/Controls";
import GameSquare from "../../components/GameSquare/GameSquare";
import {
  makeMove,
  makeUserMoveThenCompMove,
  flipGameGrid,
  restartGame,
  restartGameThenCompMove,
  undoTurn,
  redoTurn
} from "../../actions";

import simulateGame from "../../gameFunctions/testing/simulateGame";
import recordGameResults from "../../gameFunctions/testing/recordGameResults";
import { generateIndexArr } from "../../gameFunctions/helperFunctions";

const mapStateToProps = state => {
  const gameState = state.updateGameGridReducer;
  const ui = state.updateInterfaceReducer;
  return {
    gameState,
    gameMode: gameState.gameMode,
    gridFlipped: ui.gridFlipped
  };
};

const mapDispatchToProps = dispatch => ({
  makeUserMove: squareNumber => dispatch(makeMove(squareNumber)),
  makeUserMoveThenCompMove: squareNumber =>
    dispatch(makeUserMoveThenCompMove(squareNumber)),
  toggleFlip: () => dispatch(flipGameGrid()),
  restartGame: (gridSize, firstMove) =>
    dispatch(restartGame(gridSize, firstMove)),
  restartGameThenCompMove: (gridSize, firstMove) =>
    dispatch(restartGameThenCompMove(gridSize, firstMove)),
  undoTurn: turnNo => dispatch(undoTurn(turnNo)),
  redoTurn: turnNo => dispatch(redoTurn(turnNo))
});

class Game extends React.Component {
  handleClick = squareNumber => {
    if (this.props.gameState.board[squareNumber] !== null) {
      return;
    }
    if (this.props.gameMode === "vsComp") {
      return this.props.makeUserMoveThenCompMove(squareNumber);
    } else {
      return this.props.makeUserMove(squareNumber);
    }
  };

  restartGame = (gridSize, firstMove) => {
    if (firstMove === "user") {
      return this.props.restartGame(gridSize, firstMove);
    } else {
      return this.props.restartGameThenCompMove(gridSize, firstMove);
    }
  };

  generateSquares = iconInfo => {
    const { gridSize, board } = this.props.gameState;
    const indexArr = generateIndexArr(gridSize ** 2);
    return indexArr.map(index => (
      <GameSquare
        iconInfo={iconInfo}
        key={index}
        keyProp={index}
        value={board[index]}
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
    const { gridSize, firstMove } = this.props.gameState;
    for (let gamesPlayed = 0; gamesPlayed < amountOfGames; gamesPlayed++) {
      result = simulateGame(firstMove, gridSize);
      if (gamesPlayed % (amountOfGames / 20) === 0) {
        console.log(`${(gamesPlayed / amountOfGames) * 100}% done!`);
      }
      counters = recordGameResults(result, counters);
      this.restartGame();
    }
    console.log(counters);
  };

  render() {
    const { props, test, generateSquares, restartGame } = this;
    const {
      gameState,
      gridFlipped,
      iconInfo,
      toggleFlip,
      undoTurn,
      redoTurn
    } = props;
    const { firstMove, gridSize, turnNo, outcome } = gameState;
    const clickHandlersObj = {
      restartGame: () => restartGame(gridSize, firstMove),
      undoTurn: () => undoTurn(turnNo),
      redoTurn: () => redoTurn(turnNo),
      test,
      toggleFlip
    };
    return (
      <React.Fragment>
        <Flipper
          flipped={gridFlipped}
          front={
            <Grid
              outcome={outcome}
              gridSize={gridSize}
              generateSquares={() => generateSquares(iconInfo)}
            />
          }
          back={
            <Settings
              restartGame={restartGame}
              toggleFlip={toggleFlip}
              flipped={gridFlipped}
            />
          }
        />
        <Controls clickHandlersObj={clickHandlersObj} />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
