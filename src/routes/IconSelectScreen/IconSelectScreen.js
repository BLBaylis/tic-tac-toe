import React from "react";
import { connect } from "react-redux";
import { toggleIconSelectFlipped, updateIconInfo } from "../../actions";
import Flipper from "./Flipper/Flipper";
import IconSelect from "./IconSelect/IconSelect";

const mapPropsToState = state => ({
  iconSelectFlipped: state.iconSelectFlippedToggleReducer.iconSelectFlipped,
  iconInfo: state.iconInfoReducer,
  gameMode: state.gameStateReducer.gameMode
});

const mapDispatchToProps = dispatch => ({
  toggleIconSelectFlipped: () => dispatch(toggleIconSelectFlipped()),
  updateIconInfo: (player, iconChangesObj) =>
    dispatch(updateIconInfo(player, iconChangesObj))
});

const IconSelectScreen = ({
  iconInfo,
  iconSelectFlipped,
  gameMode,
  updateIconInfo,
  toggleIconSelectFlipped,
  changeRoute
}) => {
  const iconSelectFuncs = {
    changeRoute,
    toggleIconSelectFlipped,
    updateIconInfo
  };
  return (
    <Flipper
      style={{
        height: "100%"
      }}
      flipped={iconSelectFlipped}
      front={
        <IconSelect
          player="user"
          iconInfo={iconInfo}
          flipped={iconSelectFlipped}
          iconSelectFuncs={iconSelectFuncs}
          gameMode={gameMode}
        />
      }
      back={
        <IconSelect
          player="comp"
          iconInfo={iconInfo}
          flipped={iconSelectFlipped}
          iconSelectFuncs={iconSelectFuncs}
          gameMode={gameMode}
        />
      }
    />
  );
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(IconSelectScreen);
