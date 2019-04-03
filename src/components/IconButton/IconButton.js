import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Icon from "../Icon/Icon";

const styles = {
  iconButton: {
    minHeight: "40px",
    minWidth: "40px",
    padding: 0,
  }
};

const IconButton = ({ onClick, classes, className, icon, colour }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      className={`${classes.iconButton} ${className}`}
    >
      <Icon icon={icon} colour={colour} />
    </Button>
  );
};

export default withStyles(styles)(IconButton);
