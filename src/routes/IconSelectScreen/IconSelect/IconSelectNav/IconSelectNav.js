import React from "react";
import { ArrowBack } from "@material-ui/icons";

import styles from "./IconSelectNav.module.scss";

const IconSelectNav = ({ player, iconInfo, iconSelectFuncs }) => {
  const { changeRoute, toggleIconSelectFlipped } = iconSelectFuncs;
  const compOnClick = () => {
    changeRoute();
    toggleIconSelectFlipped();
  };
  return (
    <div className={styles.buttonRow}>
      {player === "comp" && (
        <button onClick={changeRoute} className={styles.backButton}>
          <ArrowBack className={styles.arrow} />
        </button>
      )}
      <button
        disabled={player === "comp" && !iconInfo.compIcon}
        className={styles[`${player}ConfirmButton`]}
        onClick={player === "user" ? toggleIconSelectFlipped : compOnClick}
      >
        {`CONFIRM ${player.toUpperCase()} ICON`}
      </button>
    </div>
  );
};

export default IconSelectNav;
