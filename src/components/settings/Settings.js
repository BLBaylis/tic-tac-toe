import React from "react";
import styles from "./Settings.module.scss";
import Button from "../button/Button";

const Settings = props => {
  return (
    <div className={styles.settings}>
      <h2 className={styles.subHeading}>SETTINGS</h2>
      <span className={styles.questions}>Who goes first?</span>
      {/* <div className={styles.buttonRow}>
              <Button
                primaryColour
                onClick={() =>
                  props.onClick("firstMove", "user", props.argsFromState)
                }
              >
                USER
              </Button>
              <Button
                primaryColour
                onClick={() =>
                  props.onClick("firstMove", "comp", props.argsFromState)
                }
              >
                COMP
              </Button>
            </div>
            <span className={styles.questions}>Grid Size</span>
            <div className={styles.buttonRow}>
              <Button
                primaryColour
                onClick={() => props.onClick("gridSize", 3, props.argsFromState)}
              >
                3 x 3
              </Button>
              <Button
                primaryColour
                onClick={() => props.onClick("gridSize", 5, props.argsFromState)}
              >
                5 x 5
              </Button>
              <Button
                primaryColour
                onClick={() => props.onClick("gridSize", 7, props.argsFromState)}
              >
                7 x 7
              </Button>
            </div>*/}
      <button className={styles.button} onClick={props.flip}>
        Back
      </button>
    </div>
  );
};

export default Settings;
