import React from "react";
import styles from "./GameSquare.module.scss";
import Icon from "../icon/Icon";

const GameSquare = ({ value, onClick, iconInfo }) => {
  const { user, comp } = iconInfo;
  return (
    <button className={styles.gameSquare} onClick={onClick}>
      {value === "user" && <Icon icon={user.icon} colour={user.colour} />}
      {value === "comp" && <Icon icon={comp.icon} colour={comp.colour} />}
    </button>
  );
};

export default GameSquare;
