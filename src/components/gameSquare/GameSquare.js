import React from "react";
import styles from "./GameSquare.module.scss";
import Icon from "../icon/Icon";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const GameSquare = ({ value, onClick, iconInfo, keyProp }) => {
  const { user, comp } = iconInfo;
  return (
    <button aria-label = "grid square" className={styles.gameSquare} onClick={onClick}>
      <ReactCSSTransitionGroup
        transitionName = "fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={200}
      >
        {value === "user" && <Icon key={keyProp} icon={user.icon} colour={user.colour} />}
        {value === "comp" && <Icon key={keyProp} icon={comp.icon} colour={comp.colour} />}
      </ReactCSSTransitionGroup>
    </button>
  );
};

export default GameSquare;
