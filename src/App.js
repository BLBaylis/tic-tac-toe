import React, { Component } from "react";
import Game from "./components/game/Game";
import Flipper from "./components/flipper/Flipper";
import Settings from "./components/settings/Settings";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    gameFlipped: false,
    gridSize: 7,
    firstMove: "comp"
  };

  gameFlip = () => {
    this.setState(prevState => ({ gameFlipped: !prevState.gameFlipped }));
  };

  changeSetting = (settingType, newSetting) => {
    const obj = {};
    obj[settingType] = newSetting;
    this.setState(obj);
  };

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1>Brad's Tic Tac Toe</h1>
        </header>
        <Flipper
          flipped={this.state.gameFlipped}
          front={
            <Game
              gridSize={this.state.gridSize}
              firstMove={this.state.firstMove}
            />
          }
          back={<Settings onClick={this.changeSetting} />}
        />
        <button onClick={this.gameFlip}>SETTINGS</button>
      </div>
    );
  }
}

export default App;
