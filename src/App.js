import React, { Component } from "react";
import Game from "./components/game/Game";
import IconSelect from "./components/iconSelect/IconSelect";
import IconPreview from "./components/iconPreview/IconPreview";
import Flipper from "./components/flipper/Flipper";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    iconSelectOpen: false,
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
    const { iconInfo, iconSelectOpen } = this.state;
    return (
      <div className={styles.app}>
        {null && (
          <header className={styles.appheader}>
            <h1 className={styles.heading}>Brad's Tic Tac Toe</h1>
          </header>
        )}
        <div className={styles.appBody}>
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
          {iconSelectOpen && (
            <div className={styles.iconPreviewWrapper}>
              <IconPreview
                iconInfo={iconInfo}
                toggleIconSelect={this.toggleIconSelect}
              />
            </div>
          )}
          {iconSelectOpen && <Game iconInfo={iconInfo} />}
        </div>
      </div>
    );
  }
}

export default App;
