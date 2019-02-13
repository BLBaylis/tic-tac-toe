import React from "react";
import styles from "./Controls.module.scss";

const Controls = ({ clickHandlersObj }) => {
  const { restart, undo, redo, test, toggleFlip } = clickHandlersObj;
  return (
    <div className={styles.controls}>
      <button className={styles.button} style={{ marginTop: 0 }} onClick={undo}>
        Undo
      </button>
      <button className={styles.button} onClick={() => restart()}>
        Restart
      </button>
      <button className={styles.button} onClick={redo}>
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
