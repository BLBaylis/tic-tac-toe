import React from "react";
import Grid from "../grid/Grid";
import Controls from "../controls/Controls";

const gamePanel = ({argsFromState, generateSquares, flip, onClickObj}) => {
  let newOnClickObj = {
    flip: flip,
    ...onClickObj
  };
  return (
    <React.Fragment>
      <Grid
        argsFromState={argsFromState}
        generateSquares={generateSquares}
      />
      <Controls argsFromState={argsFromState} onClickObj={newOnClickObj} />
    </React.Fragment>
  );
};

export default gamePanel;
