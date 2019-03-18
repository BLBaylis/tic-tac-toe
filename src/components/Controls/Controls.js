import React from "react";
import styles from "./Controls.module.scss";

const Controls = ({ clickHandlersObj }) => {
  const {
    restartGame,
    undoTurn,
    redoTurn,
    test,
    toggleFlip
  } = clickHandlersObj;
  return (
    <div className={styles.controls}>
      <button
        className={styles.button}
        style={{ marginTop: 0 }}
        onClick={undoTurn}
      >
        Undo
      </button>
      <button className={styles.button} onClick={() => restartGame()}>
        Restart
      </button>
      <button className={styles.button} onClick={redoTurn}>
        Redo
      </button>
      {null && <button onClick={() => test(10000)}>Debug</button>}
      <button
        className={styles.settingsBtn}
        style={{ marginBottom: 0 }}
        onClick={toggleFlip}
      >
        Settings
      </button>
    </div>
  );
};

export default Controls;
