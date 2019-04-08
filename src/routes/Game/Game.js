import React, { Component } from "react";
import { connect } from "react-redux";
import {
  makeMove,
  makeUserMoveThenCompMove,
  restartGame,
  restartGameThenCompMove,
  changeToRecordedTurn
} from "../../actions";

import IconPreview from "./IconPreview/IconPreview";
import Grid from "./Grid/Grid";
import Controls from "./Controls/Controls";
import GameSquare from "./GameSquare/GameSquare";

import simulateGame from "../../gameFunctions/testing/simulateGame";
import recordGameResults from "../../gameFunctions/testing/recordGameResults";
import { generateIndexArr } from "../../gameFunctions/helperFunctions/helperFunctions";

import styles from "./Game.module.scss";

const mapStateToProps = state => {
  return {
    gameState: state.gameStateReducer,
    iconInfo: state.iconInfoReducer
  };
};

const mapDispatchToProps = dispatch => ({
  makeUserMove: squareNumber => dispatch(makeMove(squareNumber)),
  makeUserMoveThenCompMove: squareNumber =>
    dispatch(makeUserMoveThenCompMove(squareNumber)),
  restartGame: (gridSize, firstMove, gameMode) =>
    dispatch(restartGame(gridSize, firstMove, gameMode)),
  restartGameThenCompMove: (gridSize, firstMove) =>
    dispatch(restartGameThenCompMove(gridSize, firstMove)),
  changeToRecordedTurn: (direction, turnsToMove) =>
    dispatch(changeToRecordedTurn(direction, turnsToMove))
});

class Game extends Component {
  handleClick = squareNumber => {
    const { gameBoard, gameMode } = this.props.gameState;
    if (gameBoard[squareNumber] !== null) {
      return;
    }
    if (gameMode === "vsComp") {
      //debugger;
      return this.props.makeUserMoveThenCompMove(squareNumber);
    } else {
      return this.props.makeUserMove(squareNumber);
    }
  };

  restartGame = (gridSize, firstMove, gameMode) => {
    if (firstMove === "user" || gameMode === "pvp") {
      return this.props.restartGame(gridSize, firstMove, gameMode);
    } else {
      return this.props.restartGameThenCompMove(gridSize, firstMove);
    }
  };

  generateSquares = iconInfo => {
    const { gridSize, gameBoard } = this.props.gameState;
    const indexArr = generateIndexArr(gridSize ** 2);
    return indexArr.map(index => (
      <GameSquare
        iconInfo={iconInfo}
        key={index}
        keyProp={index}
        value={gameBoard[index]}
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
    const {
      iconInfo,
      toggleIconSelectFlipped,
      changeRoute,
      changeToRecordedTurn
    } = this.props;
    const { firstMove, gridSize, outcome, gameMode } = this.props.gameState;
    const clickHandlersObj = {
      restartGame: () => this.restartGame(gridSize, firstMove, gameMode),
      undoTurn: () => changeToRecordedTurn("back", gameMode === "pvp" ? 1 : 2),
      redoTurn: () =>
        changeToRecordedTurn("forward", gameMode === "pvp" ? 1 : 2),
      changeRoute
    };
    return (
      <div className={styles.gameScreenWrapper}>
        <div className={styles.gameScreen}>
          <IconPreview
            iconInfo={iconInfo}
            changeRoute={() => changeRoute("iconSelect")}
            toggleIconSelectFlipped={toggleIconSelectFlipped}
          />
          <Grid
            outcome={outcome}
            gridSize={gridSize}
            gameMode={gameMode}
            generateSquares={() => this.generateSquares(iconInfo)}
          />
          <Controls clickHandlersObj={clickHandlersObj} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
