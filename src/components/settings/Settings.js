import React from "react";
import styles from "./Settings.module.scss";

const Settings = props => {
  return (
    <div className={styles.settings}>
      <h2>SETTINGS</h2>
      <p>Who goes first?</p>
      <button
        onClick={() => props.onClick("firstMove", "user", props.argsFromState)}
      >
        ME
      </button>
      <button
        onClick={() => props.onClick("firstMove", "comp", props.argsFromState)}
      >
        COMPUTER
      </button>
      <p>Grid Size</p>
      <button onClick={() => props.onClick("gridSize", 3, props.argsFromState)}>
        3 x 3<br />
        (recommended)
      </button>
      <button onClick={() => props.onClick("gridSize", 5, props.argsFromState)}>
        5 x 5
      </button>
      <button onClick={() => props.onClick("gridSize", 7, props.argsFromState)}>
        7 x 7
      </button><br/>
      <button onClick={props.flip}>Back</button>
    </div>
  );
};

export default Settings;
