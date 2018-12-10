import React, { Component } from "react";
import Game from "./components/game/Game";
import IconSelect from "./components/iconSelect/IconSelect";
import Flipper from "./components/flipper/Flipper";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.heading}>Brad's Tic Tac Toe</h1>
        </header>
        <div className={styles.notHeader}>
          <div className={styles.iconSelectFlipperWrapper}>
            <Flipper front={<IconSelect />} back={<IconSelect />} />
          </div>
          <div className={styles.iconPreviewWrapper}>
            <div className={styles.icon} />
            <span>VS</span>
            <div className={styles.icon} />
          </div>
          {/*<Game/> */}
        </div>
      </div>
    );
  }
}

export default App;
