import React from "react";
import Grid from "../grid/Grid";
import Controls from "../controls/Controls";

const gamePanel = props => {
  const onClickObj = {
    flip: props.flip,
    ...props.onClickObj
  };
  return (
    <React.Fragment>
      <Grid
        argsFromState={props.argsFromState}
        generateSquares={props.generateSquares}
      />
      <Controls argsFromState={props.argsFromState} onClickObj={onClickObj} />
    </React.Fragment>
  );
};

export default gamePanel;
