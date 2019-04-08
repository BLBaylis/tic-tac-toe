import React from "react";
import { Button, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "75%",
    width: "75%",
    maxWidth: "680px",
    maxHeight: "400px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

const GameModeCard = ({
  changeHoverState,
  children,
  classes,
  colour,
  onClick,
  label
}) => {
  return (
    <Card raised className={classes.card}>
      {children}
      <Button
        size="large"
        color={colour}
        variant="contained"
        onMouseOver={() => changeHoverState(true)}
        onMouseLeave={() => changeHoverState(false)}
        onClick={onClick}
      >
        {label}
      </Button>
    </Card>
  );
};

export default withStyles(styles)(GameModeCard);
