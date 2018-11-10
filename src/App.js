import React, { Component } from "react";
import Game from "./components/game/Game";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1>Brad's Tic Tac Toe</h1>
        </header>
        <Game/>
      </div>
    );
  }
}

export default App;
