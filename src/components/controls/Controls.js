import React from "react";
import styles from "./Controls.module.scss";
import Button from "../button/Button";

const Controls = props => {
  console.log(props.argsFromState);
  return (
    <div className={styles.controls}>
      <Button
        noLeftMargin
        onClick={() =>
          props.onClickObj.restart(
            props.argsFromState.firstMove,
            props.argsFromState.gridSize
          )
        }
      >
        Restart
      </Button>
      <Button onClick={props.onClickObj.undo}>Undo</Button>
      <Button onClick={props.onClickObj.redo}>Redo</Button>
      <Button
        hidden
        onClick={() =>
          this.simulateManyGamesAndRecordResults(10000, {
            firstMove: props.argsFromState.firstMove,
            gridSize: props.argsFromState.gridSize
          })
        }
      >
        Debug
      </Button>
      <Button noRightMargin onClick={props.onClickObj.flip}>
        Settings
      </Button>
    </div>
  );
};

export default Controls;
