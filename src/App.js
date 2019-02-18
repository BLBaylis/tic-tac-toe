import React, { Component } from "react";
import Game from "./components/game/Game";
import IconSelect from "./components/iconSelect/IconSelect";
import IconPreview from "./components/iconPreview/IconPreview";
import Flipper from "./components/flipper/Flipper";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    iconSelectOpen: true,
    flipped: false,
    iconInfo: {
      user: {
        icon: "circle",
        colour: "#22b14c"
      },
      comp: {
        icon: "cross",
        colour: "#ed261a"
      }
    }
  };

  toggleNonIconSetting = setting => {
    this.setState(prevState => ({ [setting]: !prevState[setting] }));
  };

  changeIconSetting = (player, settingType, newSetting) => {
    let iconInfoCopy = { ...this.state.iconInfo };
    let playerObjCopy = { ...this.state.iconInfo[player] };
    playerObjCopy[settingType] = newSetting;
    iconInfoCopy[player] = playerObjCopy;
    this.setState({ iconInfo: iconInfoCopy });
  };

  render() {
    const { iconInfo, iconSelectOpen, flipped } = this.state;
    return (
      <div className={styles.app}>
        {null && (
          <header className={styles.appheader}>
            <h1 className={styles.heading}>Brad's Tic Tac Toe</h1>
          </header>
        )}
        <div className={styles.appBody}>
          {iconSelectOpen && (
            <Flipper
              style={{ backgroundColor: "#889B7C", height: "100%" }}
              flipped={flipped}
              front={
                <IconSelect
                  player={"user"}
                  iconInfo={iconInfo}
                  changeIconSetting={this.changeIconSetting}
                  toggleFlip={() => this.toggleNonIconSetting("flipped")}
                />
              }
              back={
                <IconSelect
                  player={"comp"}
                  iconInfo={iconInfo}
                  changeIconSetting={this.changeIconSetting}
                  toggleFlip={() => {
                    this.toggleNonIconSetting("flipped");
                  }}
                  toggleIconSelect={() => {
                    this.toggleNonIconSetting("iconSelectOpen");
                  }}
                />
              }
            />
          )}
          {!iconSelectOpen && (
            <div className={styles.gameScreenWrapper}>
              <div className={styles.gameScreen}>
                <IconPreview
                  iconInfo={iconInfo}
                  toggleIconSelect={() =>
                    this.toggleNonIconSetting("iconSelectOpen")
                  }
                  toggleFlip={() => this.toggleNonIconSetting("flipped")}
                />
                <Game iconInfo={iconInfo} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
