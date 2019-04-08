import React from "react";
import styles from "./GameSquare.module.scss";
import Icon from "../../../components/Icon/Icon";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const GameSquare = ({ value, onClick, iconInfo, keyProp }) => {
  const { userIcon, userIconColour, compIcon, compIconColour } = iconInfo;
  return (
    <button
      aria-label="grid square"
      className={styles.gameSquare}
      onClick={onClick}
    >
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={150}
      >
        {value === "user" && (
          <Icon key={keyProp} icon={userIcon} colour={userIconColour} />
        )}
        {value === "comp" && (
          <Icon key={keyProp} icon={compIcon} colour={compIconColour} />
        )}
      </ReactCSSTransitionGroup>
    </button>
  );
};

export default GameSquare;
