import React, { Component } from "react";
import Game from "./components/game/Game";
import IconSelect from "./components/iconSelect/IconSelect";
import Flipper from "./components/flipper/Flipper";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    iconSelectOpen: true
  };

  toggleIconSelect = () => {
    this.setState(prevState => ({ iconSelectOpen: !prevState.iconSelectOpen }));
  };

  render() {
    const iconSelectFlipperWrapperClass = this.state.iconSelectOpen
      ? styles.iconSelectFlipperWrapper
      : `${styles.iconSelectFlipperWrapper} ${styles.removeIconSelect}`;
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.heading}>Brad's Tic Tac Toe</h1>
        </header>
        <div className={styles.notHeader}>
          <div className={iconSelectFlipperWrapperClass}>
            <Flipper
              front={<IconSelect player={"user"} />}
              back={<IconSelect toggleIconSelect = {this.toggleIconSelect} player={"comp"} />}
            />
          </div>
          <div className={styles.iconPreviewWrapper}>
            <button onClick = {this.toggleIconSelect} className={styles.icon}></button>
            <span className = {styles.vertAlign}>VS</span>
            <button onClick = {this.toggleIconSelect} className={styles.icon}></button>
          </div>
          <Game/>
        </div>
      </div>
    );
  }
}

export default App;
