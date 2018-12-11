import React, { Component } from "react";
import Game from "./components/game/Game";
import IconSelect from "./components/iconSelect/IconSelect";
import IconGenerator from "./components/iconGenerator/IconGenerator";
import Flipper from "./components/flipper/Flipper";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    iconSelectOpen: true,
    iconInfo: {
      user: {
        icon: "circle",
        colour: "lightGreen"
      },
      comp: {
        icon: "cross",
        colour: "lightRed"
      }
    }
  };

  toggleIconSelect = () => {
    this.setState(prevState => ({ iconSelectOpen: !prevState.iconSelectOpen }));
  };

  changeSetting = (player, settingType, newSetting) => {
    let iconInfoCopy = { ...this.state.iconInfo };
    let playerObj = { ...this.state.iconInfo[player] };
    playerObj[settingType] = newSetting;
    iconInfoCopy[player] = playerObj;
    this.setState({ iconInfo: iconInfoCopy });
  };

  render() {
    const iconSelectFlipperWrapperClass = this.state.iconSelectOpen
      ? styles.iconSelectFlipperWrapper
      : `${styles.iconSelectFlipperWrapper} ${styles.removeIconSelect}`;
    const iconInfo = this.state.iconInfo;
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.heading}>Brad's Tic Tac Toe</h1>
        </header>
        <div className={styles.notHeader}>
          <div className={iconSelectFlipperWrapperClass}>
            <Flipper
              front={
                <IconSelect
                  changeSetting={this.changeSetting}
                  iconInfo={this.state.iconInfo}
                  player={"user"}
                />
              }
              back={
                <IconSelect
                  changeSetting={this.changeSetting}
                  iconInfo={iconInfo}
                  toggleIconSelect={this.toggleIconSelect}
                  player={"comp"}
                />
              }
            />
          </div>
          <div className={styles.iconPreviewWrapper}>
            <button onClick={this.toggleIconSelect} className={styles.icon}><IconGenerator iconInfo = {iconInfo.user}/> </button>
            VS
            <button onClick={this.toggleIconSelect} className={styles.icon}><IconGenerator iconInfo = {iconInfo.comp}/> </button>
          </div>
          <Game iconInfo={iconInfo} />
        </div>
      </div>
    );
  }
}

export default App;
