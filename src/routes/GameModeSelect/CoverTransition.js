import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    height: "100%",
    position: "relative",
    width: "100%"
  },
  wrapper: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    overflow: "hidden"
  },
  cover: {
    pointerEvents: "none",
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.primary.main
  }
});

const CoverTransition = ({ classes, hovered, direction }) => {
  const directionValue = hovered ? 0 : "100%";
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div
          className={classes.cover}
          style={{
            [direction]: directionValue,
            transition: `${direction} linear 100ms`
          }}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(CoverTransition);
