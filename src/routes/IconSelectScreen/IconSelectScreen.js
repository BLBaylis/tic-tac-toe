import React from "react";
import Flipper from "./Flipper/Flipper";
import IconSelect from "./IconSelect/IconSelect";
//import ReactCSSTransitionGroup from "react-addons-css-transition-group";
/*<ReactCSSTransitionGroup
        transitionName="slide"
        className={styles.reactCSSTransitionGroup}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >*/
/*</ReactCSSTransitionGroup>*/

const IconSelectScreen = ({ iconInfo, iconSelectFlipped, iconSelectFuncs }) => {
  return (
    <Flipper
      style={{
        height: "100%"
      }}
      flipped={iconSelectFlipped}
      front={
        <IconSelect
          player={"user"}
          iconInfo={iconInfo}
          iconSelectFlipped={iconSelectFlipped}
          iconSelectFuncs={iconSelectFuncs}
        />
      }
      back={
        <IconSelect
          player={"comp"}
          iconInfo={iconInfo}
          iconSelectFlipped={iconSelectFlipped}
          iconSelectFuncs={iconSelectFuncs}
        />
      }
    />
  );
};

export default IconSelectScreen;
