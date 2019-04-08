import React, { Component } from "react";
import GameModeSelect from "../routes/GameModeSelect/GameModeSelect";
import Game from "../routes/Game/Game";
import IconSelectScreen from "../routes/IconSelectScreen/IconSelectScreen";
import Settings from "../routes/Settings/Settings";

import styles from "./TictactoeApp.module.scss";

class TictactoeApp extends Component {
  state = {
    route: "gameModeSelect"
  };

  changeRoute = route => {
    this.setState({ route });
  };

  render() {
    const { route } = this.state;
    return (
      <div className={styles.app}>
        <div className={styles.appBody}>
          {route === "gameModeSelect" && (
            <GameModeSelect changeRoute={this.changeRoute} />
          )}
          {route === "iconSelect" && (
            <IconSelectScreen changeRoute={this.changeRoute} />
          )}
          {route === "game" && <Game changeRoute={this.changeRoute} />}
          {route === "settings" && <Settings changeRoute={this.changeRoute} />}
        </div>
      </div>
    );
  }
}

export default TictactoeApp;
