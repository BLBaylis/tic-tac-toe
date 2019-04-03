import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ControlsButton from "./ControlsButton/ControlsButton";
import styles from "./Controls.module.scss";

const Controls = ({ clickHandlersObj }) => {
  const {
    restartGame,
    undoTurn,
    redoTurn,
    test,
    changeRoute
  } = clickHandlersObj;
  return (
    <div className={styles.controls}>
      <ControlsButton
        variant="contained"
        color="primary"
        style={{ marginTop: 0 }}
        onClick={undoTurn}
      >
        Undo
      </ControlsButton>
      <ControlsButton
        onClick={() => restartGame()}
        variant="contained"
        color="primary"
      >
        Restart
      </ControlsButton>
      <ControlsButton variant="contained" color="primary" onClick={redoTurn}>
        Redo
      </ControlsButton>
      <ControlsButton
        color="secondary"
        variant="contained"
        className={styles.settingsBtn}
        style={{ marginBottom: 0 }}
        onClick={changeRoute}
      >
        Settings
      </ControlsButton>
    </div>
  );
};

export default Controls;
