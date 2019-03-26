import React, { Component } from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Game from "../Game/Game";
import IconSelect from "../../components/IconSelect/IconSelect";
import IconPreview from "../../components/IconPreview/IconPreview";
import Flipper from "../../components/Flipper/Flipper";
import {
  toggleIconSelectOpen,
  toggleIconSelectFlipped,
  updateIconInfo,
  updateGameMode
} from "../../actions";

import styles from "./TictactoeApp.module.scss";

const mapStateToProps = state => {
  const { iconSelectOpen, iconSelectFlipped } = state.interfaceReducer;
  return { iconSelectOpen, iconSelectFlipped, iconInfo: state.iconInfoReducer };
};

const mapDispatchToProps = dispatch => ({
  toggleIconSelectOpen: () => dispatch(toggleIconSelectOpen()),
  toggleIconSelectFlipped: () => dispatch(toggleIconSelectFlipped()),
  updateIconInfo: (player, iconChangesObj) =>
    dispatch(updateIconInfo(player, iconChangesObj)),
  updateGameMode: (gameMode) => dispatch(updateGameMode(gameMode))
});

class TictactoeApp extends Component {

  render() {
    const {
      iconSelectOpen,
      iconSelectFlipped,
      toggleIconSelectOpen,
      toggleIconSelectFlipped,
      iconInfo,
      updateIconInfo,
      updateGameMode
    } = this.props;
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
                flipped={iconSelectFlipped}
                front={
                  <IconSelect
                    key="iconSelectUser"
                    player="user"
                    iconInfo={iconInfo}
                    updateIconInfo={updateIconInfo}
                    iconSelectFlipped={iconSelectFlipped}
                    toggleIconSelectFlipped={toggleIconSelectFlipped}
                  />
                }
                back={
                  <IconSelect
                    key={"iconSelectComp"}
                    player={"comp"}
                    iconInfo={iconInfo}
                    updateIconInfo={updateIconInfo}
                    toggleIconSelectFlipped={toggleIconSelectFlipped}
                    toggleIconSelectOpen={toggleIconSelectOpen}
                  />
                }
              />
            )}
          </ReactCSSTransitionGroup>
          <div className={styles.gameScreenWrapper}>
            <div className={styles.gameScreen}>
              <IconPreview
                iconInfo={iconInfo}
                toggleIconSelectOpen={toggleIconSelectOpen}
                toggleIconSelectFlipped={toggleIconSelectFlipped}
              />
              <Game iconInfo={iconInfo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TictactoeApp);
