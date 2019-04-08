import React from "react";
import { ArrowBack } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import styles from "./IconSelectNav.module.scss";

const IconSelectNav = ({ player, iconInfo, iconSelectFuncs }) => {
  const { changeRoute, toggleIconSelectFlipped } = iconSelectFuncs;
  const compOnClick = () => {
    changeRoute("game");
    toggleIconSelectFlipped();
  };
  return (
    <div className={styles.buttonRow}>
      {player === "comp" && (
        <Button
          color="secondary"
          onClick={toggleIconSelectFlipped}
          className={styles.backButton}
          variant="contained"
        >
          <ArrowBack className={styles.arrow} />
        </Button>
      )}
      <Button
        color="primary"
        disabled={player === "comp" && !iconInfo.compIcon}
        className={styles[`${player}ConfirmButton`]}
        onClick={player === "user" ? toggleIconSelectFlipped : compOnClick}
        variant="contained"
      >
        {`CONFIRM ${player.toUpperCase()} ICON`}
      </Button>
    </div>
  );
};

export default IconSelectNav;
