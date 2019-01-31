import React from "react";
import styles from "./Controls.module.scss";
import Button from "../button/Button";

const Controls = props => {
  return (
    <div className={styles.controls}>
      <Button primaryColour noLeftMargin onClick={props.onClickObj.undo}>
        Undo
      </Button>
      <Button
        onClick={() =>
          props.onClickObj.restart(
            props.argsFromState.firstMove,
            props.argsFromState.gridSize
          )
        }
      >
        Restart
      </Button>
      <Button primaryColour noRightMargin onClick={props.onClickObj.redo}>
        Redo
      </Button>
      <Button
        onClick={() =>
          props.onClickObj.test(10000, {
            firstMove: props.argsFromState.firstMove,
            gridSize: props.argsFromState.gridSize
          })
        }
      >
        Debug
      </Button>
      <Button primaryColour span3 onClick={props.onClickObj.flip}>
        Settings
      </Button>
    </div>
  );
};

export default Controls;
