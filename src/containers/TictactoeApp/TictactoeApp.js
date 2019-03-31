import React, { Component } from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import IconSelectScreen from "../../routes/IconSelectScreen/IconSelectScreen";
import GameScreen from '../../routes/GameScreen/GameScreen';

import {
  toggleIconSelectOpen,
  toggleIconSelectFlipped,
  updateIconInfo,
  changeRoute
} from "../../actions";

import styles from "./TictactoeApp.module.scss";
import Settings from "../../routes/Settings/Settings";
import GameModeSelect from "../../routes/GameModeSelect/GameModeSelect";

const mapStateToProps = state => {
  return { ...state.interfaceReducer, iconInfo: state.iconInfoReducer };
};

const mapDispatchToProps = dispatch => ({
  changeRoute: (route) => dispatch(changeRoute(route)),
  toggleIconSelectFlipped: () => dispatch(toggleIconSelectFlipped()),
  updateIconInfo: (player, iconChangesObj) =>
    dispatch(updateIconInfo(player, iconChangesObj))
});

class TictactoeApp extends Component {

  render() {
    const {
      iconInfo,
      updateIconInfo,
      iconSelectFlipped,
      toggleIconSelectFlipped,
      route,
      changeRoute
    } = this.props;
    const iconSelectFuncs = {
      updateIconInfo,
      toggleIconSelectFlipped,
      changeRoute: () => changeRoute("gameScreen")
    };
    return (
      <div className={styles.app}>
        <div className={styles.appBody}>
          {route === "gameModeSelect" && (
            <GameModeSelect
              changeRoute={() => changeRoute("iconSelect")}
            />
          )}
          {route === "iconSelect" && (
            <IconSelectScreen
              iconInfo={iconInfo}
              iconSelectFlipped = {iconSelectFlipped}
              iconSelectFuncs = {iconSelectFuncs}
            />
          )}
          {route === "gameScreen" && (
            <GameScreen
              iconInfo = {iconInfo}
              changeRoute = {() => changeRoute("settings")}
              toggleIconSelectFlipped= {toggleIconSelectFlipped}
            />
          )}
          {route === "settings" && (
            <Settings changeRoute={() => changeRoute("gameScreen")}/>
          )}
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TictactoeApp);
