import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Game from "../Game/Game";
import IconSelect from "../../components/IconSelect/IconSelect";
import IconPreview from "../../components/IconPreview/IconPreview";
import Flipper from "../../components/Flipper/Flipper";

import styles from "./TictactoeApp.module.scss";

class TictactoeApp extends Component {
  state = {
    iconSelectOpen: true,
    flipped: false,
    iconInfo: {
      user: {
        icon: "circle",
        iconType: "nought",
        colour: "#22b14c"
      },
      comp: {
        icon: undefined,
        iconType: undefined,
        colour: "#ed261a"
      }
    }
  };

  toggleNonIconSetting = setting => {
    this.setState(prevState => ({ [setting]: !prevState[setting] }));
  };

  changeIconSetting = (player, settingChanges) => {
    const iconInfo = this.state.iconInfo;
    let iconInfoCopy = { ...iconInfo };
    iconInfoCopy[player] = {
      icon: settingChanges.icon || this.state.iconInfo[player].icon,
      iconType: settingChanges.iconType || this.state.iconInfo[player].iconType,
      colour: settingChanges.colour || this.state.iconInfo[player].colour
    };
    if (
      player === "user" &&
      settingChanges.iconType !== iconInfo.user.iconType
    ) {
      iconInfo.comp.icon = undefined;
    }
    this.setState({ iconInfo: iconInfoCopy });
  };

  render() {
    const { iconInfo, iconSelectOpen, flipped } = this.state;
    return (
      <div className={styles.app}>
        <div className={styles.appBody}>
          <ReactCSSTransitionGroup
            transitionName="slide"
            className={styles.reactCSSTransitionGroup}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {iconSelectOpen && (
              <Flipper
                key="iconSelectFlipper"
                style={{
                  backgroundColor: "#889B7C",
                  height: "100%",
                  top: "100%"
                }}
                flipped={flipped}
                front={
                  <IconSelect
                    key={"iconSelectUser"}
                    player={"user"}
                    iconInfo={iconInfo}
                    changeIconSetting={this.changeIconSetting}
                    flipped={flipped}
                    toggleFlip={() => this.toggleNonIconSetting("flipped")}
                  />
                }
                back={
                  <IconSelect
                    key={"iconSelectComp"}
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
          </ReactCSSTransitionGroup>
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
        </div>
      </div>
    );
  }
}

export default TictactoeApp;
