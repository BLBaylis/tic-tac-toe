import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";

const CoverTransition = ({ classes, colour, hovered, vertDirection }) => {
  const noHover = useMediaQuery("(hover: none)");
  const isLandscape = useMediaQuery("(orientation:landscape)");
  const horiDirection = vertDirection === "top" ? "left" : "right";
  const direction = isLandscape ? horiDirection : vertDirection;
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div
          className={`${classes.cover} ${classes[direction]} ${
            classes[colour]
          }`}
          style={hovered || noHover ? { [direction]: 0 } : null}
        />
      </div>
    </div>
  );
};

const createDirectionStyles = direction => ({
  [direction]: "100%",
  transition: `${direction} linear 100ms`
});

const getAllDirectionStyles = ["top", "left", "right", "bottom"].map(
  createDirectionStyles
);
const [top, left, right, bottom] = getAllDirectionStyles;

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
    width: "100%"
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main
  },
  top,
  left,
  right,
  bottom
});

export default withStyles(styles)(CoverTransition);
