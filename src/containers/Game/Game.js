import React from "react";
import { connect } from "react-redux";
import {
  makeMove,
  makeUserMoveThenCompMove,
  restartGame,
  restartGameThenCompMove,
  undoTurn,
  redoTurn
} from "../../actions";

import Grid from "./Grid/Grid";
import Controls from "./Controls/Controls";
import GameSquare from "../../components/GameSquare/GameSquare";

import simulateGame from "../../gameFunctions/testing/simulateGame";
import recordGameResults from "../../gameFunctions/testing/recordGameResults";
import { generateIndexArr } from "../../gameFunctions/helperFunctions";

const mapStateToProps = state => {
  return { gameState: state.gameStateReducer };
};

const mapDispatchToProps = dispatch => ({
  makeUserMove: squareNumber => dispatch(makeMove(squareNumber)),
  makeUserMoveThenCompMove: squareNumber =>
    dispatch(makeUserMoveThenCompMove(squareNumber)),
  restartGame: (gridSize, firstMove, gameMode) =>
    dispatch(restartGame(gridSize, firstMove, gameMode)),
  restartGameThenCompMove: (gridSize, firstMove) =>
    dispatch(restartGameThenCompMove(gridSize, firstMove)),
  undoTurn: turnNo => dispatch(undoTurn(turnNo)),
  redoTurn: turnNo => dispatch(redoTurn(turnNo))
});

class Game extends React.Component {
  handleClick = squareNumber => {
    const { board, gameMode } = this.props.gameState;
    if (board[squareNumber] !== null) {
      return;
    }
    if (gameMode === "vsComp") {
      return this.props.makeUserMoveThenCompMove(squareNumber);
    } else {
      return this.props.makeUserMove(squareNumber);
    }
  };

  restartGame = (gridSize, firstMove, gameMode) => {
    console.log(gameMode);
    if (firstMove === "user" || gameMode === "pvp") {
      return this.props.restartGame(gridSize, firstMove, gameMode);
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
      iconInfo,
      undoTurn,
      redoTurn,
      changeRoute
    } = props;
    const { firstMove, gridSize, turnNo, outcome, gameMode } = gameState;
    const clickHandlersObj = {
      restartGame: () => restartGame(gridSize, firstMove, gameMode),
      undoTurn: () => undoTurn(turnNo),
      redoTurn: () => redoTurn(turnNo),
      changeRoute,
      test
    };
    return (
      <React.Fragment>
        <Grid
          outcome={outcome}
          gridSize={gridSize}
          generateSquares={() => generateSquares(iconInfo)}
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
