import React, { Component } from "react";
import Game from "./components/game/Game";
import Flipper from "./components/flipper/Flipper";
import styles from "./App.module.scss";

class App extends Component {

  state = {
    gameFlipped : false
  }

  gameFlip = () => {
    this.setState((prevState) => ({gameFlipped : !(prevState.gameFlipped)}))
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1>Brad's Tic Tac Toe</h1>
        </header>
        <Flipper flipped = {this.state.gameFlipped} front={<Game />} back={<div />} />
        <button onClick = {this.gameFlip}>SETTINGS</button>
      </div>
    );
  }
}

export default App;
